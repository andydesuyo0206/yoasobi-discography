// Wikimedia Special:FilePath を利用（リダイレクトで実際の画像URLへ）
const WM = (name) => `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}`;

const DATA = {
  singles: [
    {
      title:"夜に駆ける", titleEn:"Into the Night", year:2019, date:"2019年11月1日",
      cert:"2×ダイヤモンド（配信）", chart:"Oricon Combined 年間1位",
      artwork: WM("Yoru ni Kakeru cover art.jpg"),
      novel:"タナトスの誘惑 / 星野舞夜",
      theme:"死への誘惑と、それを引き止めようとする恋人の葛藤。ハッピーエンドのない純愛を疾走感あるサウンドで表現。",
      background:"monogatary.com主催「モノコン2019」の受賞作を原作に、ayaseが3ヶ月で20〜30本のデモを制作。初回レコーディングはギターを高田馬場のカラオケボックスで録音、制作費は約3,000円。",
      reception:"配信のみのデビューにもかかわらずOricon年間1位を獲得。CDリリースなしで首位を獲得した初のシングルとして音楽史に名を刻む。ストリーミング累計10億回突破。",
      highlight: false
    },
    {
      title:"あの夢をなぞって", titleEn:"Tracing the Dream", year:2020, date:"2020年3月6日",
      cert:"3×プラチナム（配信）", chart:"Oricon Combined #29",
      artwork: WM("Ano Yume o Nazotte cover art.jpg"),
      novel:"夢の雫と星の花 / いしき蒼太",
      theme:"花火大会で予知夢を見た女子高生の、淡い恋と切なさ。「また夢を見てしまった」という繰り返しが曲の情景を彩る。",
      background:"デビュー後初のリリース。前作の疾走感から一転、柔らかな浮遊感のあるサウンドでYOASOBIの表現の幅広さを示した第2弾。",
      reception:"デビュー曲の勢いそのままに3×プラチナム認定を獲得。YOASOBIが一発屋でないことを証明した重要作。"
    },
    {
      title:"ハルジオン", titleEn:"Halzion", year:2020, date:"2020年5月22日",
      cert:"3×プラチナム（配信）", chart:"Oricon Combined #7",
      artwork: WM("Halzion cover art.jpg"),
      novel:"それでも、ハッピーエンド / 橋爪駿輝",
      theme:"失恋で傷ついた女性が少しずつ立ち直っていく物語。「ハルジオン（春紫苑）」という花言葉「追いかける愛」が物語の核心。",
      background:"COVID-19の緊急事態宣言が発令された直後にリリース。聴き手が孤独の中で発見し、SNSで急速に広まった。",
      reception:"Oricon Combined #7を記録。閉塞感の続く2020年春、希望と再生のメッセージが多くの共感を呼んだ。"
    },
    {
      title:"たぶん", titleEn:"Tabun", year:2020, date:"2020年7月3日",
      cert:"2×プラチナム（配信）", chart:"Oricon Combined #11",
      artwork: WM("Yoasobi - Tabun.png"),
      novel:"たぶん / しなの",
      theme:"同棲相手が去った朝、一人目覚めた主人公の心情。「たぶん」という言葉が示す確信のない、曖昧な未練と痛み。",
      background:"原作小説の余白を大切にしながら制作。ayaseが「歌詞の行間に小説の情景を封じ込めた」と語る楽曲。",
      reception:"静かなベースラインとikuraの繊細なボーカルが絶賛され、失恋ソングの傑作として根強い人気を誇る。"
    },
    {
      title:"群青", titleEn:"Gunjō", year:2020, date:"2020年8月21日",
      cert:"ダイヤモンド（配信）", chart:"Oricon Combined #9",
      artwork: WM("Yoasobi - Gunjou.png"),
      novel:"ブルーピリオド / 山口つばさ（漫画）",
      theme:"美大を目指す高校生たちの挫折と成長。「どうしたって言えなかった 声にならない声で」——自分の可能性を信じる叫び。",
      background:"漫画原作初のYOASOBI楽曲。コーラス「あの青を越えて」は合唱アレンジでも世界的に人気を博し、YouTubeで数千万回再生を獲得するコーラス動画が世界各地で制作された。",
      reception:"ダイヤモンド認定（配信）。ストリーミング累計7億回以上。合唱版が教育現場でも使用されるほど普及。"
    },
    {
      title:"ハルカ", titleEn:"Haruka", year:2020, date:"2020年11月6日",
      cert:"3×プラチナム（配信）", chart:"Oricon Combined #18",
      artwork: WM("Yoasobi - Haruka.jpg"),
      novel:"遠く遠く / タケウチリョウ",
      theme:"遠距離になった恋人への想いと、再会を待ち望む純粋な感情。「ハルカ」という名前が遠い春と人名の二重の意味を持つ。",
      background:"2020年の締めくくりとしてリリース。年間を通じて「距離感」がテーマとなるコロナ禍の空気に寄り添った楽曲として受け入れられた。",
      reception:"THE BOOK（1st EP）に収録。3×プラチナム認定。遠距離恋愛を経験したリスナーから特に深い共感を得た。"
    },
    {
      title:"怪物", titleEn:"Kaibutsu", year:2021, date:"2021年1月22日",
      cert:"ダイヤモンド（配信）", chart:"Oricon Combined #2",
      artwork: WM("Yoasobi - Kaibutsu.jpg"),
      novel:"自分の胸に自分の耳を押し当てて / 板垣巴留",
      theme:"肉食獣の本能と、愛する者を守りたいという相反する衝動。「自分の中の怪物」と向き合う主人公の葛藤と覚悟。",
      background:"TVアニメ「BEASTARS」第2期OPとして、原作者・板垣巴留が書き下ろした小説を原作に制作。YOASOBIとしてアニメとのコラボ初作品。",
      reception:"2021年 日本最多売上デジタルシングル。TIME誌「2021年のベスト曲10」5位。日本ゴールドディスク大賞4冠。YouTube MV 3億回再生突破。",
      highlight: false
    },
    {
      title:"優しい彗星", titleEn:"Yasashii Suisei", year:2021, date:"2021年1月6日",
      cert:"プラチナム（配信）", chart:"Oricon Singles #14",
      artwork: WM("Yoasobi - Yasashii Suisei.jpeg"),
      novel:"獅子座流星群のままに / 板垣巴留",
      theme:"異種族間の友情と緊張関係。「彗星のように現れ、流れ去る」儚い絆の美しさ。",
      background:"「怪物」と同時リリース。同じく板垣巴留の短編小説を原作とし、BEASTARSの世界観と連動した双子作品として制作。",
      reception:"「怪物」との同時リリースながらも高い支持を獲得。ファンの間では「怪物」の裏面的存在として語られる。"
    },
    {
      title:"もう少しだけ", titleEn:"Mō Sukoshi Dake", year:2021, date:"2021年2月19日",
      cert:"2×プラチナム（配信）", chart:"Oricon Combined #4",
      artwork: WM("Mō Sukoshi Dake.jpeg"),
      novel:"めぐる。/ 千春",
      theme:"占いで背中を押されて行動した女性が巡り会う、小さな奇跡と幸せ。「もう少しだけ頑張ろう」という日常の励まし。",
      background:"MVではikuraが主演女優として出演。日常の温かみを大切にしたアコースティックな音作りで、YOASOBI楽曲の中でも特に穏やかな質感。",
      reception:"2×プラチナム認定。癒しを求めるリスナーから高い支持を受け、長期にわたってチャートインし続けた。"
    },
    {
      title:"三原色", titleEn:"Sangenshoku", year:2021, date:"2021年4月2日",
      cert:"3×プラチナム（配信）", chart:"Oricon Combined #3",
      artwork: WM("Yoasobi - Sangenshoku.jpeg"),
      novel:"RGB / 小御門優一郎",
      theme:"疎遠になった幼馴染3人の再会と友情の再生。赤・緑・青の三原色が交わって白になるように、異なる個性が融合する喜び。",
      background:"ayaseが「友人への手紙のように書いた」と語る楽曲。イントロのピアノとラストのコーラスが展開する構成は、関係の修復を音で表現している。",
      reception:"3×プラチナム認定。卒業式・送辞での使用例が多く、友情・絆をテーマにした楽曲として教育現場でも高い人気。"
    },
    {
      title:"ラブレター", titleEn:"Loveletter", year:2021, date:"2021年7月1日",
      cert:"プラチナム（配信）", chart:"Oricon Combined #3",
      artwork: WM("Yoasobi - Love Letter.jpeg"),
      novel:"ラブレター / むつき潤",
      theme:"死別した恋人への手紙という形式で綴られる、永遠の愛の告白。生きているうちに言えなかった言葉。",
      background:"ゆったりとしたテンポとikuraの情感豊かなボーカルが際立つバラード。THE BOOK 2のリリースに合わせた楽曲群の一角を担う。",
      reception:"プラチナム認定。感情的な歌詞とメロディが高く評価され、ライブでの披露時には会場が静まり返るとファンが証言。"
    },
    {
      title:"大正浪漫", titleEn:"Taishō Roman", year:2021, date:"2021年9月3日",
      cert:"プラチナム（配信）", chart:"Oricon Combined #5",
      artwork: WM("Yoasobi - Taisho Roman.jpeg"),
      novel:"大正浪漫 / NATSUMI",
      theme:"大正時代を舞台にした恋愛小説が原作。書生と娘の身分を超えた恋。レトロモダンな雰囲気と現代的なサウンドの融合。",
      background:"和楽器風の音色とayaseの電子音楽的アプローチを融合させた実験的な楽曲。衣装やMVのビジュアルも大正ロマン調でファンを魅了。",
      reception:"プラチナム認定。大正ロマンの世界観がコスプレ・ファンアートで大いに盛り上がり、視覚的なIPとしても拡大。"
    },
    {
      title:"ツバメ", titleEn:"Tsubame", year:2021, date:"2021年12月1日",
      cert:"プラチナム（配信）", chart:"Oricon Combined #29",
      artwork: WM("Yoasobi - Tsubame.jpg"),
      novel:"ツバメ / 水上下波",
      theme:"厳しい世界でもがきながら生きる人間の姿を、鳥のツバメになぞらえた応援歌。「翼を広げて飛べ」という祈り。",
      background:"THE BOOK 2の締めくくり楽曲。レコーディングの際、ikuraが「自分の人生と重なった」と話し涙したエピソードが知られる。",
      reception:"プラチナム認定。THE BOOK 2の中でも特に感情的な楽曲として、ライブのクライマックスを飾ることが多い。"
    },
    {
      title:"ミスター", titleEn:"Mister", year:2022, date:"2022年1月28日",
      cert:"ゴールド（配信）", chart:"Oricon Combined #19",
      artwork: WM("Yoasobi - Mr.jpg"),
      novel:"私だけの所有者 / 清水朔（第159回直木賞受賞作家）",
      theme:"アンドロイドが「所有者」に向ける一方的な愛情と執着。人間とアンドロイドの境界を問う近未来SF的な物語。",
      background:"直木賞作家・清水朔が書き下ろした短編小説が原作。「ミスター」という呼称はアンドロイドが所有者を呼ぶ称号。ダークなSFテーマを軽快なポップサウンドで包んだ異色作。",
      reception:"ゴールド認定。テーマの独自性が話題を呼び、YOASOBIの楽曲の幅広さを改めて示した作品として評価。"
    },
    {
      title:"好きだ", titleEn:"Suki da", year:2022, date:"2022年4月1日",
      cert:"ゴールド（配信）", chart:"Oricon Combined #23",
      artwork: WM("Yoasobi - Suki da.png"),
      novel:"好きだ / 水上下波",
      theme:"「好きだ」という一言が言えない純粋な恋心。シンプルな言葉に込められた複雑な感情と勇気。",
      background:"エイプリルフールのリリースというユニークなタイミング。真剣な恋愛テーマとの対比が話題になった。",
      reception:"ゴールド認定。「好きだ」という直球な感情表現が若い世代に刺さり、告白のBGMとして多く使用されたと報告。"
    },
    {
      title:"祝福", titleEn:"Shukufuku", year:2022, date:"2022年10月28日",
      cert:"3×プラチナム（配信）", chart:"Oricon Combined #3",
      artwork: WM("Yoasobi - Shukufuku.png"),
      novel:"揺りかごの星 / 大河内一楼",
      theme:"機動戦士ガンダム 水星の魔女の原作小説をもとに、スレッタとミオリネの関係性をメタファーで描いた楽曲。祝福とは何かという問いかけ。",
      background:"ガンダムシリーズとのコラボという歴史的な大抜擢。OPアニメとの親和性が視聴者を圧倒し、放送開始直後からSNSで拡散。",
      reception:"3×プラチナム認定。アニメファン以外にも広く波及し、YOASOBIの海外認知度を大幅に引き上げた転換点となった楽曲。"
    },
    {
      title:"ADVENTURE", titleEn:"Adventure", year:2023, date:"2023年1月20日",
      cert:"プラチナム（配信）", chart:"Oricon Combined #48",
      artwork: WM("Yoasobi - Adventure.png"),
      novel:"冒険者たち / さかしたみか",
      theme:"未知の世界へ踏み出す恐怖と高揚感。「怖くても、それでも前へ」という冒険者の精神を活気あるサウンドで表現。",
      background:"THE BOOK 3のリードトラック。新たなフェーズへ進むYOASOBI自身の宣言のような楽曲としても解釈される。",
      reception:"プラチナム認定。ライブのオープニングでも使用されることが多く、観客の熱量を高める楽曲として定着。"
    },
    {
      title:"セブンティーン", titleEn:"Seventeen", year:2023, date:"2023年3月3日",
      cert:"プラチナム（配信）", chart:"Oricon Combined #32",
      artwork: WM("Yoasobi - Seventeen.png"),
      novel:"夢の雫と星の花 / いしき蒼太（「あの夢をなぞって」の続編）",
      theme:"17歳という特別な年齢の瞬間を切り取った青春讃歌。儚く美しい十代の一瞬を永遠に刻み込もうとする衝動。",
      background:"「あの夢をなぞって」と同じ原作者・いしき蒼太による続編小説が原作。3年越しの物語の続きが楽曲で蘇った。",
      reception:"プラチナム認定。「あの夢をなぞって」ファンから感涙の声が続出。卒業シーズンに多くのプレイリストに選ばれた。"
    },
    {
      title:"アイドル", titleEn:"Idol", year:2023, date:"2023年4月12日",
      cert:"プラチナム（配信）", chart:"Japan Hot 100 22週1位",
      artwork: WM("Idol (Yoasobi song).png"),
      novel:"45510 / 赤坂アカ（推しの子 原作者）",
      theme:"アイドル・星野アイへの崇拝と嫉妬、そして「嘘」と「本当の愛」の矛盾。推しの子の世界観と芸能界の光と闇。",
      background:"TVアニメ「推しの子」OPとして制作。作中の設定上「アイドルが歌う自分讃歌」という二重構造の歌詞が革命的と評された。初回公開から48時間でYouTube 1,500万回再生を突破。",
      reception:"Billboard Global Excl. U.S.で日本楽曲史上初の1位。Japan Hot 100で22週1位（21週連続）という歴代最長記録。2023年の日本で最も再生された楽曲。世界190カ国以上でチャートイン。",
      highlight: true
    },
    {
      title:"勇者", titleEn:"Yūsha", year:2023, date:"2023年10月6日",
      cert:"2×プラチナム（配信）", chart:"Oricon Combined #3",
      artwork: WM("Yoasobi - Yusha.png"),
      novel:"勇者 / 山田鐘人（葬送のフリーレン 原作者）",
      theme:"「勇者」とは何か。強さではなく、立ち上がり続けることの意味。葬送のフリーレンの世界観から生まれた哲学的な問いかけ。",
      background:"TVアニメ「葬送のフリーレン」ED曲として制作。ドラゴンクエストシリーズとも連動した「勇者」という普遍的テーマをYOASOBI流に昇華。",
      reception:"2×プラチナム認定。「推しの子」後の次作として世界的注目を集め、アニメファン以外にも広く支持。フリーレン最高視聴率更新に貢献。"
    },
    {
      title:"ビリビリ", titleEn:"Biri-Biri", year:2023, date:"2023年11月17日",
      cert:"—", chart:"Oricon Combined #19",
      artwork: WM("Yoasobi - Biri-Biri.png"),
      novel:"（ポケットモンスターアニメとのタイアップ / 原作小説なし）",
      theme:"ピカチュウの視点からの物語。電気を纏う生命体が感じる世界の鮮やかさと、トレーナーとの絆。",
      background:"ポケモンアニメ主題歌という日本最大級IPとのコラボ。英語バージョン「Biri-Biri (English ver.)」も同時リリースされ国際展開を加速。",
      reception:"海外ポケモンファンからの注目が特に高く、英語版MV再生回数が日本語版を上回る異例の反響。YOASOBIの海外展開における象徴的作品。"
    },
    {
      title:"Heart Beat", titleEn:"Heart Beat", year:2024, date:"2024年4月3日",
      cert:"—", chart:"Oricon Combined #47",
      artwork: WM("Yoasobi - Heart Beat.png"),
      novel:"（Coachella 2024出演記念作品）",
      theme:"高鳴る鼓動、音楽と出会う瞬間の興奮。ライブという特別な体験への感謝と高揚感を込めた楽曲。",
      background:"Coachella 2024への出演を記念してリリースされた英語メイン楽曲。アメリカ市場を強く意識したポップサウンドで制作。",
      reception:"Coachella出演と同時リリースにより世界的に注目。英語圏リスナーへのYOASOBI紹介楽曲として機能し、海外フォロワーを大幅に増加させた。"
    },
    {
      title:"UNDEAD", titleEn:"Undead", year:2024, date:"2024年7月5日",
      cert:"プラチナム（配信）", chart:"Oricon Combined #14",
      artwork: WM("Yoasobi - Undead.png"),
      novel:"（アンデッドアンラック / 戸塚慶文 コラボ）",
      theme:"死ねない少女と不運を呼ぶ少年。「死」と「生」の逆説的な絆。アンデッドアンラックの世界観とシンクロするダークヒーロー讃歌。",
      background:"週刊少年ジャンプ連載「アンデッドアンラック」のアニメ主題歌として制作。ダークなテーマながらエネルギッシュなサウンドで疾走感を表現。",
      reception:"プラチナム認定。原作ファンから「完璧なアニメ化」と高評価。YOASOBIのバンドサウンドへの挑戦が評価された。"
    },
    {
      title:"舞台に立って", titleEn:"Butai ni Tatte", year:2024, date:"2024年9月6日",
      cert:"ゴールド（配信）", chart:"Oricon Combined #29",
      artwork: WM("Yoasobi - Butai ni Tatte.png"),
      novel:"舞台に立って / 仁科幸",
      theme:"舞台の上で輝くことへの憧れと不安。「見ていてください」という無言の宣言。演じることの孤独と喜び。",
      background:"ドラマ「舞台に立って」主題歌。ikuraがソロ活動で磨いた演技的な歌唱表現がYOASOBI楽曲に反映されている。",
      reception:"ゴールド認定。舞台・演劇ファンからの支持が特に強く、演劇部や劇団のBGMとして採用される事例が多数報告。"
    },
    {
      title:"モノトーン", titleEn:"Monotone", year:2024, date:"2024年11月1日",
      cert:"—", chart:"Oricon Combined #24",
      artwork: WM("Yoasobi - Monotone.png"),
      novel:"モノトーン / 東村アキコ（映画「フレル」コラボ）",
      theme:"白と黒の間に存在する無限のグレー。善悪の二項対立では割り切れない人間の複雑さと、それを受け入れる覚悟。映画「フレル」のために書き下ろされた。",
      background:"映画「フレル」主題歌として制作。東村アキコが映画のために書き下ろした短編小説が原作。ドーム公演「超現実 Dome Live」開催時期とも重なり、モノクロームのビジュアルが話題に。",
      reception:"映画公開と同時リリースにより映画ファンからも支持を獲得。原作小説は映画公式サイトで無料公開中。"
    },
    {
      title:"New Me", titleEn:"New Me", year:2024, date:"2024年12月6日",
      cert:"—", chart:"Japan Hot 100 #40",
      artwork: WM("Yoasobi - New Me.png"),
      novel:"（英語メイン楽曲）",
      theme:"新しい自分への脱皮。過去の自分を脱ぎ捨て、未知の自分を受け入れることへの恐怖と解放感。",
      background:"2024年の締めくくりとして制作された英語主体の楽曲。グローバルな音楽市場を強く意識したポップアンセム。",
      reception:"英語圏SNSで好意的に受容。海外ストリーミングプラットフォームでのプレイリスト追加が急増し、2025年の世界展開への布石となった。"
    },
    {
      title:"PLAYERS", titleEn:"Players", year:2025, date:"2025年1月17日",
      cert:"—", chart:"Japan Hot 100 #51",
      artwork: WM("Yoasobi - Players.png"),
      novel:"（原作: PLAYERS / e-Sports コラボ）",
      theme:"ゲームの中で戦う「プレイヤー」たちへの讃歌。バーチャルと現実の間で懸命に戦う若者の熱狂と誇り。",
      background:"e-Sportsとのコラボ楽曲。疾走感のある8ビート風サウンドでゲームのBGMとしても機能するよう設計されている。",
      reception:"ゲームコミュニティからの熱烈な支持。e-Sports大会の公式BGMとして採用され、YOASOBIのコンテンツ横断展開を拡大。"
    },
    {
      title:"Watch me!", titleEn:"Watch Me!", year:2025, date:"2025年3月14日",
      cert:"—", chart:"Oricon Combined #22",
      artwork: WM("Yoasobi - Watch Me!.png"),
      novel:"（原作小説: 非公開）",
      theme:"「見ていてほしい」という切実な存在証明。注目されることへの渇望と、それでも揺れる自信のなさ。",
      background:"バレンタインデーの翌月、ホワイトデーにリリース。ikuraの感情の振れ幅が最大に引き出された表現力全開の楽曲。",
      reception:"リリース直後からSNSで「ikuraの歌唱が神がかっている」と話題に。ライブでの圧巻パフォーマンスが多数報告。"
    },
    {
      title:"劇上", titleEn:"Gekijō", year:2025, date:"2025年5月9日",
      cert:"—", chart:"Japan Hot 100 #24",
      artwork: WM("Yoasobi - Gekijo.png"),
      novel:"劇場ものがたり / 三谷幸喜",
      theme:"「この世界は舞台であって、人間はみな役者である」——人生を舞台に見立てた三谷幸喜の世界観を昇華。ayase×ikuraのダブルボーカルが生み出す重層的な声の劇場。",
      background:"三谷幸喜脚本・菅田将暉主演の連続ドラマ「もしもこの世が舞台なら、楽屋はどこにあるのだろう」主題歌。YOASOBIとしては初の国内連ドラ主題歌。原作短編小説も三谷幸喜書き下ろし。YOASOBI史上初のayase×ikuraダブルボーカル楽曲で、MV（監督：Pennacky）はYOASOBI初の本人出演実写映像。菅田将暉・二階堂ふみもMVに出演。",
      reception:"「YOASOBI初の実写MV」「ダブルボーカル」が大きな話題に。ドラマ×YOASOBI×三谷幸喜×菅田将暉という豪華コラボがSNSで爆発的に拡散。"
    },
    // 2026
    {
      title:"アドレナ", titleEn:"Adrena", year:2026, date:"2026年1月4日（デジタル）/ 3月4日（CD）",
      cert:"—", chart:"Oricon Combined #42",
      artwork: WM("Yoasobi - Adrena.png"),
      novel:"Magical / 津山冬",
      theme:"アドレナリンが全身を駆け巡るような高揚感。本能のまま突き進む疾走感と、恋愛の焦燥をシンクロさせた楽曲。",
      background:"TVアニメ「花ざかりの君たちへ」OPテーマとして制作。「BABY」と同時発売のダブルA面シングル。",
      reception:"Oricon Combined #42。アニメ放送と同時の話題性でSNSに拡散。YOASOBIの2026年最初のリリース作品。"
    },
    {
      title:"BABY", titleEn:"Baby", year:2026, date:"2026年1月4日（デジタル）/ 3月4日（CD）",
      cert:"—", chart:"—",
      artwork: WM("Yoasobi - Baby.png"),
      novel:"My Dear…… / 青木祥樹（Studio Monad）",
      theme:"「BABY」と呼びかける言葉に込めた、無条件の愛と保護欲。「アドレナ」の疾走感とは対照的な、柔らかく包み込むバラード。",
      background:"「アドレナ」のカップリングとして「花ざかりの君たちへ」EDテーマに起用。同じアニメのOPとEDをYOASOBIが担当するのは異例の抜擢。",
      reception:"「アドレナ」との対比が話題に。バラード調の楽曲を求めるファンから高い支持を獲得。"
    },
    // UPCOMING
    {
      title:"オリオン", titleEn:"Orion", year:2026, date:"2026年6月26日（デジタル）",
      cert:"—", chart:"—",
      artwork: null,
      novel:"地に堕ちた雀（The Fall of a Sparrow）/ オーバーウォッチ公式",
      theme:"キリコ・ゲンジ・ハンゾー三者の関係性をオリオン座の三ツ星になぞらえた楽曲。近未来的なサウンドと琴の音色を融合させ、J-POPの魂を乗せたayase渾身の一曲。",
      background:"世界的人気FPS「オーバーウォッチ」とのコラボ楽曲。東京を舞台にした新マップに合わせてゲーム内短編小説を原作に制作。米国ではアナログ盤（オーバーウォッチコラボジャケット）も限定発売。",
      reception:"2026年6月26日リリース予定（UPCOMING）。ゲーム×音楽のクロスオーバーとして世界中のファンから注目を集めている。",
      highlight: false, upcoming: true
    },
  ],

  eps: [
    {
      title:"THE BOOK", badge:"EP", series:"THE BOOK Series #1",
      date:"2021年1月6日", label:"Sony Music Labels",
      catalog:"XSCL-11", sales:"約31万枚", cert:"ゴールド", chart:"Oricon Albums #2",
      artwork: WM("Yoasobi - The Book.jpg"),
      tracks:[
        {title:"夜に駆ける", novel:"タナトスの誘惑 / 星野舞夜"},
        {title:"あの夢をなぞって", novel:"夢の雫と星の花 / いしき蒼太"},
        {title:"ハルジオン", novel:"それでも、ハッピーエンド / 橋爪駿輝"},
        {title:"たぶん", novel:"たぶん / しなの"},
        {title:"群青", novel:"ブルーピリオド / 山口つばさ"},
        {title:"ハルカ", novel:"遠く遠く / タケウチリョウ"},
        {title:"もう少しだけ", novel:"めぐる。/ 千春"},
      ],
      concept:"配信リリースのみで話題を集めた楽曲を初めてパッケージ化した記念碑的作品。初回限定盤には各曲の原作小説を収録したブックレットが封入され、「小説を音楽にするユニット」のコンセプトを物理的に体現した。",
      reception:"Oricon Albums最高2位。ゴールド認定（約31万枚）。デジタル発信アーティストが物理メディアで市場を動かした事例として音楽業界で注目を集めた。"
    },
    {
      title:"THE BOOK 2", badge:"EP", series:"THE BOOK Series #2",
      date:"2021年12月1日", label:"Sony Music Labels",
      catalog:"XSCL-31", sales:"約20万枚", cert:"プラチナム", chart:"Billboard Japan Hot Albums #1",
      artwork: WM("Yoasobi - The Book 2.jpg"),
      tracks:[
        {title:"怪物", novel:"自分の胸に自分の耳を押し当てて / 板垣巴留"},
        {title:"優しい彗星", novel:"獅子座流星群のままに / 板垣巴留"},
        {title:"三原色", novel:"RGB / 小御門優一郎"},
        {title:"ラブレター", novel:"ラブレター / むつき潤"},
        {title:"大正浪漫", novel:"大正浪漫 / NATSUMI"},
        {title:"ツバメ", novel:"ツバメ / 水上下波"},
      ],
      concept:"アニメ「BEASTARS」とのコラボを含む、YOASOBIの表現の幅が格段に広がった第2弾。板垣巴留が書き下ろした短編小説2作を原作に持つ楽曲を収録し、漫画原作者とのコラボという新機軸を打ち出した。",
      reception:"Billboard Japan Hot Albums 1位。プラチナム認定。「怪物」のアニメ効果で従来ファン以外にもリーチし、YOASOBIのブランドを大幅に拡大した。"
    },
    {
      title:"THE BOOK 3", badge:"EP", series:"THE BOOK Series #3",
      date:"2023年10月4日", label:"Sony Music Labels",
      catalog:"XSCL-111", sales:"約20万枚以上", cert:"ゴールド", chart:"Oricon Albums #2",
      artwork: WM("Yoasobi - The Book 3.png"),
      tracks:[
        {title:"ADVENTURE", novel:"冒険者たち / さかしたみか"},
        {title:"セブンティーン", novel:"夢の雫と星の花（続編） / いしき蒼太"},
        {title:"アイドル", novel:"45510 / 赤坂アカ"},
        {title:"勇者", novel:"勇者 / 山田鐘人"},
        {title:"ビリビリ", novel:"（ポケモンアニメタイアップ）"},
        {title:"祝福", novel:"揺りかごの星 / 大河内一楼"},
      ],
      concept:"「アイドル」という歴史的ヒットを中心に据えた第3弾。推しの子・葬送のフリーレン・ガンダム・ポケモンと、J-POPの枠を超えた多彩なIPとのコラボを一冊に凝縮。シリーズ最高の国際的注目を集めた。",
      reception:"Oricon Albums 2位。ゴールド認定。「アイドル」の世界的ヒットを受けて海外からの注目が急増し、YOASOBIをグローバルアーティストに押し上げた決定打となった。"
    },
    {
      title:"E-SIDE", badge:"English EP", series:"E-SIDE Series #1",
      date:"2021年11月12日", label:"Sony Music Labels",
      catalog:"XSCL-21", sales:"約9,500枚", cert:"—", chart:"—",
      artwork: WM("Yoasobi - E-Side.jpeg"),
      tracks:[
        {title:"Into The Night", novel:"(夜に駆ける 英語版)"},
        {title:"Tracing The Dream", novel:"(あの夢をなぞって 英語版)"},
        {title:"Halzion", novel:"(ハルジオン 英語版)"},
        {title:"Maybe", novel:"(たぶん 英語版)"},
        {title:"Into The Blue", novel:"(群青 英語版)"},
        {title:"Farther", novel:"(ハルカ 英語版)"},
      ],
      concept:"THE BOOKの収録曲を英語でリレコーディングした、グローバル展開への先駆的作品。単なる翻訳ではなく、各曲のニュアンスを英語で自然に表現することにこだわった。ikuraの英語ボーカルの実力が初めて大きく評価されたEP。",
      reception:"海外配信での反応が予想を大きく上回り、英語圏のアニメ・J-POPファンに向けた戦略の有効性を証明した。E-SIDEシリーズ継続の礎となった作品。"
    },
    {
      title:"E-SIDE 2", badge:"English EP", series:"E-SIDE Series #2",
      date:"2022年11月18日", label:"Sony Music Labels",
      catalog:"XSCL-61", sales:"約5,300枚", cert:"—", chart:"—",
      artwork: WM("Yoasobi - E-Side 2.png"),
      tracks:[
        {title:"Mister", novel:"(ミスター 英語版)"},
        {title:"Suki Da", novel:"(好きだ 英語版)"},
        {title:"Blessing", novel:"(祝福 英語版)"},
      ],
      concept:"「祝福」の英語バージョン「Blessing」を収録した第2弾。機動戦士ガンダム 水星の魔女が世界的に注目されたタイミングでのリリースにより、海外アニメファンへのリーチが大幅に拡大。",
      reception:"「Blessing（祝福の英語版）」がガンダムファンダムで特に高く評価され、海外フォロワー数の急増につながった。"
    },
    {
      title:"E-SIDE 3", badge:"English EP", series:"E-SIDE Series #3",
      date:"2024年4月12日", label:"Sony Music Labels",
      catalog:"XSCL-121", sales:"約2,800枚", cert:"—", chart:"—",
      artwork: WM("Yoasobi - E-Side 3.png"),
      tracks:[
        {title:"Idol", novel:"(アイドル 英語版)"},
        {title:"Bravely You", novel:"(勇者 英語版)"},
        {title:"Biri-Biri", novel:"(ビリビリ 英語版)"},
      ],
      concept:"Coachella 2024出演直後のリリース。「Idol」英語バージョンはBillboard Globalでヒットした原曲の勢いをそのままに、英語圏のポップマーケットへの本格的な参入を宣言した。",
      reception:"シリーズ中最大の国際的注目を集め、Coachella出演との相乗効果でYOASOBIの名が一気に世界へ広まった。英語版「Idol」はSpotify海外プレイリストに多数追加。"
    },
  ],

  lives: {
    upcoming: [
      {
        name:"YOASOBI ASIA 10-CITY DOME & STADIUM TOUR 2026",
        nameEn:"Asia 10-City Dome & Stadium Tour 2026",
        period:"2026年10月〜12月（国内）/ アジア各都市",
        region:"国内・アジア",
        shows:10, attendance:"未定",
        venues:["大阪（10/24・25）","名古屋（11/7・8）","北海道（11/14・15）","福岡（11/28・29）","東京（12/5・6）","台北・ソウル・香港・シンガポール 等"],
        note:"日本人アーティスト初となるアジア10都市ドーム＆スタジアムツアー。国内5都市（大阪・名古屋・北海道・福岡・東京）に加え、台北・ソウル・香港・シンガポールなどアジア各都市を巡る。チケットは即日完売が続出。",
        highlight: true
      },
      {
        name:"Never Ending Stories Tour（北米）",
        nameEn:"Never Ending Stories North America Tour",
        period:"2026年7月〜8月",
        region:"北米",
        shows:8, attendance:"未定",
        venues:["北米8都市（詳細発表済み）"],
        note:"北米ヘッドライナーツアー。8公演が予定されており、チケットは発売後即完売。"
      },
    ],
    tours: [
      {
        name:"電光石火 Arena Tour",
        nameEn:"Denkōsekka Arena Tour",
        period:"2023年4月〜6月",
        region:"国内",
        shows:14, attendance:"130,000人",
        venues:["さいたまスーパーアリーナ","大阪城ホール","横浜アリーナ 他"],
        note:"初の全国アリーナツアー。14公演で13万人を動員し、ライブアーティストとしての実力を証明した。"
      },
      {
        name:"Asia Tour 2023–2024",
        nameEn:"Asia Tour 2023–2024",
        period:"2023年12月〜2024年1月",
        region:"アジア",
        shows:8, attendance:"42,000人",
        venues:["台湾・韓国・タイ・インドネシア 等"],
        note:"初の海外ツアー。アジア各国でのライブが現地のYOASOBIファンに熱狂的に迎えられた。"
      },
      {
        name:"Pop Out Zepp Tour",
        nameEn:"Pop Out Zepp Tour",
        period:"2024年1月〜3月",
        region:"国内",
        shows:12, attendance:"25,000人",
        venues:["全国Zepp各会場"],
        note:"小規模会場でより近い距離のライブを届けたホールツアー。完全ソールドアウトが続出。"
      },
      {
        name:"超現実 Dome Live",
        nameEn:"Chō-genjitsu Dome Live",
        period:"2024年10月〜11月",
        region:"国内",
        shows:4, attendance:"170,000人",
        venues:["京セラドーム大阪（2公演）","東京ドーム（2公演）"],
        note:"初のドーム公演。4公演で計17万人を動員し、J-POPアーティストとして頂点を記録。演出・映像ともに圧倒的クオリティが話題に。",
        highlight: true
      },
      {
        name:"Asia Tour 2024–2025",
        nameEn:"Asia Tour 2024–2025",
        period:"2024年12月〜2025年2月",
        region:"アジア・欧米",
        shows:14, attendance:"140,000人",
        venues:["ロンドン OVO Arena Wembley","NY Radio City Music Hall","バルセロナ Primavera Sound 等"],
        note:"欧米・アジアを横断する大規模ワールドツアー。ロンドン・ニューヨーク・バルセロナでの公演が現地メディアで絶賛された。",
        highlight: true
      },
      {
        name:"Wandara Hall Tour",
        nameEn:"Wandara Hall Tour",
        period:"2025年7月〜11月",
        region:"国内",
        shows:40, attendance:"75,000人",
        venues:["全国ホール会場 40ヶ所"],
        note:"全国40都市を巡る大規模ホールツアー。地方ファンへのきめ細かいアプローチが話題になった。"
      },
      {
        name:"Never Ending Stories Tour",
        nameEn:"Never Ending Stories Tour",
        period:"2026年7月〜8月（予定）",
        region:"北米",
        shows:8, attendance:"未定",
        venues:["北米8都市（詳細未発表）"],
        note:"北米ヘッドライナーツアー。2026年7〜8月に8公演が予定されており、チケットは即日完売が続出している。"
      },
    ],
    festivals: [
      { name:"NHK紅白歌合戦", date:"2020年12月31日", location:"NHKホール（東京）", region:"国内", note:"ライブデビュー公演。テレビ越しに全国へ初パフォーマンスを届けた。" },
      { name:"Rock in Japan Festival", date:"2022年8月", location:"茨城県", region:"国内", note:"国内最大規模の野外フェス初出演。大観衆を前に存在感を爆発させた。" },
      { name:"Head in the Clouds Festival", date:"2022年12月", location:"ジャカルタ（インドネシア）", region:"海外", note:"海外フェス初出演。東南アジアのファンと初めて直接繋がる歴史的ステージ。" },
      { name:"Clockenflap", date:"2023年3月", location:"香港", region:"海外", note:"香港の人気フェスに初出演。アジア全域でのブランド認知拡大に貢献。" },
      { name:"Head in the Clouds Festival USA", date:"2023年8月", location:"パサデナ（カリフォルニア州）", region:"北米", note:"アメリカ初パフォーマンス。現地メディアに「次世代のJ-POPを牽引する存在」と評された。" },
      { name:"Coachella", date:"2024年4月12日・14日・19日", location:"インディオ（カリフォルニア州）", region:"北米", note:"世界最大の音楽フェスで3日間出演。Billboard誌が「忘れられないステージ」と評するほどの圧巻パフォーマンスを披露。", highlight: true },
      { name:"Lollapalooza", date:"2024年8月", location:"シカゴ（イリノイ州）", region:"北米", note:"アメリカ最大級フェスに初出演。さらなる北米ファン獲得に成功。" },
      { name:"Summer Sonic", date:"2024年8月", location:"千葉／大阪", region:"国内", note:"国内最大の洋楽フェスでヘッドライナーとして帰国。ドーム公演前の盛り上がりを最高潮に高めた。" },
      { name:"Primavera Sound Barcelona", date:"2025年5〜6月", location:"バルセロナ（スペイン）", region:"欧州", note:"ヨーロッパ最大の音楽フェスに初出演。欧州メディアで大きく報道され、ヨーロッパでの認知度が急上昇。" },
      { name:"CENTRAL / Echoes Baa", date:"2025年4月5日・6日", location:"横浜赤レンガ倉庫（神奈川）", region:"国内", note:"ソニーミュージックの新レーベル「Echoes」が主催する都市型フェス「CENTRAL」内のEchoes Baaステージに出演。MAISONdes・Aooo・NOMELON NOLEMONらとともに横浜赤レンガ倉庫に集結した。" },
    ]
  },

  profile: {
    concept: "小説を音楽にするユニット",
    debut: "2019年11月",
    label: "Sony Music Labels",
    members: [
      {
        name: "ayase",
        nameKana: "アヤセ",
        role: "Composer / Producer",
        born: "1994年4月4日",
        age: "32歳",
        birthplace: "山口県",
        height: "174 cm",
        bloodType: "A型",
        origin: "ボカロP / 作曲家 / プロデューサー",
        bio: "3〜4歳からピアノを始め（祖母がピアノ教師）、幼少期より作曲に親しむ。高校時代はロックバンド「Davinci」のボーカルを9年間務め、ライブ活動を精力的に展開。2018年12月よりVOCALOIDプロデューサーとしてYouTube/ニコニコ動画で活動を開始し、独自の疾走感あるサウンドで注目を集める。2019年にYOASOBIを結成し、作曲・編曲・プロデュースのすべてを担当。英語・日本語両方の楽曲制作に対応し、グローバル展開をリードしている。",
        solo: "VOCALOID楽曲制作（2018年〜）",
        tags: ["作曲", "編曲", "プロデュース", "ギター", "ピアノ", "ボカロP"]
      },
      {
        name: "ikura",
        nameKana: "イクラ",
        realName: "幾田りら",
        role: "Vocalist",
        born: "2000年9月25日",
        age: "25歳",
        birthplace: "東京都（3歳までシカゴ育ち）",
        height: "154.7 cm",
        bloodType: "A型",
        origin: "シンガーソングライター / 声優",
        bio: "幼少期をアメリカ・シカゴで過ごした帰国子女。幼少期よりピアノ・ヴォイストレーニング・クラシックバレエを習い、小学6年生からギターと作詞作曲を始める。中学3年で音楽活動を本格化し、2017年7月よりアコースティックユニット「ぷらそにか」に参加（2021年8月卒業）。2021年3月にソロ「幾田りら」としてデビュー。2021年公開のアニメ映画「竜とそばかすの姫」に声優として出演し話題を呼ぶ。YOASOBIではikura名義でボーカルを担当し、透明感と圧倒的な表現力で楽曲に命を吹き込む。",
        solo: "ソロ「幾田りら」名義でも活動中",
        tags: ["ボーカル", "シンガーソングライター", "ギター", "作詞", "声優", "帰国子女"]
      }
    ],
    formation: {
      story: "2019年、ソニーミュージックのスタッフがボカロPとして活動していたayaseに「小説を音楽にする」プロジェクトを提案。ayaseがikuraのInstagramのカバー動画を見て直接連絡したことで、2人の出会いが生まれた。同年10月に結成し、11月に「夜に駆ける」をリリース。",
      nameOrigin: "「夜遊び」を連想させる「YOASOBI（夜遊び）」に由来。夜に活動するユニットとしての性格と、それぞれの本業の傍らで活動を始めた経緯を反映している。"
    },
    achievements: [
      {
        text: "「夜に駆ける」ストリーミング累計10億回突破（国内楽曲初）",
        detail: "2019年11月リリースのデビュー曲。CDを一切リリースせず配信のみで国内初の10億回再生を達成。YouTubeでは5ヶ月で1,000万回再生を突破し、Oricon年間チャートもデジタル配信のみのシングルとして史上初の首位を獲得した。"
      },
      {
        text: "「アイドル」Billboard Global Excl. U.S.で日本楽曲史上初の1位獲得",
        detail: "2023年4月12日リリース。TVアニメ「推しの子」OPテーマ。公開48時間でYouTube 1,500万回再生を達成し、世界190カ国以上でチャートイン。日本楽曲として史上初めてBillboard Global Excl. U.S.で首位を獲得した歴史的な楽曲。"
      },
      {
        text: "「アイドル」Oricon Japan Hot 100で22週1位（21週連続）歴代最長記録",
        detail: "同楽曲がOricon Japan Hot 100において21週連続を含む計22週で首位を記録。これは同チャート史上最長の記録で、2023年の日本で最も再生された楽曲となった。"
      },
      {
        text: "RIAJ認定：累計340万ユニット販売・57億回ストリーミング（2025年8月時点）",
        detail: "日本レコード協会（RIAJ）の認定数値。累計340万ユニットの物理・デジタル販売と、57億回のストリーミング再生を達成。日本人アーティストの中でも最上位クラスの数値を記録している。"
      },
      {
        text: "2024年 Coachella（アメリカ最大規模の野外フェス）に出演",
        detail: "2024年4月12日・14日・19日の3日間、カリフォルニア州インディオで開催されたCoachella Valley Music & Arts Festivalに出演。Billboard誌が「忘れられないステージ」と評し、世界中のメディアが報道。日本のJ-POPアーティストとしては異例の規模での出演となった。"
      },
      {
        text: "2024年 日米首脳会談後のホワイトハウス公式晩餐会に日本代表として招待",
        detail: "2024年4月、岸田文雄首相（当時）とバイデン大統領による日米首脳会談後のホワイトハウス公式晩餐会にエンターテインメント分野の日本代表として招待された。音楽外交の象徴的存在として国際的に認知されている。"
      },
      {
        text: "2024年 初のドーム公演「超現実 Dome Live」開催（4公演で計17万人動員）",
        detail: "2024年10月〜11月に京セラドーム大阪（2公演）・東京ドーム（2公演）にて開催。4公演で計17万人を動員し、J-POPアーティストとしての頂点を記録した。圧倒的な映像演出とセットリストがファンを圧倒し、歴史的公演として語り継がれている。"
      },
      {
        text: "Music Awards Japan 2025にて3部門受賞",
        detail: "2025年に開催されたMusic Awards Japanにおいて3部門を受賞。国内の音楽シーンにおける支配的な存在感を改めて示した。"
      },
      {
        text: "TIME誌「2021年ベスト曲10」に「怪物」が選出（5位）",
        detail: "アメリカのTIME誌が選ぶ「2021年のベスト曲10」において、「怪物」が5位に選出。J-POPがアメリカの主要メディアで高く評価された歴史的な事例として注目を集めた。"
      },
      {
        text: "日本ゴールドディスク大賞 4冠（2022年）",
        detail: "2022年の日本ゴールドディスク大賞において4部門を受賞。日本レコード協会が主催する権威ある音楽賞で、YOASOBIが前年度の活躍を評価された。"
      },
    ],
    timeline: [
      {
        year:"2018",
        text:"ayaseがVOCALOIDプロデューサーとして活動開始。ikuraがアコースティックユニット「ぷらそにか」として活動中。",
        detail:{
          heading:"それぞれの始まり",
          body:"ayaseは2018年12月にVOCALOIDプロデューサーとしてYouTube・ニコニコ動画に楽曲投稿を開始。独自の疾走感あるサウンドで徐々に注目を集める。同時期、ikura（幾田りら）はアコースティックユニット「ぷらそにか」のメンバーとして音楽活動を展開。それぞれが自らの道を歩んでいた2人が、翌年ソニーミュージックを通じて出会うことになる。",
          topics:["ayaseのボカロP活動開始","ikuraのぷらそにか活動"]
        }
      },
      {
        year:"2019",
        text:"10月にYOASOBI結成。11月に「夜に駆ける」をデジタルリリース。CDなし・配信のみで各ストリーミングチャートを席巻。",
        detail:{
          heading:"伝説の始まり",
          body:"2019年10月、ayaseがikuraのInstagramに投稿されたカバー動画を見て直接コンタクトを取ったことでYOASOBIが誕生。ソニーミュージックの「小説を音楽にする」企画のもと、デビュー曲「夜に駆ける」をリリース。CDは作らずデジタル配信のみという当時としては異例のスタートながら、SNSで爆発的に拡散。Oricon年間チャートで1位を獲得するという前代未聞の快挙を達成した。",
          topics:["YOASOBI結成","「夜に駆ける」デジタルリリース","Oricon年間1位（CD未リリース）","制作費約3,000円の伝説"]
        }
      },
      {
        year:"2020",
        text:"「ハルジオン」「群青」など立て続けにリリース。コロナ禍の閉塞感の中でSNSを通じて急速に認知が拡大。",
        detail:{
          heading:"コロナ禍の光明",
          body:"新型コロナウイルスの感染拡大による緊急事態宣言が発令される中、YOASOBIは「ハルジオン」「たぶん」「群青」「ハルカ」を次々とリリース。外出自粛で巣ごもりを余儀なくされた人々がSNSでYOASOBIを発見し、共有する流れが生まれた。「群青」は合唱アレンジが世界各地で制作される社会現象に発展。",
          topics:["「ハルジオン」「群青」など5曲リリース","合唱アレンジ「群青」の世界的拡散","ダイヤモンド認定（群青）"]
        }
      },
      {
        year:"2021",
        text:"1st EP「THE BOOK」リリース。「怪物」が年間デジタル最多売上に。2nd EP「THE BOOK 2」がBillboard Japan Hot Albums 1位。ikuraがソロ「幾田りら」としてデビュー。",
        detail:{
          heading:"飛躍の年",
          body:"1月に1st EP「THE BOOK」をリリース。同月「怪物」（BEASTARS第2期OP）がダイヤモンド認定を獲得し、年間デジタル最多売上シングルに。TIME誌「2021年ベスト曲10」の5位に選ばれる国際的評価も獲得。12月には2nd EP「THE BOOK 2」がBillboard Japan Hot Albums 1位を記録。ikuraがソロ「幾田りら」として独立デビューし、アニメ映画「竜とそばかすの姫」で声優としても活躍。",
          topics:["1st EP「THE BOOK」リリース","「怪物」年間デジタル最多売上","TIME誌ベスト曲5位","2nd EP「THE BOOK 2」Billboard 1位","ikura ソロデビュー（幾田りら）"]
        }
      },
      {
        year:"2022",
        text:"「祝福」で機動戦士ガンダム 水星の魔女OPを担当。アニメファン層への浸透が加速し、海外認知が急速に拡大。",
        detail:{
          heading:"アニメ×YOASOBIの確立",
          body:"「祝福」がガンダムシリーズという日本アニメの最高峰とのコラボに抜擢。放送開始直後からSNSで爆発的に拡散し、海外のアニメファンへのリーチが急増。Rock in Japan Festival初出演やHead in the Clouds Festival（ジャカルタ）での海外フェス初出演も果たし、ライブアーティストとしての活動を本格化させた。",
          topics:["「祝福」ガンダム 水星の魔女OP","Rock in Japan Festival初出演","海外フェス初出演（ジャカルタ）","3×プラチナム認定"]
        }
      },
      {
        year:"2023",
        text:"「アイドル」がBillboard Global Excl. U.S.で日本楽曲初の1位。Japan Hot 100で22週1位の歴代最長記録。3rd EP「THE BOOK 3」リリース。",
        detail:{
          heading:"世界制覇",
          body:"4月12日リリースの「アイドル」（推しの子OP）が公開48時間でYouTube 1,500万回再生を達成。Japan Hot 100で22週1位（21週連続）という歴代最長記録を樹立。日本楽曲として史上初めてBillboard Global Excl. U.S.で1位を獲得し、世界190カ国以上でチャートイン。10月には3rd EP「THE BOOK 3」をリリース。北米Head in the Clouds FestivalでのUSA初公演も成功。",
          topics:["「アイドル」Billboard Global 1位（日本楽曲初）","Japan Hot 100で22週1位（歴代最長）","世界190カ国以上でチャートイン","3rd EP「THE BOOK 3」リリース","USA初ライブパフォーマンス"]
        }
      },
      {
        year:"2024",
        text:"Coachella出演・ホワイトハウス晩餐会招待。初ドーム公演「超現実 Dome Live」で4公演17万人を動員。",
        detail:{
          heading:"世界の舞台へ",
          body:"4月、世界最大の音楽フェス「Coachella」に3日間出演しBillboard誌に「忘れられないステージ」と評される。同月、日米首脳会談後のホワイトハウス公式晩餐会に日本代表として招待され、外交の場でも存在感を示した。10〜11月には京セラドーム・東京ドームで計4公演の「超現実 Dome Live」を開催し、17万人を動員する偉業を達成。",
          topics:["Coachella 2024出演（3日間）","ホワイトハウス公式晩餐会招待","「超現実 Dome Live」17万人動員","Lollapalooza出演","Europe/Asia Tour実施"]
        }
      },
      {
        year:"2025",
        text:"Music Awards Japan 3部門受賞。累計ストリーミング57億回突破。世界基準のJ-POPユニットとして確固たる地位を確立。",
        detail:{
          heading:"新時代のJ-POPへ",
          body:"Music Awards Japan 2025で3部門を受賞。RIAJによる累計認定ストリーミングが57億回を突破し、国内最多水準を記録。Primavera Sound Barcelona（ヨーロッパ最大フェス）への初出演も果たし、欧州でのブランド確立が加速。全国40会場の「Wandara Hall Tour」を完遂し、地方ファンへのアプローチも徹底した。",
          topics:["Music Awards Japan 3部門受賞","累計ストリーミング57億回突破","Primavera Sound Barcelona初出演","Wandara Hall Tour 40会場完遂"]
        }
      },
    ]
  }
};
