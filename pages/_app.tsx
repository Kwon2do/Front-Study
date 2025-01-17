import { JSX } from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "@/components/commons/apollo";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Component {...pageProps} />
      </ApolloSetting>
    </RecoilRoot>
  );
}
