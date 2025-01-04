import { gql, useQuery } from "@apollo/client";
import React from "react";
import type { IQuery } from "@/commons/types/generated/types";
import { JSX } from "react";
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginPage(): JSX.Element {
  //1차적으로 apolloCache에 가서 기존 데이터가 있으면 받아옴(fetchPolicy=>cache-first) 디폴트값
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);
  //cache안거치고, 바로 백엔드 요청해서 데이터 받아오는 것 (fetchPolicy=>network-only)
  //const {data} = useQuery(FETCH_USER_LOGED_IN,{fetchPolicy:"cache-first"});
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
