import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


interface LoginForm {
    userID: string;
    userPW: string;
}

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
    } = useForm<LoginForm>();

    const onValid = (data: LoginForm) => {
        console.log(data);
    };

    return (
        <section className="userLogin ">
            <div className="form_area container_m ">
                <h3>안녕하세요 여행자님, <span>트립터와 함께 떠나볼까요?</span></h3>
                <form onSubmit={handleSubmit(onValid)} noValidate>
                    <fieldset className="fieldset1">
                        <input
                            type="text"
                            placeholder="아이디"
                            {...register("userID", { required: "아이디를 입력하세요." })}
                        />
                    </fieldset>

                    <fieldset className="fieldset2">
                        <input
                            type="password"
                            placeholder="비밀번호"
                            {...register("userPW", { required: "비밀번호를 입력하세요." })}
                        />
                    </fieldset>
                    <div className="findInfo">
                        <a href="#none">아이디 / 비밀번호 찾기</a>
                    </div>
                    <div className="btn_wrap">
                        <button type="submit" className="submit_btn" id="submit_btn">로그인</button>
                        <Link to="/user/signUp">회원가입</Link>
                    </div>
                </form>
            </div>
            <div className="sns_login container_m">
                <h4>SNS 간편 로그인</h4>
                <ul className="d-flex">
                    <li id="naver">
                        <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/">
                            <img src="https://d-hye.github.io/source/img/logo/btn_naver.svg" alt="" />
                        </a>
                    </li>
                    <li id="kakao">
                        <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3D21037dbe-09a9-4ce9-ab52-668e3ce85ff9#login">
                            <img src="https://d-hye.github.io/source/img/logo/btn_kakao.svg" alt="" />
                        </a>
                    </li>
                    <li id="facebook">
                        <a href="https://www.facebook.com/?locale=ko_KR">
                            <img src="https://d-hye.github.io/source/img/logo/btn_facebook.svg" alt="" />
                        </a>
                    </li>
                    <li id="google">
                        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25EA%25B5%25AC%25EA%25B8%2580%26oq%3D%25EA%25B5%25AC%25EA%25B8%2580%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBBzQyNGowajGoAgCwAgA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DF8nHZ6b2FeGPvr0P_eqByAo&ec=GAZAAQ&hl=ko&ifkv=ASSHykpb5b2-iZDmyWCclyinka_eSS3zaRNJoUFq_7PSfC5yQT0uBiOSFLzk5xAXPcoZIO_UnYan&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1677412365%3A1741146394235713&ddm=1">
                            <img src="https://d-hye.github.io/source/img/logo/btn_google.svg" alt="" />
                        </a>
                    </li>
                    <li id="apple">
                        <a href="#none">
                            <img src="https://d-hye.github.io/source/img/logo/btn_apple.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Login;
