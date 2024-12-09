export const works = [
  {
    id: "Case_01",
    title: "FURYU Brand Site",
    url: "https://furyu-craft.com/",
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
      // "/images/case01-work-image-2.png",
      // "/images/case01-work-image-3.png",
      "/images/gif/case01-gif-1.gif",
      "/images/gif/case01-gif-2.gif",
      "/images/case01-work-image-4.png",
    ],
  },
  {
    id: "Case_02",
    title: "Portfolio Site",
    url: "/",
    fields: "ライティング、デザイン/実装",
    tech: "Next.js tailwindCSS Three.js GSAP AOS Lenis.js",
    project:
      "モダンな技術スタックを活用し、パフォーマンスとユーザー体験を重視したポートフォリオサイトを制作",
    period: "5ヶ月",
    description: {
      articles: [
        {
          title: "開発環境とコード設計",
          details: [
            "静的サイト生成（SSG）による高速なページロードを実現するため、Next.jsを採用。",
            "管理のしやすさを重視し、①コンポーネントは機能ごとにフォルダ分けし再利用性を考慮 ②複雑なJavaScript処理はutilityフォルダに格納し、メンテナンス性を向上を意識した。",
          ],
        },
        {
          title: "モダンCSSの使用",
          details: [
            "Next.jsとの相性が良いTailwindCSSを採用し、効率的な開発を行なった。",
            "コンポーネント単位でスタイルを完結させることで、修正・更新がしやすい設計を心がけた。",
          ],
        },
        {
          title: "インタラクティブ要素とアニメーションの実装",
          details: [
            "Three.jsを活用し、ファーストビューに印象的な3Dオブジェクト(デザインから開発まで拡張し、透明性や繊細さを意図したガラスオブジェクト)を実装した。",
            "シンプルなデザインの中に適度なギミックを取り入れ、記憶に残るサイトを目指した。",
          ],
        },
      ],
    },
    images: [
      "/images/case02-work-image-1.png",
      // "/images/case02-work-image-2.png",
      // "/images/case02-work-image-3.png",
      "/images/gif/case02-gif-1.gif",
      "/images/gif/case02-gif-2.gif",
      "/images/case02-work-image-4.png",
    ],
  },
  {
    id: "Case_03",
    title: "Green Energy",
    url: "https://cf737610.cloudfree.jp/",
    supplement: "※架空のサイト",
    fields: "デザイン/実装",
    tech: "HTML/CSS(Sass) JavaScript PHP Swiper GSAP WordPress",
    project:
      "環境エネルギー企業のコーポレートサイトを想定し、企業としての信頼性や誠実な印象になるようデザイン・実装を行なった。",
    period: "2ヶ月",
    description: {
      articles: [
        {
          title: "WordPress独自テーマの開発",
          details: [
            "ニュースやインタビュー記事など、更新頻度の高いコンテンツを想定し、WordPressで独自テーマを開発。",
            "更新性が伴う内容は運用担当者の更新負荷を最小限に抑えることも考え、カスタム投稿タイプとカスタムフィールドを活用した設計を行なった。",
          ],
        },
        {
          title: "コードの品質と保守性への取り組み",
          details: [
            "Sassによるコンポーネント単位でのファイル分割を採用し、再利用性と保守性を向上。",
            "FLOCSSの設計思想を取り入れ、予測・拡張可能なCSS設計を行なった。",
          ],
        },
        {
          title: "インタラクティブ要素の実装",
          details: [
            "ファーストビューでは、企業メッセージを印象的に伝えるため、GSAPを使用したテキストフェードインアニメーションを実装した。",
            "ユーザーアクションに対するインタラクティブな体験を提供するひとつとして、フェードインアニメーションを実装した。",
          ],
        },
      ],
    },
    images: [
      "/images/case03-work-image-1.png",
      // "/images/case03-work-image-2.png",
      // "/images/case03-work-image-3.png",
      "/images/gif/case03-gif-1.gif",
      "/images/gif/case03-gif-2.gif",
      "/images/case03-work-image-4.png",
    ],
  },
  {
    id: "Case_04",
    title: "SUGUTABE",
    url: "https://midterm-assignment.vercel.app/",
    supplement: "※スクールの課題",
    fields: "デザイン/実装",
    tech: "HTML/CSS(Sass) JavaScript GSAP",
    project:
      "産地直送の野菜が手頃に楽しめるLPを想定し、3カラムレイアウトを基調としたデザイン・実装を行った。",
    period: "1.5ヶ月",
    description: {
      articles: [
        {
          title: "レスポンシブデザインの最適化",
          details: [
            "スマートフォンからの閲覧が多いことを踏まえ、3カラムレイアウトでの実装を行なった。",
            "ブレイクポイントを最小限に抑えることで、どのデバイスでも違和感のない表示を実現した。",
          ],
        },
        {
          title: "効率的な開発フロー",
          details: [
            "Sassの変数・ミックスインを活用し、再利用性を向上を目指した。",
            "コンポーネント単位でのスタイル管理により、修正・更新の効率化を行なった。",
          ],
        },
        {
          title: "ユーザー体験を考慮したアニメーション実装",
          details: [
            "スクロールスピードを考慮し、必要最小限のアニメーションに限定した。",
            "パララックス効果とフッター手前でのテキストアニメーションにより、適度な遊び心を演出した。",
          ],
        },
      ],
    },
    images: [
      "/images/case04-work-image-1.png",
      // "/images/case04-work-image-2.png",
      // "/images/case04-work-image-3.png",
      "/images/gif/case04-gif-1.gif",
      "/images/gif/case04-gif-2.gif",
      "/images/case04-work-image-4.png",
    ],
  },
  {
    id: "Case_05",
    title: "LIG LP",
    url: "https://www.figma.com/design/UJF6OLOKVVpiricFj7Axfq/%E7%84%A1%E9%A1%8C?node-id=0-1&t=5QWdURiVq7g5qaT0-1",
    supplement: "※スクールの課題",
    fields: "デザイン",
    tech: "Figma",
    project:
      "WebスクールのLPを、グラフィックデザイナーのキャリアチェンジに特化したコンテンツとしてリデザインした。",
    period: "2ヶ月",
    description: {
      articles: [
        {
          title: "ターゲット設定と分析",
          details: [
            "従来のLPのペルソナが「未経験からクリエイターになりたい人」だったが、「グラフィックデザイナーからWebデザイナーへの転身希望者」というペルソナにフォーカスを当てた。",
            "現役デザイナーの視点を考慮し、デザイントレンドと審美性の両立を追求した。",
          ],
        },
        {
          title: "徹底的なデザイン検討",
          details: [
            "ファーストビューの重要性を考慮し、6パターンの異なるアプローチを行なった。",
            "全16案のデザインカンプを作成し、他のデザイナーからのフィードバックを収集した。",
          ],
        },
        {
          title: "情報設計の最適化",
          details: [
            "コンテンツの優先順位付けを行い、ユーザーの動線を最適化した。",
            "コース紹介セクションでは、主力コースと補助的コースの視覚的な差別化を図った。",
          ],
        },
      ],
    },
    images: [
      "/images/case05-work-image-1.png",
      "/images/case05-work-image-2.png",
      "/images/case05-work-image-3.png",
      "/images/case05-work-image-4.png",
    ],
  },
];

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}
