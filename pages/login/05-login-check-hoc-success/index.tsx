import { gql, useQuery } from "@apollo/client";
import React from "react";
import type { IQuery } from "@/commons/types/generated/types";
import { JSX } from "react";
import { LoginCheck } from "../../../src/components/commons/hocs/withAuth";
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function MyPage(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
//마이페이지에 접속하기 전에, LoginCheck 실행 후 접속하게 됨.
export default LoginCheck(MyPage);
