// 1. HOF - 일반함수
function first<T>(arg1: T){
    return function second<U>(arg2: U): [T, U]{
        return [arg1, arg2]
    }
}

const result = first("영희")(8)

//
const LoginCheck = <C>(Component: C) => <P>(props: P): [C, P] => {
        return [Component, props]
};

const result2 = LoginCheck("영희")(8);