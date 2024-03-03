import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head />
      <body>
        {/*
          ブロックスキップ機能
          スクリーンリーダーユーザーをメインコンテンツへ飛ばす
        */}
        <a className="sr-only" href="#mainContents">
          本文へ移動
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
