import { useQuery, gql } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
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

export default function HOFPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickPage =
    (page: number) =>
    //event안쓰니까 생략 가능
    (event: MouseEvent<HTMLDivElement>): void => {
      //void refetch({ page: Number(page) });
      void refetch({ page });
    };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        //onClickPage : onClickPage(event) 실행
        //onClickPage("철수") : onClickPage("철수")(event) 실행
        <span
          key={index + 1}
          //id={String(index + 1)}
          onClick={onClickPage(index + 1)}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
