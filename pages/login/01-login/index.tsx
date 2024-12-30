import { JSX } from "react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { IMutationLoginUserArgs, IMutation } from "@/commons/types/generated/types";
//query문 작성
const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`
export default function LoginPage(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //useMutation<반환타입, 인자타입>
    const [loginUser] = useMutation<Pick<IMutation, "loginUser">,IMutationLoginUserArgs>(LOGIN_USER);
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    }
    const onClickLogin = async(): Promise<void> => {
        //1. 로그인 mutation 전송 후 accessToken 받아오기
        const result = await loginUser({
            variables: {
                //short hand
                email,
                password
            }
        })
        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);
    }
    return (
        <>
            이메일: <input type="text" onChange={() => { }} />
            비밀번호: <input type="password" onChange={() => { }} />
            <button onClick={() => { }}>로그인</button>
        </>
    )
}
