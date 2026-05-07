# educai Project

## Stack
- Next.js 14 App Router + TypeScript + Tailwind CSS
- Framer Motion（アニメーション）
- Hosting: Vercel

## Design System
- フォント: Hanken Grotesk + Noto Sans JP
- カラー: zinc-950（テキスト）、cyan-600（アクセント）、#fafaf8（背景）
- スタイル: Swiss International Typographic Style

## Conventions
- アニメーションは `src/components/Animated.tsx` のコンポーネントを使う
- ページヘッダーのH1は必ず `<Reveal>` でラップ
- スクロール入場は `<ScrollFade>`、ページロードは `<FadeUp>`
- リスト項目は `<StaggerList>` + `<StaggerItem>`
- 新しいページを作ったら Header の `navItems` に追加する

## Dev
- Dev server: `npm run dev -- --port 3005`
- Build確認: `npm run build`
- `.next` キャッシュが古いときは `rm -rf .next` してから再起動
