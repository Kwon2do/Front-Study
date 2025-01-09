//제공자
export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  let state = 초기값;
  const setState = (변경값: S): void => {
    console.log(`${state} -> ${변경값}`); // 1. state 변경 로직
    console.log(`변경된 ${변경값}을 사용해서 컴포넌트를 리렌더링!`); // 2. 컴포넌트 리렌더링 코드
  };
  return [state, setState];
}
const [count, setCount] = useState<string>("철수");

