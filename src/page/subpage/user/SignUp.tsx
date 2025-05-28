import React from 'react';

import { Link } from 'react-router-dom';




const SignUp:React.FC = () => {


    return (
        <>
            <div className="signup_result container_m">
                <div className="img_box">
                    <img src="https://trip-ter.vercel.app/img/illustrator/airplane.png" alt="가입을 축하합니다!"/>
                </div>
                <h3 className="color-active-blue"><span>{}</span>님의 가입을 축하합니다!</h3>
                <p>그럼 트립터와 함께 떠나볼까요?</p>
                <div className="btn_wrap d-flex justify-content-center gap-2">
                    <Link to="/">메인으로 가기</Link>
                    <Link to="/user/login">로그인 하기</Link>
                </div>
            </div>
        </>
    );
};

export default SignUp;