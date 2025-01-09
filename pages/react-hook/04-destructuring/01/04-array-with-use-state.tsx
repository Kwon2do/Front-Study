function useState(초기값: number) {
  let state = 초기값;
  const setState = (변경값: number) => {
    console.log(`${state} -> ${변경값}`); // 1. state 변경 로직
    console.log(`변경된 ${변경값}을 사용해서 컴포넌트를 리렌더링!`); // 2. 컴포넌트 리렌더링 코드
  };
  return [state, setState];
}
const [count, setCount] = useState(0);
//리렌더링 로직이 구현되어있지않아서, setState(5)해도 state 값 갱신되어 보이지않음
