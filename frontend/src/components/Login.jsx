import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormFilled = email && password;

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                아이디 또는 이메일을 입력해 주세요.
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    비밀번호를 입력해 주세요.
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-gray-900 ">
                                        비밀번호를 잊어 버리셨나요?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="text-sm flex space-x-2 divide-x-[2px] divide-gray-400">
                            <a href="#" className="font-semibold text-gray-500">
                                아이디 찾기
                            </a>
                            <a href="#" className="pl-2 font-semibold text-gray-500">
                                비밀번호 찾기
                            </a>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                                    isFormFilled ? 'bg-blue-600 focus-visible:outline-blue-600' : 'bg-gray-400 focus-visible:outline-indigo-600'
                                }`}
                            >
                                로그인 하기
                            </button>
                        </div>
                    </form>

                    <div className="mt-4">
                        <button
                            type="button"
                            className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-blue-800 focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:ring-opacity-50"
                        >
                            회원가입 하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

