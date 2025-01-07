import * as yup from "yup";
export const schema = yup.object({
    //string인지 확인해주고, 없으면 경고창 출력
    writer: yup.string().required("작성자를 입력해주세요."),
    title: yup.string().required("제목을 입력해주세요."),
    contents: yup.string().required("내용을 입력해주세요."),
    email: yup
      .string()
      .email("이메일 형식에 적합하지 않습니다.")
      .required("이메일은 필수 입력입니다."),
    password: yup
      .string()
      .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
      .max(15, "비밀번호는 최대 15자리 이하 입력해주세요.")
      .required("비밀번호는 필수 입력입니다."),
    //정규표현식 -> degit 3자리,3~4자리, 4자리 일치하는가
    //-> 5555010-1234-1234여도 /\d{3}-\d{3,4}-\d{4}/는 조건 충족됨
    //따라서, 무조건 세 자리로 시작(^) & 4자리로 끝나야함($)
    phone: yup
      .string()
      .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다")
      .required("휴대폰은 필수 입력입니다."),
  });
  