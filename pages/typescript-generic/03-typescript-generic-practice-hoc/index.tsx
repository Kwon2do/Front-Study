import { useRouter } from "next/router";
import { useEffect } from "react";
import type { ReactElement, JSX } from "react";
//JSX.Element + props타입 => ReactElement => JSX.Element

//prettier-ignore
export const LoginCheck = (컴포넌트: ()=> JSX.Element) => <P extends {}>(프롭스: P): ReactElement => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능합니다!");
        void router.push("/login/05-login-check-hoc");
      }
    }, []);
    //{...프롭스} => 그대로 전달해주는 것
    return <컴포넌트 {...프롭스} />;
  };
