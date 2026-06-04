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
      title:"Mr.", titleEn:"Mr.", year:2022, date:"2022年1月28日",
      cert:"ゴールド（配信）", chart:"Oricon Combined #19",
      artwork: WM("Yoasobi - Mr.jpg"),
      novel:"ストーカーとは楽しいものですよ / 真田まこと",
      theme:"一方的な愛が屈折していく過程を描く。ストーカーという暗いテーマを軽快なポップサウンドで包み込んだ異色作。",
      background:"タイトル「Mr.」はストーカー視点での相手への呼称。ダークなテーマを明るいメロディでカバーするayaseの作曲センスが光る。",
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
      novel:"（原作小説: 非公開）",
      theme:"白と黒の間に存在する無限のグレー。善悪の二項対立では割り切れない人間の複雑さと、それを受け入れる覚悟。",
      background:"ドーム公演「超現実 Dome Live」開催時期に合わせたリリース。モノクロームのアートワークがYOASOBIの新たなビジュアルフェーズを示す。",
      reception:"ドーム公演という歴史的節目と連動したリリースとして注目。複雑な世界観がリスナーの想像力を掻き立て、考察ファンを生んだ。"
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
      novel:"（アニメ・映画コラボ楽曲）",
      theme:"「劇場の上で」——スクリーンの中と現実の境界が溶け合う瞬間の高揚感。物語を体験することの喜びと痛み。",
      background:"映画・アニメ劇場版とのコラボとして制作。劇場という空間の持つ特別な熱量をサウンドで表現した意欲作。",
      reception:"劇場公開と同時リリースにより映画ファンからも広く支持。YOASOBIの2025年第一クールを代表するリード作品。"
    },
  ],

  eps: [
    {
      title:"THE BOOK", badge:"EP", date:"2021年1月6日", label:"Sony Music Labels",
      sales:"約31万枚", cert:"ゴールド", chart:"Oricon Albums #2",
      artwork: WM("Yoasobi - The Book.jpg"),
      tracks:["夜に駆ける","あの夢をなぞって","ハルジオン","たぶん","群青","ハルカ","もう少しだけ"],
      note:"デビューEP。配信リリース曲を集めた記念碑的作品。初回限定盤には各曲の原作小説を掲載したブックレットが封入。"
    },
    {
      title:"THE BOOK 2", badge:"EP", date:"2021年12月1日", label:"Sony Music Labels",
      sales:"約20万枚", cert:"プラチナム", chart:"Billboard Japan Hot Albums #1",
      artwork: WM("Yoasobi - The Book 2.jpg"),
      tracks:["怪物","優しい彗星","三原色","ラブレター","大正浪漫","ツバメ"],
      note:"Billboard Japan Hot Albums 1位獲得。アニメコラボが始まり、YOASOBIの表現の幅が大きく広がった転換点。"
    },
    {
      title:"THE BOOK 3", badge:"EP", date:"2023年10月4日", label:"Sony Music Labels",
      sales:"約20万枚", cert:"ゴールド", chart:"Oricon Albums #2",
      artwork: WM("Yoasobi - The Book 3.png"),
      tracks:["ADVENTURE","セブンティーン","アイドル","勇者","ビリビリ","祝福"],
      note:"「アイドル」収録。シリーズ最高の国際的注目を集め、YOASOBIをグローバルアーティストに押し上げた決定打。"
    },
    {
      title:"E-SIDE", badge:"English EP", date:"2021年11月12日", label:"Sony Music Labels",
      sales:"約9,500枚", cert:"—", chart:"—",
      artwork: WM("Yoasobi - E-Side.jpeg"),
      tracks:["Into The Night","Tracing The Dream","Halzion","Maybe","Into The Blue","Farther"],
      note:"英語版EP。THE BOOKの楽曲を英語でリレコーディングし、英語圏への布石を打った先駆的作品。"
    },
    {
      title:"E-SIDE 2", badge:"English EP", date:"2022年11月18日", label:"Sony Music Labels",
      sales:"約5,300枚", cert:"—", chart:"—",
      artwork: WM("Yoasobi - E-Side 2.png"),
      tracks:["Mr.","Suki Da","Blessing"],
      note:"英語版EP第2弾。「祝福（Blessing）」の英語バージョンが収録され、海外アニメファンへのリーチを強化。"
    },
    {
      title:"E-SIDE 3", badge:"English EP", date:"2024年4月12日", label:"Sony Music Labels",
      sales:"約2,800枚", cert:"—", chart:"—",
      artwork: WM("Yoasobi - E-Side 3.png"),
      tracks:["Idol","Bravely You","Biri-Biri"],
      note:"英語版EP第3弾。「Idol」英語バージョンを収録。Coachella出演直後のリリースで最大の国際的注目を集めた。"
    },
  ],

  profile: {
    concept: "小説を音楽にするユニット",
    debut: "2019年11月",
    label: "Sony Music Labels",
    members: [
      {
        name: "ayase",
        role: "Composer / Producer",
        born: "1994年4月4日",
        birthplace: "山口県",
        bio: "作曲・編曲・プロデュースを担当。ボカロP出身で、疾走感のあるサウンドが特徴。小説の世界観を音楽に落とし込む独自の手法を確立し、YOASOBIの音楽的基盤を構築している。"
      },
      {
        name: "ikura（幾田りら）",
        role: "Vocalist",
        born: "2000年9月25日",
        birthplace: "東京都",
        bio: "ソロアーティスト「幾田りら」としても精力的に活動。透明感と圧倒的な表現力でYOASOBIの楽曲に命を吹き込む。英語曲でも同等のボーカルパフォーマンスを見せる。"
      }
    ],
    achievements: [
      "「夜に駆ける」がストリーミング累計10億回突破",
      "「アイドル」がBillboard Global Excl. U.S.で日本楽曲初の1位獲得",
      "「アイドル」がOricon Japan Hot 100で22週1位（21週連続）記録",
      "RIAJ認定：累計340万ユニット販売・57億回ストリーミング（2025年8月時点）",
      "2024年 Coachella（米・最大規模音楽フェス）に出演",
      "2024年 日米首脳会談後のホワイトハウス公式晩餐会に招待",
      "2024年 初のドーム公演「超現実 Dome Live」開催（動員17万人）",
      "Music Awards Japan 2025にて3部門受賞"
    ],
    timeline: [
      { year:"2019", text:"「夜に駆ける」でデビュー。CD未リリース・配信のみで各チャートを席巻し、新時代のアーティスト像を打ち立てた。" },
      { year:"2021", text:"EP「THE BOOK」「THE BOOK 2」リリース。「怪物」が年間デジタル最多売上に。Billboard Japan Hot Albums 1位獲得。" },
      { year:"2022", text:"「祝福」で機動戦士ガンダム 水星の魔女OPを担当。アニメ文化との親和性が高まり、海外認知が急速に拡大。" },
      { year:"2023", text:"「アイドル」がBillboard Global Excl. U.S.で日本楽曲初の1位。推しの子旋風が世界を席巻し、国際的スターダムへ。" },
      { year:"2024", text:"Coachella出演・ホワイトハウス晩餐会招待。初ドーム公演「超現実 Dome Live」で動員17万人の偉業を達成。" },
      { year:"2025", text:"Music Awards Japan 3部門受賞。累計ストリーミング57億回突破。世界基準のJ-POPユニットとして確固たる地位を確立。" }
    ]
  }
};
