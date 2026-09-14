// スポットデータ(試作用ダミー3件)。実データが揃い次第、この配列にエントリを追記していく。
// photos/videos は shukutsu_tour/workshop/assets/ 配下のファイルパスを想定(試作ではプレースホルダー表示)。
const SPOTS = [
  {
    id: "kitaunga-souko",
    order: 1,
    name: "北運河の石造倉庫群",
    category: "歴史",
    photos: [], // 例: "assets/photos/kitaunga-souko-1.jpg"
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=北運河+小樽",
    googleReview: {
      rating: 4.3,
      excerpts: [
        "観光地化されていない分、静かで運河沿いをゆっくり歩ける。",
        "倉庫の質感が渋くて写真映えする。夕方の光が特に良い。"
      ]
    },
    notes: "南運河側より人通りが少なく、電動アシスト自転車でゆっくり流しながら倉庫の壁面や係船柱を見てもらうのに向いている。ツアーの導入(1つ目)候補。"
  },
  {
    id: "shukutsu-panorama",
    order: 2,
    name: "祝津パノラマ展望台",
    category: "景観",
    photos: [],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=祝津パノラマ展望台",
    googleReview: {
      rating: 4.5,
      excerpts: [
        "積丹方面まで見渡せる大パノラマ。天気が良い日は最高。",
        "駐車場から少し歩くが、その分人が少なくて穴場。"
      ]
    },
    notes: "北運河からの坂が電動アシスト自転車の見せ場。到着後に小休止兼写真タイムを取りたい。ツアー後半のハイライト候補。"
  },
  {
    id: "nishin-goten",
    order: 3,
    name: "鰊御殿(小樽市鰊御殿)",
    category: "歴史",
    photos: [],
    videos: [],
    googleMapUrl: "https://maps.google.com/?q=小樽市鰊御殿",
    googleReview: {
      rating: 4.1,
      excerpts: [
        "ニシン漁で栄えた時代の建物がそのまま残っていて見応えがある。",
        "海を背にした建物の佇まいが良い。祝津観光の定番。"
      ]
    },
    notes: "祝津パノラマ展望台から近く回りやすい。館内見学があるため滞在時間をやや長めに確保する想定。"
  }
];
