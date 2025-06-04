import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { loginRegister } from '../../../api/auth';
import { LoginForm } from '../../../types/user';

import hye from '../../../scss/hye.module.scss';
import el from '../../../scss/element.module.scss';


const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
    } = useForm<LoginForm>();

    const onValid = async(data: LoginForm) => {
        const result = await loginRegister(data.user_id, data.user_pw);

        if (!result.success) {
          alert(result.error || "로그인에 실패했습니다.");
          return;

        } else{
            alert("로그인 성공!");
        }
    };

    return (
        <section className="user_login">
            <div className="py-10 md:py-20">
                <div className='text-center font-700 mb-9 md:mb-20'>
                    <p className='text-semismall-text md:text-medium-text leading-[1.45]'>안녕하세요 여행자님,<br/>트립터와 함께 떠나볼까요?</p>
                </div>
                <form onSubmit={handleSubmit(onValid)} noValidate>
                    <fieldset className="fieldset1 mb-9 md:mb-[3.75rem]">
                        <input
                            type="text"
                            placeholder="아이디"
                            {...register("user_id", { required: "아이디를 입력하세요." })}
                            className={`${el.input_text} w-full md:text-semismall-text`}
                        />
                    </fieldset>
                    <fieldset className="fieldset2">
                        <input
                            type="password"
                            placeholder="비밀번호"
                            {...register("user_pw", { required: "비밀번호를 입력하세요." })}
                            className={`${el.input_text} w-full md:text-semismall-text`}
                        />
                    </fieldset>
                    <div className="findInfo flex justify-end pt-5">
                        <Link to="#none" className='text-trip-gray3 text-desc-text md:text-small-text'>아이디 / 비밀번호 찾기</Link>
                    </div>
                    <div className="flex flex-col gap-5 my-9 md:my-20">
                        <button type="submit" className={`${el.btn_squre} bg-trip-blue text-trip-white text-semismall md:text-medium-text font-700 `}id="submit_btn">로그인</button>
                        <Link to="/user/signUp" className={`${el.btn_squre} ${hye.border1px} text-trip-blue text-semismall md:text-medium-text`}>회원가입</Link>
                    </div>
                </form>
                <div className="sns_login">
                    <div className='pb-9 text-center md:text-medium-text'>SNS 간편 로그인</div>
                    <ul className="flex justify-center gap-4">
                        <li>
                            <Link className={`${hye.snslogin_item} bg-[#03c75a]`} to="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/">
                                <img src="https://d-hye.github.io/source/img/icon/naver.svg" alt="네이버 로그인" />
                            </Link>
                        </li>
                        <li>
                            <Link className={`${hye.snslogin_item} bg-[#fae100]`} to="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3D21037dbe-09a9-4ce9-ab52-668e3ce85ff9#login">
                                <img src="https://d-hye.github.io/source/img/icon/kakao.svg" alt="카카오 로그인" />
                            </Link>
                        </li>
                        <li>
                            <Link className={`${hye.snslogin_item} ${hye.border1px}`} to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25EA%25B5%25AC%25EA%25B8%2580%26oq%3D%25EA%25B5%25AC%25EA%25B8%2580%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBBzQyNGowajGoAgCwAgA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DF8nHZ6b2FeGPvr0P_eqByAo&ec=GAZAAQ&hl=ko&ifkv=ASSHykpb5b2-iZDmyWCclyinka_eSS3zaRNJoUFq_7PSfC5yQT0uBiOSFLzk5xAXPcoZIO_UnYan&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1677412365%3A1741146394235713&ddm=1">
                                <img src="https://d-hye.github.io/source/img/icon/google.svg" alt="구글 로그인" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Login;
