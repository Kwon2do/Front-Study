import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressMain: string;
    addressDetail: string;
  };
}
export default function GraphqlMutationPage() {
  const { register, handleSubmit } = useForm<IFormData>();
  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      제목 : <input type="text" {...register("title")} />
      내용 : <input type="text" {...register("contents")} />
      <br />
      주소 : <input type="text" {...register("boardAddress.addressMain")} />
      상세 주소 :{" "}
      <input type="text" {...register("boardAddress.addressDetail")} />
      <button type="submit">GRAPHQL-API 요청하기</button>
    </form>
  );
}

/*
 <button type="reset">모든 항목 내용 초기화</button>
 <button type="submit">등록(form에 onSubmit 바인딩 함수 실행)</button>
 <button type="button" onClick={onClickSubmit}>딱 이 버튼의 onClick 함수만 실행</button>
*/
