// スポットデータ。実データが揃い次第、この配列にエントリを追記していく。
// photos/videos は shukutsu_tour/workshop/assets/ 配下のファイルパス。
// googleReview.excerpts は自動取得ではなく、実際の口コミから手動で抜粋・転記したもの。
// notes は各スポットの基礎知識(公式サイト・観光協会・Wikipedia等の信頼できる情報源をもとに要約)。
// order はカテゴリごとにまとめて連番にしてある(食・スイーツ→自然→歴史→アクティビティ)。
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
    notes: "小樽駅から徒歩約3分にあるカフェ併設のレンタサイクル店。20種類以上のスパイスを使った自家製スープカレーやソフトクリームが名物。電動アシスト自転車の貸し出しも行っている。"
  },
  {
    id: "janken",
    order: 2,
    name: "ソフトクリームじゃんけん",
    category: "食・スイーツ",
    photos: ["assets/photos/janken/1.jpg", "assets/photos/janken/2.jpg", "assets/photos/janken/3.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/EA8V7JYdtxPtwJgX6?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "祝津地区にあるソフトクリーム専門店。バニラとイチゴを合わせた「イチゴミックス」などが手頃な価格で楽しめる。ワッフルコーンへの変更も可能。"
  },
  {
    id: "maruki-seihyo-koba",
    order: 3,
    name: "丸城製氷工場",
    category: "食・スイーツ",
    photos: ["assets/photos/maruki-seihyo-koba/1.jpg"],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=丸城製氷工場+小樽",
    googleReview: { rating: 0, excerpts: [] },
    notes: "北運河の一番奥にある製氷工場直営のかき氷店。20年以上にわたり親しまれている山盛りのかき氷が名物で、氷屋ならではの上質な氷が味わえる。"
  },
  {
    id: "aozuka-shokudo",
    order: 4,
    name: "青塚食堂",
    category: "食・スイーツ",
    photos: ["assets/photos/aozuka-shokudo/1.jpg", "assets/photos/aozuka-shokudo/2.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/znpNfmppCjnoy2xo6?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "1958年開業、祝津にある漁師直営の食堂兼民宿。地元で獲れた新鮮な魚介を使ったニシン料理やホッケ丼などが名物。"
  },

  // === 自然 ===
  {
    id: "temiya-ryokuchi-shokubutsuen",
    order: 5,
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
    googleReview: { rating: 0, excerpts: [] },
    notes: "小樽港を見渡す丘にある植物園。日本庭園や桜園、水生植物園など約15区の見本園があり、季節の花を楽しめる。例年4月下旬〜10月末に開園。"
  },
  {
    id: "otaru-kihinkan",
    order: 6,
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
    googleReview: { rating: 0, excerpts: [] },
    notes: "旧青山別邸。ニシン漁で財を築いた青山家が大正6年から6年半かけて建てた別邸で、約1500坪の敷地に18室を持つ。2010年に国の登録有形文化財に指定。"
  },
  {
    id: "shukutsu-panorama",
    order: 7,
    name: "祝津パノラマ展望台",
    category: "自然",
    photos: [
      "assets/photos/shukutsu-panorama/3.jpg",
      "assets/photos/shukutsu-panorama/1.jpg",
      "assets/photos/shukutsu-panorama/2.jpg",
      "assets/photos/shukutsu-panorama/4.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/3jVNujxGX3b8zVtG9?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "ニセコ積丹小樽海岸国定公園内、標高約70mの丘にある展望台。日本海や高島岬、日和山灯台を一望でき、朝日・夕日の名所として知られる。"
  },
  {
    id: "hiyoriyama-tenboudai",
    order: 8,
    name: "日和山展望台",
    category: "自然",
    photos: [
      "assets/photos/hiyoriyama-tenboudai/2.jpg",
      "assets/photos/hiyoriyama-tenboudai/1.jpg",
      "assets/photos/hiyoriyama-tenboudai/3.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=日和山灯台+小樽",
    googleReview: { rating: 0, excerpts: [] },
    notes: "高島岬にある日和山灯台。1883年に北海道で2番目に点灯した歴史ある灯台で、現在の姿は1953年にコンクリート造へ改築されたもの。2018年に日本遺産の構成文化財に認定。"
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
    googleReview: { rating: 0, excerpts: [] },
    notes: "2007年に小樽市博物館などを統合して開館。蒸気機関車「しづか号」など50両もの鉄道車両を保存・展示し、北海道の鉄道の歴史を伝える。"
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
    notes: "1880年開通、北海道初・日本で3番目の鉄道の一部。1985年に廃線となり、現在は線路や踏切が残る約1.6kmの散策路として整備されている。2018年に北海道遺産に選定。"
  },
  {
    id: "unga-koen",
    order: 11,
    name: "運河公園",
    category: "歴史",
    photos: ["assets/photos/unga-koen/2.jpg", "assets/photos/unga-koen/1.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/RyduBCpgRqurLdj96?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "1923年完成、北運河沿いの公園。明治・大正期の石造倉庫を復元した休憩棟や噴水池があり、小樽港築港に貢献した廣井勇らの胸像も置かれている。"
  },
  {
    id: "nishin-goten",
    order: 12,
    name: "鰊御殿",
    category: "歴史",
    photos: [
      "assets/photos/nishin-goten/3.jpg",
      "assets/photos/nishin-goten/1.jpg",
      "assets/photos/nishin-goten/2.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/DugeM9Jn5Z57skvU7?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "1897年に泊村で建てられ、1958年に現在地へ移築。約540トンの木材を使った現存最大級のニシン御殿で、1960年に北海道有形文化財に指定された。"
  },
  {
    id: "nakade-bansha",
    order: 13,
    name: "中出張番屋",
    category: "歴史",
    photos: [
      "assets/photos/nakade-bansha/2.jpg",
      "assets/photos/nakade-bansha/1.jpg",
      "assets/photos/nakade-bansha/3.jpg",
      "assets/photos/nakade-bansha/4.jpg"
    ],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/C42iznFYhmDCYoSf7?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "正式名称「茨木家中出張番屋」。網元・茨木家が明治後期に建てた漁夫の宿舎で、老朽化後の2010年に修復され翌年小樽市都市景観賞を受賞した。"
  },

  // === アクティビティ ===
  {
    id: "hagemashi-no-saka",
    order: 14,
    name: "励ましの坂",
    category: "アクティビティ",
    photos: ["assets/photos/hagemashi-no-saka/1.jpg", "assets/photos/hagemashi-no-saka/2.jpg"],
    videos: [],
    googleMapUrl: "https://maps.app.goo.gl/2pY5By89m64C61jF9?g_st=ic",
    googleReview: { rating: 0, excerpts: [] },
    notes: "手宮バスターミナルから続く延長904m、最大勾配24%の急坂。互いに励まし合いながら登ったことが名前の由来とされ、坂の上からは海が一望できる。"
  },
  {
    id: "aobato",
    order: 15,
    name: "あおばと",
    category: "アクティビティ",
    photos: ["assets/photos/aobato/1.jpg"],
    videos: [],
    googleMapUrl: "https://otaru-kankousen.jp/aobato-course/",
    googleReview: { rating: 0, excerpts: [] },
    notes: "小樽海上観光船が運航する祝津航路の船。片道約20分で、おたる水族館や鰊御殿へのアクセス手段としても利用できる。"
  },
  {
    id: "otaru-suizokukan",
    order: 16,
    name: "小樽水族館",
    category: "アクティビティ",
    photos: ["assets/photos/otaru-suizokukan/2.jpg", "assets/photos/otaru-suizokukan/1.jpg"],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=小樽水族館",
    googleReview: { rating: 0, excerpts: [] },
    notes: "1959年開館。大小70基余りの水槽で約250種5000点の生き物を展示する、北海道を代表する水族館のひとつ。"
  },
  {
    id: "yunohana-temiyaden",
    order: 17,
    name: "小樽天然温泉 湯の花 手宮殿",
    category: "アクティビティ",
    photos: ["assets/photos/yunohana-temiyaden/1.jpg"],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=湯の花手宮殿+小樽",
    googleReview: { rating: 0, excerpts: [] },
    notes: "手宮エリアにある日帰り天然温泉施設。「湯の花」は小樽市内に手宮殿・朝里殿の2施設を展開している。"
  }
];
