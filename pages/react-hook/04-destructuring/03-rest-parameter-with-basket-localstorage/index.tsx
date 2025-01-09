import { useQuery, gql } from "@apollo/client";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../src/commons/types/generated/types";

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
export default function RestParameterPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  const onClickBasket = (basket: IBoard) => () => {
    //1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    //2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el: IBoard) => el._id === basket._id);
    if (temp.length >= 1) {
      alert(`${basket.title}는 장바구니에 담겴습니다`);
    }
    //3. 클릭한 상품 추가하기
    //delete basket.__typename; // 좋지 못한 사례 => 원본을 건들면 복잡한 코드에서는 로직에 예상치 못한 오류를 발생시킬 수 있음.
    const { __typename, ...newBasket } = basket; // 안전한 사례
    baskets.push(basket);
    //4. 추가된 장바구니로 변경하기
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  return (
    <>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
