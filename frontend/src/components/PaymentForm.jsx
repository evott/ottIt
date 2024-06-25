import React, { useState } from 'react';

const PaymentForm = () => {
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 결제 처리 로직을 여기에 추가하세요
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
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>결제하기</h2>
            <form onSubmit={handleSubmit}>

                {/* 주문 상품 목록 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3>주문 상품 목록</h3>
                    <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
                        <p>상품 1 - 가격: ₩10,000</p>
                        <p>상품 2 - 가격: ₩20,000</p>
                        <p>상품 3 - 가격: ₩30,000</p>
                        <p>총 가격: ₩60,000</p>
                    </div>
                </div>

                {/* 주문자 정보 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3>주문자 정보</h3>
                    <div style={{ marginBottom: '15px' }}>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">성함</span>
                            </div>
                            <input type="text" placeholder="이름 입력"
                                   className="input input-bordered w-full max-w-xs"/>
                        </label>
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <label className="form-control max-w-xs">
                            <div className="label">
                                <span className="label-text">이메일</span>
                            </div>
                            <input type="text" placeholder="이메일 입력"
                                   className="input input-bordered max-w-xs"/>
                        </label>@
                        <select className="select w-full max-w-xs">
                            <option disabled selected>이메일을 선택해주세요</option>
                            <option>naver.com</option>
                            <option>gmail.com</option>
                            <option>nate.com</option>
                            <option>daum.net</option>
                            <option>korea.com</option>
                        </select>
                    </div>
                </div>

                {/* 배송 정보 */}
                <div style={{marginBottom: '30px'}}>
                    <h3>배송 정보</h3>
                    <div style={{marginBottom: '15px'}}>
                        <label style={{display: 'block', marginBottom: '5px'}}>주소:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            required
                        />
                    </div>
                </div>

                {/* 결제 수단 선택 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3>결제 수단 선택</h3>
                    <div style={{marginBottom: '15px'}}>
                        <label>
                            <input type="checkbox" name="test" value="creditCard"
                                   onChange={(e) => checkOnlyOne(e.target)} />
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
                                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '48%' }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>유효기간:</label>
                                    <input
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                        required
                                    />
                                </div>
                                <div style={{ width: '48%' }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>CVV:</label>
                                    <input
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* 결제하기 버튼 */}
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px' }}>
                    결제하기
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;
