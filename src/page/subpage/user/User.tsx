import React from 'react';

import { useParams } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";

const User:React.FC = () => {
    const { page } = useParams();
    const defaultpage = page || "login"; // 로그인 유무는 어떻게 하는지

    return (
        <main className='md:pt-[5rem]'>
            <div className="bg-bg-gray">
                <div className="sectionBanner hidden md:block h-[15.375rem]  bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                    url('https://d-hye.github.io/source/img/banner/user.jpg')
                    `,
                }} ></div>
                <div className="subContWrap py-0 md:py-[2.5rem]">
                    <div className="sectionCont px-2 md:px-5 mx-auto bg-trip-white md:drop-shadow-[var(--dropShadow)] md:rounded-md w-full md:max-w-[36rem]">
                        {defaultpage === "login" ? <Login /> : <SignUp />}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default User;

