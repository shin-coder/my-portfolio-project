export const works = [
  {
    id: "Case_01",
    title: "FURYU Brand Site",
    url: "https://sample.com",
    fields: "ブランディング、ライティング、デザイン/実装",
    tech: "HTML/CSS JavaScript Swiper GSAP",
    project:
      "個人事業におけるブランディング確立として、ビジュアル面での差別化とユーザー体験を設計",
    period: "2ヶ月",
    description: {
      articles: [
        {
          title: "ビジュアルデザインの強化",
          details: [
            "タイポグラフィの工夫とパララックス効果により、視覚的な奥行きを演出。",
            "グリッドレイアウトを基調としながら、適度な変化により単調さを回避した。",
          ],
        },
        {
          title: "インタラクティブ要素の実装",
          details: [
            "トップページのビジュアル切り替えに、雑誌のページをめくるような演出を実装した。",
            "スクロールイベントと連動したパララックス効果で、立体的な表現にした。",
          ],
        },
        {
          title: "JSONを用いたデータ管理",
          details: [
            "プロダクト詳細ページの情報をJSONで管理し、メンテナンス性を向上させた。",
            "非同期通信による商品バリエーション切り替えで、UXを向上させた。",
          ],
        },
      ],
    },
    images: [
      "/images/case01-work-image-1.png",
      "/images/case01-work-image-2.png",
      "/images/case01-work-image-3.png",
      "/images/case01-work-image-4.png",
    ],
  },
];

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}
