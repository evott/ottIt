import React from 'react';

const ProductDetail = () => {
    return (
        <div className="product-detail-container">
            {/* 상단 부분 */}

            {/* 중간 부분 */}
            <main className="product-detail-main">
                {/* 왼쪽 텍스트 */}
                <section className="product-detail-left">
                    <h2>이세종 저자(글)</h2>
                    <p>모도리컴퍼니 · 2024년 07월 05일</p>
                    <div className="book-info">
                        <p>국내도서 1위 · 예술/대중문화 1위</p>
                    </div>
                    <div className="book-review">
                        <span>10.0</span>
                        <span>최고에요 (86%의 구매자)</span>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    </div>
                </section>

                {/* 가운데 이미지 */}
                <section className="product-detail-center">

                </section>

                {/* 오른쪽 텍스트 */}
                <section className="product-detail-right">
                    <h2>구의 증명</h2>
                    <p>이세종종 Hardcover · 전 1권</p>
                    <p className="price">
                        <span className="discount">10%</span> <span>900,000</span>
                        <span className="original-price">1,000,000원</span>
                    </p>
                    <p>적립/혜택: 1,000,000P</p>
                    <p>배송안내: 무료배송 · 7/05(월) 출고예정</p>
                    <button className="buy-now-btn">바로구매</button>
                    <button className="add-to-cart-btn">장바구니</button>
                </section>
            </main>

            {/* 하단 부분 */}
            <footer className="product-detail-footer">
                <p>총 상품 금액: 900,000원</p>
            </footer>
        </div>
    );
};

export default ProductDetail;
