const DATA = {
  singles: [
    // 2019
    { title:"夜に駆ける", titleEn:"Yoru ni Kakeru", year:2019, date:"2019年11月1日", cert:"2×ダイヤモンド（配信）", chart:"Oricon年間1位", note:"デビュー曲。ストリーミング累計10億回突破。", highlight:false },
    // 2020
    { title:"あの夢をなぞって", titleEn:"Ano Yume wo Nazotte", year:2020, date:"2020年3月6日", cert:"3×プラチナム（配信）", chart:"Oricon Combined #29" },
    { title:"ハルジオン", titleEn:"Halzion", year:2020, date:"2020年5月22日", cert:"3×プラチナム（配信）", chart:"Oricon Combined #7" },
    { title:"たぶん", titleEn:"Tabun", year:2020, date:"2020年7月3日", cert:"2×プラチナム（配信）", chart:"Oricon Combined #11" },
    { title:"群青", titleEn:"Gunjō", year:2020, date:"2020年8月21日", cert:"ダイヤモンド（配信）", chart:"Oricon Combined #9" },
    { title:"ハルカ", titleEn:"Haruka", year:2020, date:"2020年11月6日", cert:"3×プラチナム（配信）", chart:"Oricon Combined #18" },
    // 2021
    { title:"怪物", titleEn:"Kaibutsu", year:2021, date:"2021年1月22日", cert:"ダイヤモンド（配信）", chart:"Oricon Combined #2", note:"2021年 日本最多売上デジタルシングル。" },
    { title:"優しい彗星", titleEn:"Yasashii Suisei", year:2021, date:"2021年1月6日", cert:"プラチナム（配信）", chart:"Oricon Singles #14" },
    { title:"もう少しだけ", titleEn:"Mō Sukoshi Dake", year:2021, date:"2021年2月19日", cert:"2×プラチナム（配信）", chart:"Oricon Combined #4" },
    { title:"三原色", titleEn:"Sangenshoku", year:2021, date:"2021年4月2日", cert:"3×プラチナム（配信）", chart:"Oricon Combined #3" },
    { title:"ラブレター", titleEn:"Loveletter", year:2021, date:"2021年7月1日", cert:"プラチナム（配信）", chart:"Oricon Combined #3" },
    { title:"大正浪漫", titleEn:"Taishō Roman", year:2021, date:"2021年9月3日", cert:"プラチナム（配信）", chart:"Oricon Combined #5" },
    { title:"ツバメ", titleEn:"Tsubame", year:2021, date:"2021年12月1日", cert:"プラチナム（配信）", chart:"Oricon Combined #29" },
    // 2022
    { title:"Mr.", titleEn:"Mr.", year:2022, date:"2022年1月28日", cert:"ゴールド（配信）", chart:"Oricon Combined #19" },
    { title:"好きだ", titleEn:"Suki da", year:2022, date:"2022年4月1日", cert:"ゴールド（配信）", chart:"Oricon Combined #23" },
    { title:"祝福", titleEn:"Shukufuku", year:2022, date:"2022年10月28日", cert:"3×プラチナム（配信）", chart:"Oricon Combined #3", note:"機動戦士ガンダム 水星の魔女 OP。" },
    // 2023
    { title:"ADVENTURE", titleEn:"Adventure", year:2023, date:"2023年1月20日", cert:"プラチナム（配信）", chart:"Oricon Combined #48" },
    { title:"セブンティーン", titleEn:"Seventeen", year:2023, date:"2023年3月3日", cert:"プラチナム（配信）", chart:"Oricon Combined #32" },
    { title:"アイドル", titleEn:"Idol", year:2023, date:"2023年4月12日", cert:"プラチナム（配信）", chart:"Japan Hot 100 22週1位", note:"Billboard Global Excl. U.S.で日本楽曲史上初の1位。推しの子OP。", highlight:true },
    { title:"勇者", titleEn:"Yūsha", year:2023, date:"2023年10月6日", cert:"2×プラチナム（配信）", chart:"Oricon Combined #3", note:"ドラゴンクエスト コラボ楽曲。" },
    { title:"ビリビリ", titleEn:"Biri-Biri", year:2023, date:"2023年11月17日", cert:"—", chart:"Oricon Combined #19", note:"ポケットモンスター アニメ主題歌。" },
    // 2024
    { title:"Heart Beat", titleEn:"Heart Beat", year:2024, date:"2024年4月3日", cert:"—", chart:"Oricon Combined #47", note:"Coachella 2024 出演記念リリース。" },
    { title:"UNDEAD", titleEn:"Undead", year:2024, date:"2024年7月5日", cert:"プラチナム（配信）", chart:"Oricon Combined #14" },
    { title:"舞台に立って", titleEn:"Butai ni Tatte", year:2024, date:"2024年9月6日", cert:"ゴールド（配信）", chart:"Oricon Combined #29" },
    { title:"モノトーン", titleEn:"Monotone", year:2024, date:"2024年11月1日", cert:"—", chart:"Oricon Combined #24" },
    { title:"New Me", titleEn:"New Me", year:2024, date:"2024年12月6日", cert:"—", chart:"Japan Hot 100 #40" },
    // 2025
    { title:"PLAYERS", titleEn:"Players", year:2025, date:"2025年1月17日", cert:"—", chart:"Japan Hot 100 #51" },
    { title:"Watch me!", titleEn:"Watch Me!", year:2025, date:"2025年3月14日", cert:"—", chart:"Oricon Combined #22" },
    { title:"劇上", titleEn:"Gekijō", year:2025, date:"2025年5月9日", cert:"—", chart:"Japan Hot 100 #24" },
  ],

  eps: [
    {
      title:"THE BOOK", badge:"EP", date:"2021年1月6日", label:"Sony Music Labels",
      sales:"約31万枚", cert:"ゴールド", chart:"Oricon Albums #2",
      tracks:["夜に駆ける","あの夢をなぞって","ハルジオン","たぶん","群青","ハルカ","もう少しだけ"],
      note:"デビューEP。配信リリース曲を集めた記念碑的作品。"
    },
    {
      title:"THE BOOK 2", badge:"EP", date:"2021年12月1日", label:"Sony Music Labels",
      sales:"約20万枚", cert:"プラチナム", chart:"Billboard Japan Hot Albums #1",
      tracks:["怪物","優しい彗星","三原色","ラブレター","大正浪漫","ツバメ"],
      note:"Billboard Japan Hot Albumsで1位獲得。"
    },
    {
      title:"THE BOOK 3", badge:"EP", date:"2023年10月4日", label:"Sony Music Labels",
      sales:"約20万枚", cert:"ゴールド", chart:"Oricon Albums #2",
      tracks:["ADVENTURE","セブンティーン","アイドル","勇者","ビリビリ","祝福"],
      note:"「アイドル」収録。シリーズ最高の国際的注目を集めた作品。"
    },
    {
      title:"E-SIDE", badge:"English EP", date:"2021年11月12日", label:"Sony Music Labels",
      sales:"約9,500枚", cert:"—", chart:"—",
      tracks:["Into The Night","Tracing The Dream","Halzion","Maybe","Into The Blue","Farther"],
      note:"英語版EP。楽曲の英語バージョンを収録。"
    },
    {
      title:"E-SIDE 2", badge:"English EP", date:"2022年11月18日", label:"Sony Music Labels",
      sales:"約5,300枚", cert:"—", chart:"—",
      tracks:["Mr.","Suki Da","Blessing"],
      note:"英語版EP第2弾。"
    },
    {
      title:"E-SIDE 3", badge:"English EP", date:"2024年4月12日", label:"Sony Music Labels",
      sales:"約2,800枚", cert:"—", chart:"—",
      tracks:["Idol","Bravely You","Biri-Biri"],
      note:"英語版EP第3弾。「Idol」英語バージョン収録。"
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
