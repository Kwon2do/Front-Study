import { useRouter } from "next/router";
import { useEffect } from "react";
export const LoginCheck = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!");
      //void => 단순 호출만 하겠다, 반환값(promise) 무시하겠다
      void router.push("/login/05-login-check-hoc");
    }
  }, []);
  //{...프롭스} => 그대로 전달해주는 것
  return <컴포넌트 {...프롭스} />;
};
