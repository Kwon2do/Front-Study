// 1. 함수를 리턴하는 함수
function aaa() {
  const apple = 10;
  //bbb 생략 가능 => 익명 함수
  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}

aaa()();

// 2. 함수를 리턴하는 함수 - 인자 사용
function aaa(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}
aaa(10)(20);

// 3. 함수를 리턴하는 함수 - 인자 사용
const aaa = (apple) => {
  return (banana) => {
    console.log(banana);
    console.log(apple);
  };
};

// 4. 축약형
const aaa = (apple) => (banana) => {
  //local scope니까 접근 가능
  console.log(banana);
  //closure scope니까 접근 가능
  console.log(apple);
};

// 5. 함수를 리턴하는 함수 - 인자 여러개
const ccc = (apple) => (banana) => (tomato) => (orange) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
  console.log(orange);
};
ccc(10)(20)(30)(40);
