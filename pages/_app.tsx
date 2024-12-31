import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "@/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Component {...pageProps} />
      </ApolloSetting>
    </RecoilRoot>
  );
}
