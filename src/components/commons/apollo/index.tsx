import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import React, { useEffect } from "react";
import { ReactNode } from "react";
import { HttpLink } from "@apollo/client/link/http";
import { useRecoilState } from "recoil";
import { accessTokenAtom } from "@/commons/stores";
import { JSX } from "react";
// 서버데이터 미리 저장
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessTokenState, setAccessToken] = useRecoilState(accessTokenAtom);
  //Next.js 렌더링 원리 이해
  //프리렌더링 이후 브라우저 렌더링일 때

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  // console.log("지금은 브라우저다!");
  // const result = localStorage.getItem("accessToken");
  // setAccessToken(result ?? "");
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if(typeof window !== "undefined"){
  // console.log("지금은 브라우저다!");
  // }
  //프리렌더링 과정
  // else {
  //   console.log("지금은 프론트엔드서버다. yarn dev로 실행시킨 프로그램 내부다");
  // }

  // 3. 프리렌더링 무시 - useEffect 방법 -> 프리렌더링 이후 수행됨
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);
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
