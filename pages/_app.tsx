import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* Makes the app globally accessible via recoil */}
      <RecoilRoot> 
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
