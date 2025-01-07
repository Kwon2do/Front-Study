import { useState } from "react";

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {};
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  console.log("re-rendering TEST");
  return (
    <button>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter} />
      </div>
      <div>
        제목 : <input type="text" onChange={onChangeTitle} />
      </div>
      <div>
        내용 : <input type="text" onChange={onChangeContents} />
      </div>
      <button>GRAPHQL-API 요청하기</button>
    </button>
  );
}
