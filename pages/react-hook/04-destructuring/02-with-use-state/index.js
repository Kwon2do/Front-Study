import { useState } from "react";

export default function CounterLetDocumentPage() {
  // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state 써야됨)
  const result = useState(0);

  function onClickCountUp() {
    result[1](result[0] + 1);
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }
  return (
    <div>
      <h1>{result[0]}</h1>
      <button onClick={onClickCountUp}>+1</button>
      <button onClick={onClickCountDown}>-1</button>
    </div>
  );
}
