### FrontEnd

```bash
$ cd share_diary
$ npx create-next-app@latest frontend --typescript --eslint

✔ Would you like to use Tailwind CSS? … No / ✅Yes
✔ Would you like to use `src/` directory? … No / ✅Yes
✔ Would you like to use App Router? (recommended) … ✅No / Yes
✔ Would you like to customize the default import alias? … ✅No / Yes

# https://tailwindcss.com/docs/guides/nextjs
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p

// Storybookにtailwindの適応
$ npx storybook@latest init
$ npm i -D @storybook/addon-styling
// frontend/.storybook/main.tのaddonsの編集とfrontend/.storybook/preview.tsのcssのimport
// 参考; https://zenn.dev/youichiro/articles/d625e602ed47c1

// テストセットアップ
$ npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
// tsconfig.json に下記追加
// "types": ["node", "jest", "@testing-library/jest-dom"],

// eslint
$ npm i eslint-plugin-jsx-a11y --save-dev
$ npm i --save-dev eslint-plugin-tailwindcss prettier-plugin-tailwindcss
```

### BackEnd

// cd backend
$ npm init -y
$ npm install express
$ npm i --save-dev @types/express
$ npm install typescript --save-dev
$ npm i --save-dev @types/node
// 下記を参考に構築
// https://reffect.co.jp/node-js/express-typescript/
