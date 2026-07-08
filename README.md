# YOASOBI Discography Archive

YOASOBIのディスコグラフィ・軌跡をまとめたファンメイドのアーカイブサイトです。

**公開URL:** https://yoasobi-discography.vercel.app/

> Fan-made site. Not affiliated with Echoes / Sony Music Labels or YOASOBI.
> 楽曲・ジャケット写真・記事等の著作権は各権利者に帰属します。

## コンテンツ

| ページ | 内容 |
|--------|------|
| `index.html` | トップページ。統計サマリーとカテゴリグリッド |
| `singles.html` | シングル一覧（32作品）。ジャケ写クリックで詳細モーダル（原作小説・制作背景・受容） |
| `albums.html` | EP一覧（THE BOOK シリーズ / E-SIDE シリーズ 計7作品） |
| `lives.html` | ライブ・フェス出演歴。Leaflet による世界地図表示つき |
| `novels.html` | 原作小説一覧（29作品）。ソース別フィルター・検索対応 |
| `articles.html` | 厳選記事アーカイブ。カテゴリフィルター・検索対応 |
| `profile.html` | メンバープロフィール・実績・年表タイムライン |

## 技術構成

- **静的 HTML / CSS / JavaScript** — ビルドツール・フレームワーク不使用
- **`data.js`** — シングル・EP・ライブ・プロフィールの全データを一元管理
- **ジャケット画像** — Wikipedia の `Special:FilePath` リダイレクト経由で取得
- **地図表示** — [Leaflet](https://leafletjs.com/)（lives.html）
- **`api/feed.js`** — Vercel サーバーレス関数（現在未使用）

## デプロイ

[Vercel](https://vercel.com/) にホスティングしています。`master` ブランチへ push すると自動でデプロイされます。

```bash
git add .
git commit -m "update"
git push origin master
```

## データ更新の手引き

- **楽曲・EP・ライブの追加/修正** → `data.js` を編集（各ページが読み込んで描画）
- **記事の追加** → `articles.html` 内の `ARTICLES` 配列を編集
  - ⚠️ タイトル内の `"`（二重引用符）はJS文字列と衝突するため `『』` などに置き換えること
- **原作小説の追加** → `novels.html` 内の `NOVELS` 配列を編集
- **トップの統計数字** → `index.html` の Stats セクションとカテゴリカードを手動更新

## ライセンス

サイトのコード部分は自由に参照できますが、掲載データ・画像・記事の権利は各権利者に帰属します。
