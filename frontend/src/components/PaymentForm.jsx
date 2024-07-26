import React, { useState } from 'react';
import OtherPayment from './OtherPayment.jsx';

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
                                    <img src='https://ifh.cc/g/lSsBcL.jpg'/>
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
                <div className="mb-2">
                    <h3 className="mb-3">결제 수단 선택</h3>
                    <div>
                        <div className="items-center p-4">
                            <input type="checkbox"
                                   name="test"
                                   value="creditCard"
                                   className="checkbox"
                                   checked={paymentMethod === 'creditCard'}
                                   onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <span className="m-3">신용카드<br></br></span>
                        </div>
                        <div className="flex items-center p-4">
                            <input type="checkbox"
                                   name="test"
                                   value="kaoPay"
                                   className="checkbox"
                                   checked={paymentMethod === 'kaoPay'}
                                   onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <img src="https://ifh.cc/g/ZcaDQh.png" className="w-20 ml-2"/>
                        </div>
                        <div className="flex items-center p-4">
                            <input type="checkbox"
                                   name="test"
                                   value="naiverPay"
                                   className="checkbox"
                                   checked={paymentMethod === 'naiverPay'}
                                   onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <img src="https://ifh.cc/g/kJ6ZCH.jpg" className="w-20 ml-3"/>
                        </div>
                        <div className="items-center p-4">
                            <input type="checkbox"
                                   name="test"
                                   value="bank"
                                   className="checkbox"
                                   checked={paymentMethod === 'bank'}
                                   onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <span className="m-3">다른 결제 수단</span>
                        </div>
                    </div>
                    {/*카드결제*/}
                    {paymentMethod === 'creditCard' && (
                        <>
                            <div className="mb-10">
                                <label className="mb-10 w-max">카드 번호:</label><br/>
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="w-full p-2 border-gray-800"
                                    required
                                />
                            </div>
                            <div className="wb-10 flex items-stretch ">
                                <div className="w-1/2">
                                    <label className="mb-2">유효기간:</label>
                                    <input
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        className="w-full p-2 border-gray-800"
                                        required
                                    />
                                </div>
                                <div className="w-1/2 ml-3">
                                    <label className="mb-2">CVV:</label>
                                    <input
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        className="w-full p-2 border-gray-800"
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {/*다른결제*/}
                {paymentMethod === 'bank' && (
                    <OtherPayment></OtherPayment>
                    )}
                {/* 결제하기 버튼 */}
                <button className="btn btn-primary w-40 mt-5 ml-80">결제하기</button>
            </form>
        </div>
    );
};

export default PaymentForm;
