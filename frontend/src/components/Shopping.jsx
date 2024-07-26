import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const initialProducts = [
    {
        id: 1,
        name: '마르지 않아도 잘 사는데요',
        href: '#',
        price: '14,400원',
        quantity: 1,
        imageSrc: 'https://image.yes24.com/goods/127067837/XL',
    },
    {
        id: 2,
        name: '기분이 태도가 되지 말자',
        href: '#',
        price: '14,400원',
        quantity: 1,
        imageSrc: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791197647666.jpg',
    },
];

const availableProducts = [
    {
        id: 3,
        name: '새로운 책 1',
        href: '#',
        price: '12,000원',
        quantity: 1,
        imageSrc: 'https://example.com/new_book1.jpg',
    },
    {
        id: 4,
        name: '새로운 책 2',
        href: '#',
        price: '15,000원',
        quantity: 1,
        imageSrc: 'https://example.com/new_book2.jpg',
    },
];

const Shopping = () => {
    const [open, setOpen] = useState(true);
    const [products, setProducts] = useState(initialProducts);

    const removeProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const getTotalPrice = () => {
        return products.reduce((total, product) => total + parseInt(product.price.replace(/[^0-9]/g, '')), 0);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
                <DialogPanel
                    transition
                    className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <DialogTitle className="text-lg font-medium text-gray-900">장바구니</DialogTitle>
                                <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close panel</span>
                                    </button>
                                </div>
                            </div>
                            {products.length > 0 ? (
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {products.map((product) => (
                                                <li key={product.id} className="flex py-6">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            alt={product.name}
                                                            src={product.imageSrc}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href={product.href}>{product.name}</a>
                                                                </h3>
                                                                <p className="ml-4">{product.price}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                        </div>
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <p className="text-gray-500">수량 {product.quantity}</p>
                                                            <div className="flex">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeProduct(product.id)}
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
                                                                    삭제하기
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-8 text-center text-gray-500">
                                    <p>장바구니에 물품이 없습니다.</p>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={() => addProduct(availableProducts[0])}
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            새 상품 추가하기
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>총 가격</p>
                                <p>{getTotalPrice().toLocaleString()}원</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500"></p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    구매하기
                                </a>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or{' '}
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        계속해서 구매하기
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default Shopping;


