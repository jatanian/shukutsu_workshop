// スポットデータ。実データが揃い次第、この配列にエントリを追記していく。
// photos/videos は shukutsu_tour/workshop/assets/ 配下のファイルパス。
// googleReview.excerpts は自動取得ではなく、実際の口コミから手動で抜粋・転記したもの。
// reason はフィールドワークでこのスポットを選んだ理由(あれば)。
// priority: true は「小樽博物館 ⚪️」のように優先候補としてマークされていたスポット。
const SPOTS = [
  // === 食・スイーツ ===
  {
    id: "cotaru",
    order: 1,
    name: "COTARU",
    category: "食・スイーツ",
    photos: ["assets/photos/cotaru/1.jpg", "assets/photos/cotaru/2.jpg", "assets/photos/cotaru/3.jpg"],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=COTARU+小樽",
    googleReview: { rating: 0, excerpts: [] },
    notes: "コンクリート打ちっぱなしの内装がおしゃれなカフェ。ソフトクリームマシンやドリンクケースがあり、休憩スポットに良さそう。"
  },
  {
    id: "janken",
    order: 2,
    name: "ソフトクリームじゃんけん",
    category: "食・スイーツ",
    photos: ["assets/photos/janken/1.jpg", "assets/photos/janken/2.jpg", "assets/photos/janken/3.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/EA8V7JYdtxPtwJgX6?g_st=ic",
    reason: "ソフトクリームはツアーにおいてちょうどいいご褒美",
    googleReview: { rating: 0, excerpts: [] },
    notes: "巨大なソフトクリームのオブジェが目印。店内には「JANKEN OTARU」グッズや記念撮影用の顔出しパネルもあり、ツアーの休憩・撮影スポットとして良さそう。"
  },
  {
    id: "aozuka-shokudo",
    order: 3,
    name: "青塚食堂",
    category: "食・スイーツ",
    photos: ["assets/photos/aozuka-shokudo/1.jpg", "assets/photos/aozuka-shokudo/2.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/znpNfmppCjnoy2xo6?g_st=ic",
    reason: "祝津なら外せないスポット",
    googleReview: { rating: 0, excerpts: [] },
    notes: "祝津エリアの海鮮食堂。ツアー中の食事・休憩ポイント候補。"
  },

  // === 自然 ===
  {
    id: "otaru-kihinkan",
    order: 5,
    name: "小樽貴賓館",
    category: "自然",
    photos: [
      "assets/photos/kihinkan/1.jpg",
      "assets/photos/kihinkan/2.jpg",
      "assets/photos/kihinkan/3.jpg",
      "assets/photos/kihinkan/4.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/VMqw81Bq92DbHP5h7?g_st=ic",
    reason: "ギリギリ紅葉間に合うかも？？",
    googleReview: { rating: 0, excerpts: [] },
    notes: "旧青山別邸。「小樽貴賓館」と刻まれた門柱が目印。"
  },
  {
    id: "shukutsu-panorama",
    order: 6,
    name: "祝津パノラマ展望台",
    category: "自然",
    photos: [
      "assets/photos/shukutsu-panorama/1.jpg",
      "assets/photos/shukutsu-panorama/2.jpg",
      "assets/photos/shukutsu-panorama/3.jpg",
      "assets/photos/shukutsu-panorama/4.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/3jVNujxGX3b8zVtG9?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "北運河からの坂が電動アシスト自転車の見せ場。到着後に小休止兼写真タイムを取りたい。ツアー後半のハイライト候補。"
  },
  {
    id: "temiya-ryokuchi-shokubutsuen",
    order: 4,
    name: "手宮緑地植物園",
    category: "自然",
    photos: [
      "assets/photos/temiya-ryokuchi-shokubutsuen/1.jpg",
      "assets/photos/temiya-ryokuchi-shokubutsuen/2.jpg",
      "assets/photos/temiya-ryokuchi-shokubutsuen/3.jpg",
      "assets/photos/temiya-ryokuchi-shokubutsuen/4.jpg",
      "assets/photos/temiya-ryokuchi-shokubutsuen/5.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/ywVHCpuFW1ftCYdm6?g_st=ic",
    reason: "ギリギリ紅葉間に合うかも？？",
    googleReview: { rating: 0, excerpts: [] },
    notes: "木々に囲まれた緑の多い公園・植物園。温室やガラス張りの建物があり、小樽港・市街を見渡せる高台にある。ツアー中の小休止スポット候補。"
  },
  {
    id: "hiyoriyama-tenboudai",
    order: 8,
    name: "日和山展望台",
    category: "自然",
    photos: [
      "assets/photos/hiyoriyama-tenboudai/1.jpg",
      "assets/photos/hiyoriyama-tenboudai/2.jpg",
      "assets/photos/hiyoriyama-tenboudai/3.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=日和山灯台+小樽",
    googleReview: { rating: 0, excerpts: [] },
    notes: "赤白の灯台が目印。階段を上った先に開けるので、ツアー後半のハイライト候補。"
  },

  // === 歴史 ===
  {
    id: "otaru-hakubutsukan",
    order: 9,
    name: "小樽総合博物館",
    category: "歴史",
    photos: [
      "assets/photos/otaru-hakubutsukan/1.jpg",
      "assets/photos/otaru-hakubutsukan/2.jpg",
      "assets/photos/otaru-hakubutsukan/3.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/wUMn6fbXdCzELtgT8?g_st=ic",
    priority: true,
    googleReview: { rating: 0, excerpts: [] },
    notes: "赤レンガの外観が目を引く「鉄道・科学・歴史」の博物館。フィールドワークのリストで ⚪️ 印がついていた優先候補。"
  },
  {
    id: "kyu-temiya-sen",
    order: 10,
    name: "旧手宮線",
    category: "歴史",
    photos: ["assets/photos/kyu-temiya-sen/1.jpg", "assets/photos/kyu-temiya-sen/2.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/3uwiGQmF2QRgBCRi8?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "廃線跡の遊歩道。線路や車輪の展示が残っていて、電動アシスト自転車で走り抜けるのも気持ちよさそう。"
  },
  {
    id: "hokkai-seikan-dai3-souko",
    order: 11,
    name: "北海製罐第3倉庫",
    category: "歴史",
    photos: [],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/4udksxskynXo9XRFA?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "写真未着手。"
  },
  {
    id: "unga-koen",
    order: 12,
    name: "運河公園",
    category: "歴史",
    photos: ["assets/photos/unga-koen/1.jpg", "assets/photos/unga-koen/2.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/RyduBCpgRqurLdj96?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "旧小樽区公会堂前の噴水広場。開けた広場で記念撮影スポットとしても使える。"
  },
  {
    id: "nishin-goten",
    order: 13,
    name: "鰊御殿",
    category: "歴史",
    photos: [
      "assets/photos/nishin-goten/1.jpg",
      "assets/photos/nishin-goten/2.jpg",
      "assets/photos/nishin-goten/3.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/DugeM9Jn5Z57skvU7?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "祝津パノラマ展望台から近く回りやすい。館内見学があるため滞在時間をやや長めに確保する想定。"
  },
  {
    id: "nakade-bansha",
    order: 14,
    name: "中出張番屋",
    category: "歴史",
    photos: [
      "assets/photos/nakade-bansha/1.jpg",
      "assets/photos/nakade-bansha/2.jpg",
      "assets/photos/nakade-bansha/3.jpg",
      "assets/photos/nakade-bansha/4.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/C42iznFYhmDCYoSf7?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "「茨木家中出張番屋」。ゴールデンカムイゆかりの展示や、祝津エリアのニシン漁遺構をまとめた鳥瞰図パネルがある。館内の鳥瞰図は他スポットの位置関係を把握するのにも役立つ。"
  },
  // === アクティビティ ===
  {
    id: "hagemashi-no-saka",
    order: 16,
    name: "励ましの坂",
    category: "アクティビティ",
    photos: ["assets/photos/hagemashi-no-saka/1.jpg", "assets/photos/hagemashi-no-saka/2.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/2pY5By89m64C61jF9?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "市街を見下ろす急坂。電動アシスト自転車の走行体験としてツアーの見せ場になる。写真は坂の上から市街・海方向を見下ろす構図。"
  },
  {
    id: "shukutsu-minato-noriba",
    order: 17,
    name: "祝津港乗り場",
    category: "アクティビティ",
    photos: [],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/ZQPJWSaoJXAEPLHB8?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "写真未着手。観光船の乗り場。"
  },
  {
    id: "otaru-kankousen-terminal",
    order: 18,
    name: "小樽観光船ターミナル",
    category: "アクティビティ",
    photos: [],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/VRnKVDMszkp7mFkJA?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "写真未着手。"
  },
  {
    id: "aobato",
    order: 19,
    name: "あおばと",
    category: "アクティビティ",
    photos: [],
    videos: [],
    googleMapUrl: "https://otaru-kankousen.jp/aobato-course/",
    googleReview: { rating: 0, excerpts: [] },
    notes: "小樽観光船の周遊コース(あおばとコース)。Googleマップの場所ではなく、コース紹介ページへのリンク。写真未着手。"
  },
  {
    id: "otaru-suizokukan",
    order: 20,
    name: "小樽水族館",
    category: "アクティビティ",
    photos: ["assets/photos/otaru-suizokukan/1.jpg"],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=小樽水族館",
    googleReview: { rating: 0, excerpts: [] },
    notes: "祝津エリアのランドマーク的存在。観覧車も隣接。時間に余裕があれば立ち寄り候補。"
  }
];
