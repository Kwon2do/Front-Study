import { useMutation, gql } from "@apollo/client";
import { JSX } from "react";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "123", title: "안녕하세요", contents: "반갑습니다") {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };
  return (
    <button onClick={wrapAsyncFunc(onClickSubmit)}>
      GraphQL-API 요청하기
    </button>
  );
}
