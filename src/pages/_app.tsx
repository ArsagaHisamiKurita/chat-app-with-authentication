import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { NotoSansJp, RobotoCondensed } from "@/utils/font";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${NotoSansJp.variable} ${RobotoCondensed.variable}`}>
      <div className="font-notosansjp">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;