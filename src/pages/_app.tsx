import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";
import { firebaseApp } from "@/libs/firebase";

const App = ({ Component, pageProps }: AppProps) => {
  console.log(firebaseApp)

  return (
    <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
      <div className="font-notosansjp">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;