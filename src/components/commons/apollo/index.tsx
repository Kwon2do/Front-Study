import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import React from "react";
import { ReactNode } from "react";
import { HttpLink } from "@apollo/client/link/http";
import { useRecoilState } from "recoil";
import { accessToken } from "@/commons/stores";

// 서버데이터 미리 저장
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessTokenState] = useRecoilState(accessToken);

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    //recoil에 저장된 토큰을 가져와서 모든 api날릴때마다 첨부가 되게끔
    headers: {
      Authorization: `Bearer ${accessTokenState}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
