import { useAuth } from "@/components/commons/hocs/hooks/useAuth";
import { JSX } from "react";

export default function CustomHooksUseAuth(): JSX.Element {
  useAuth();

  return <div>프로필 페이지입니다.</div>;
}

//커스텀 훅과 함수의 차이?
//동작은 동일함, 그러나 함수 안에 리액트 hooks를 사용하면 함수명을 use어쩌고로 작성함(커스텀 훅)
//코드 가독성과 유지보수를 위해
//클래스형 컴포넌트에서는 커스텀훅 사용이 불가 => hoc, 클로저 등 사용해야함.
