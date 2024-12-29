import { JSX } from "react";

//window안에 IMP도 있다고 선언
declare const window: typeof globalThis & {
    IMP: any
}
export default function PaymentPage(): JSX.Element {
    const onClickPayment = (): void => {
        const IMP = window.IMP; //생략 가능
        IMP.init(process.env.NEXT_PUBLIC_COMPANY_CODE);
        IMP.request_pay({
            pg: "kakaopay",
            pay_method: "card",
            //merchant_uid: "주문 번호", -> 따로 지정안하면 자동으로 생성
            name: "맥북",
            amount: 10000,
            buyer_email: "dohun_1@naver.com",
            buyer_name: "kwon",
            buyer_tel: "010-1234-5678",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            //모바일에서는 결제 시, 페이지 주소가 바뀜 -> 결제끝나고 돌아올 주소 입력
            m_redirect_url : "/"
                
          }, function (rsp:any) { // callback
                        if (rsp.success) {
                   alert('결제가 성공했습니다.');
                    // 결제 성공 로직
                    console.log(rsp);
                    
                    //백엔드에 결제관련 데이터 전달 => mutation 실행
        
                } else {
                    alert('결제에 실패했습니다.');
                    // 결제 실패 로직
                }
           });
    }
    return (<>
    {/* jQuery */}
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
	{/* iamport.payment.js */} 
    <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
    <button onClick={onClickPayment}>Payment</button>
    </>)
}
