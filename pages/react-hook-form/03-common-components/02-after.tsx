import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "@/components/commons/inputs/01";
import Button01 from "@/components/commons/buttons/01";
interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: string;
}

export default function GraphqlMutationPage() {
  //formState에 에러가 들어가있음
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    //언제 검증할 것인지를 정함
    mode: "onChange",
  });
  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목 : <Input01 register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용 : <Input01 type="password" register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/*formState.isValid: 모든 조건을 만족하는가*/}
      <Button01 title="등록하기" isActive={formState.isValid}></Button01>
    </form>
  );
}
