import { useQuery, gql } from "@apollo/client";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useEffect } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  //event.target.id로 하나는 받아올 수 있는데 그 이상은 힘들다.
  //1. JSON.stringify 메서드를 통해 자바스크립트 객체를 문자열로 변환
  //2. HOF 활용
  const onClickBasket = (basket: IBoard) => (event: any) => {
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") || "[]",
    );
    // 2. 이미 담겨있는 상품인지 확인하기
    const temp = baskets.filter((el: IBoard) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다!!");
      return;
    }
    // 3. 내가 클릭한 거 담기
    baskets.push(basket);

    //localStorage에 저장하기 위해선 반드시 문자열로 변환해줘야 함!
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  // 만약, 장바구니 페이지에서 가져오기도 만들고싶다면?
  // localStorage.getItem("baskets")만 사용하면 프리렌더링시 에러 발생!!!
  // 해결=> useEffect 사용
  useEffect(() => {
    const baskets_Item = localStorage.getItem("baskets");
  }, []);
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
