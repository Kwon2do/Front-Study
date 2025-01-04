import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import type { IQuery } from "@/commons/types/generated/types";
import { JSX } from "react";
import { useRouter } from "next/router";
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!");
      //void => 단순 호출만 하겠다, 반환값(promise) 무시하겠다
      void router.push("/login/03-login-check");
    }
  });
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
