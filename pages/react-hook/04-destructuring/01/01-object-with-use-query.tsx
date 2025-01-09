function useQuery(queryKey: string) {
  ///queryKey라는 API 요청하기
  return {
    data: { fetchBoard: { writer: "철수" } },
    refetch: () => {
      console.log("refatch 실행!");
    },
  };
}
// 구조분해할당으로 data와 refetch 가져오기(이름 변경 불가)
const { data, refetch } = useQuery("fetchBoard");
console.log(data.fetchBoard.writer); //철수
refetch(); //refatch 실행!
