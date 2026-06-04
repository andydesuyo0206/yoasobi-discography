// Vercel Serverless Function
// サーバー側でGoogle News RSSを取得→JSONで返す
// Vercelのエッジキャッシュで30分間キャッシュ

export default async function handler(req, res) {
  // CORS + キャッシュヘッダー
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400');

  try {
    const rssUrl = 'https://news.google.com/rss/search?q=YOASOBI&hl=ja&gl=JP&ceid=JP:ja';
    const response = await fetch(rssUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; YOASOBISite/1.0)' },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) throw new Error(`RSS fetch failed: ${response.status}`);

    const xml = await response.text();

    // XMLからitemsを抽出（依存なし・純正JS）
    const items = [];
    const itemRx = /<item>([\s\S]*?)<\/item>/g;
    let m;

    while ((m = itemRx.exec(xml)) !== null && items.length < 30) {
      const block = m[1];

      const get = (tag) => {
        const cdata = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
        if (cdata) return cdata[1].trim();
        const plain = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
        return plain ? plain[1].replace(/<[^>]+>/g, '').trim() : '';
      };

      // <link> は CDATA なしで来ることが多い
      const linkMatch = block.match(/<link>([\s\S]*?)<\/link>/) ||
                        block.match(/<link[^>]*href="([^"]+)"/);
      const link = linkMatch ? linkMatch[1].trim() : '';

      // Google Newsのsourceタグ
      const srcMatch = block.match(/<source[^>]*>([\s\S]*?)<\/source>/);
      const source = srcMatch ? srcMatch[1].trim() : '';

      const title = get('title');
      const pubDate = get('pubDate');
      const description = get('description');

      if (title && link) {
        items.push({ title, link, pubDate, source, description });
      }
    }

    return res.status(200).json({ status: 'ok', items });

  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.message });
  }
}
