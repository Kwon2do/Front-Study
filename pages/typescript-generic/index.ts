// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
    return [
        arg3,
        arg2,
        arg1
    ]
}
//const result = getPrimitive('hello', 123, true);

//

// 1. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
    console.log(arg1*1000); //가능함
    return [arg3, arg2, arg1]
}

// 2. unknown 타입 => any보다는 안전함. 
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
   if(typeof arg1 === 'number') console.log(arg1*1000); //무조건 필터를 해줘야 함(알려주면 가능해짐)
    return [arg3, arg2, arg1]
}


// 3. generic 타입 => unknown보다 더 안전
const getGeneric = <MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] => {
     return [arg3, arg2, arg1]
 }
 //return 타입이 뭔지 자동으로 알아냄
 //const result = getGeneric("철수", 123, true)
 
 //중간에 <>로 type강제 가능
 //useState<number>(0)처럼
 // const result = getGeneric<string,string,number>("철수", 123, true) //오류 발생!
 // const result = getGeneric<string,string,number>("철수", "영희", 1) 


 //
 const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
    return [arg3, arg2, arg1]
}