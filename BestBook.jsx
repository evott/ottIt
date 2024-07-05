import React, { useState } from 'react';

const books = [
    {
        category: '외국어',
        title: '해커스 토익 기출 VOCA',
        author: 'David Cho',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788965422785.jpg',
        rank: 1,
    },
    {
        category: '경제/경영',
        title: 'THE MONEY BOOK',
        author: '토스/모도리',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198686114.jpg',
        rank: 2,
    },
    {
        category: '인문',
        title: '초역 부처의 말',
        author: '코이케 류노스케',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791193506516.jpg',
        rank: 3,
    },
    {
        category: '인문',
        title: '불변의 법칙',
        author: '모건 하우절',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198517425.jpg',
        rank: 4,
    },
    {
        category: '인문',
        title: '만일 나에게 단 한 번의 아침이 남아 있다면',
        author: '존 릴런드',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791193937112.jpg',
        rank: 5,
    },
    {
        category: '시/에세이',
        title: '허송세월',
        author: '김훈',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788930041683.jpg',
        rank: 6,
    },
    {
        category: '외국어',
        title: '빨모샘의 라이브 영어회화',
        author: '신용하',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788901281797.jpg',
        rank: 7,
    },
    {
        category: '인문',
        title: '마흔에 읽는 쇼펜하우어',
        author: '강용수',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791192300818.jpg',
        rank: 8,
    },
    {
        category: '자기계발',
        title: '실패 예찬',
        author: '코스티카 브라다탄',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791191777710.jpg',
        rank: 9,
    },
    {
        category: '경제/경영',
        title: '돈의 심리학',
        author: '모건 하우절',
        img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791191056372.jpg',
        rank: 10,
    },
];

const BookCard = ({ category, title, author, imgSrc }) => {
    return (
        <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
            <img className="h-[20rem] w-64" src={imgSrc} alt={title} />
            <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">{category}</p>
            <p className="mt-[0.25rem] font-bold text-[0.95rem]">{title}</p>
            <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">{author}</p>
        </div>
    );
};

const ButtonGroup = ({ onFilter }) => {
    return (
        <div className="mb-4">
            <button onClick={() => onFilter('전체')} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">전체</button>
            <button onClick={() => onFilter('인문')} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">인문</button>
            <button onClick={() => onFilter('경제/경영')} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">경제/경영</button>
            <button onClick={() => onFilter('외국어')} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">외국어</button>
            <button onClick={() => onFilter('자기계발')} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">자기계발</button>
        </div>
    );
};

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="검색어를 입력하세요"
            />
        </form>
    );
};

const BestBook = () => {
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [category, setCategory] = useState('전체');

    const handleSearch = (query) => {
        let filtered = books;
        if (category !== '전체') {
            filtered = books.filter((book) => book.category === category);
        }
        if (query) {
            filtered = filtered.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase())
            );
        }
        setFilteredBooks(filtered);
    };

    const handleFilter = (category) => {
        setCategory(category);
        if (category === '전체') {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(books.filter((book) => book.category === category));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <SearchBar onSearch={handleSearch} />
            <h1 className="text-3xl font-bold mb-4">온라인 일간 베스트</h1>
            <ButtonGroup onFilter={handleFilter} />
            <div className="flex flex-wrap">
                {filteredBooks.map((book) => (
                    <div key={book.rank} className="w-1/5 p-2 mb-8">
                        <BookCard
                            category={book.category}
                            title={book.title}
                            author={book.author}
                            imgSrc={book.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestBook;
