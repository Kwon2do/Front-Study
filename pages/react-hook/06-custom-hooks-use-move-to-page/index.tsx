import { useMoveToPage } from "@/components/commons/hocs/hooks/useMoveToPage";
import { JSX } from "react";
import { useRecoilState } from "recoil";
export default function CustomHooksUseAuth(): JSX.Element {
  /*
  커스텀 훅 생성
  const router = useRouter();
  const onClickMoveToPage = (path: string) => () => {
    router.push(path);
  };
  */
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      {/* HOC 사용 */}
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/myPage")}>마이페이지로 이동</button>
    </>
  );
}

//커스텀 훅과 함수의 차이?
//동작은 동일함, 그러나 함수 안에 리액트 hooks를 사용하면 함수명을 use어쩌고로 작성함(커스텀 훅)
//코드 가독성과 유지보수를 위해
//클래스형 컴포넌트에서는 커스텀훅 사용이 불가 => hoc, 클로저 등 사용해야함.
