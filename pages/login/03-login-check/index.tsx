"use client";

import { JSX } from "react";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { accessTokenAtom } from "@/commons/stores";
import { useRecoilState } from "recoil";
import type {
  IMutationLoginUserArgs,
  IMutation,
} from "@/commons/types/generated/types";

//query문 작성
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useMutation<반환타입, 인자타입>
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenAtom);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(event.target.value);
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      //1. 로그인 mutation 전송 후 accessToken 받아오기
      const result = await loginUser({
        variables: {
          //short hand
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      //2. 받아온 accessToken recoil로 전달
      if (accessToken === undefined) {
        alert("로그인 실패!");
        return;
      }
      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);

      //3. 로그인 성공 페이지로 이동
      router.push("/login/03-login-check-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      이메일:{" "}
      <input
        type="text"
        onChange={(event) => {
          onChangeEmail(event);
        }}
      />
      비밀번호:{" "}
      <input
        type="password"
        onChange={(event) => {
          onChangePassword(event);
        }}
      />
      <button
        onClick={() => {
          onClickLogin();
        }}
      >
        로그인
      </button>
    </>
  );
}
