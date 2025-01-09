import { visitedPathAtom } from "@/commons/stores";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
interface IUseMoveToPage {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}
export const useMoveToPage = (): IUseMoveToPage => {
  const router = useRouter();
  const onClickMoveToPage = (path: string) => () => {
    //마지막 방문한 위치 기억
    setVisitedPage(path); //로그인페이지 일때는 저장X
    void router.push(path);
  };
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPathAtom);
  //shorthand property
  //onClickMoveToPage:onClickMoveToPage
  return { visitedPage, onClickMoveToPage };
};
