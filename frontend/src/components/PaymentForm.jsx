import React, { useState } from 'react';

const PaymentForm = () => {
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Payment submitted:', {
            address,
            cardNumber,
            expiryDate,
            cvv,
            paymentMethod
        });
    };

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('test')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }

    return (
        <div className="justify-self-center ml-80 mr-80 p-8 border-2 border-gray-400">
            <h2>결제하기</h2>
            <form onSubmit={handleSubmit}>

                {/* 주문 상품 목록 */}
                <div className="pb-5">
                    <h3>주문 상품 목록</h3>
                    <div className="m-3 p-2 border-solid border-2">
                        <div className="flex h-100">
                            <div className=" inline-block align-middle w-20 ">
                                <figure>
                                    <img
                                        src="https://ifh.cc/g/lSsBcL.jpg"/>
                                </figure>
                            </div>
                            <div className="flex-auto w-60 p-11">
                                [국내도서] 구의 증명
                            </div>
                            <div className="flex-auto w-7 p-11">
                                1개
                            </div>
                            <div className="flex-auto w-10 p-11 value ='won'">
                                12,000원
                            </div>
                        </div>
                    </div>
                </div>

                {/* 주문자 정보 */}
                <div className="pb-10">
                    <h3>주문자 정보</h3>
                    <div className="pb-5">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">성함</span>
                            </div>
                            <input type="text" placeholder="이름 입력"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                    <div className="pb-15 ">
                        <label className="form-control ">
                            <div className="label ">
                                <span className="label-text">이메일</span>
                            </div>
                            <div>
                                <input type="text" placeholder="이메일 입력"
                                       className="input input-bordered w-1/3"/> @
                                <select className="select w-full max-w-xs ">
                                    <option disabled selected>이메일을 선택해주세요</option>
                                    <option>naiver.com</option>
                                    <option>gmail.com</option>
                                    <option>nate.com</option>
                                    <option>dam.net</option>
                                    <option>korea.com</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </div>

                {/* 배송 정보 */}
                <div className="mb-14">
                    <h3>배송 정보</h3>
                    <div className="mt-3 mb-12">
                        <label className="border-black mb-10">주소:</label>
                        <input className="w-96 m-3 border-solid border-gray-800"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* 결제 수단 선택 */}
                <div className="mb-16">
                    <h3>결제 수단 선택</h3>
                    <div className="mb-3 pt-3">
                        <label>
                            <input type="checkbox" name="test" value="creditCard"
                                   onChange={(e) => checkOnlyOne(e.target)}/>
                            신용카드&nbsp;
                        </label>
                        <label>
                            <input type="checkbox" name="test" value="kakaoPay"
                                   onChange={(e) => checkOnlyOne(e.target)}/>
                            카카오페이&nbsp;
                        </label>
                        <label>
                            <input type="checkbox" name="test" value="naverPay"
                                   onChange={(e) => checkOnlyOne(e.target)}/>
                            네이버페이&nbsp;
                        </label>
                        <label>
                            <input type="checkbox" name="test" value="bank"
                                   onChange={(e) => checkOnlyOne(e.target)}/>
                            은행 이체
                        </label>
                    </div>

                    {paymentMethod === 'creditCard' && (
                        <>
                            <div style={{marginBottom: '15px'}}>
                                <label style={{display: 'block', marginBottom: '5px'}}>카드 번호:</label>
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
                                    required
                                />
                            </div>
                            <div style={{marginBottom: '15px', display: 'flex', justifyContent: 'space-between'}}>
                                <div style={{width: '48%'}}>
                                    <label style={{display: 'block', marginBottom: '5px'}}>유효기간:</label>
                                    <input
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
                                        required
                                    />
                                </div>
                                <div style={{width: '48%'}}>
                                    <label style={{display: 'block', marginBottom: '5px'}}>CVV:</label>
                                    <input
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* 결제하기 버튼 */}
                <button className="btn btn-primary w-40 mt-5 ml-72">결제하기</button>
            </form>
        </div>
    );
};

export default PaymentForm;
