import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import Step1, { Step2 } from './SignUpForm';

import type { User } from '../../../types/user';

import el from '../../../scss/element.module.scss'




const SignUp:React.FC = () => {
    const [step, setStep] = useState(1); // 컴포넌트 노출 변수 1, 2, 3
    const [agreements, setAgreements] = useState({
        agree1: false,
        agree2: false,
        agree3: false,
        privacy_agree: false,
        location_agree: false,
      });
    
    
    const methods = useForm<User>();

   
    const onSubmit = (data: User) => {
        console.log("Form Data:", data);
        setStep(3); 
      };


    return (
        <section className="user_signup">

            <div className="py-12 sm:py-10">
                <div className="step_tag">
                    <ul className={`flex justify-center gap-4 ${step === 3 && 'hidden'}  text-trip-white`}>
                        <li className={`py-6 pl-14 pr-8 rounded-l-full font-theJamsil-regular ${step === 1 ? 'bg-trip-skyblue text-trip-blue' : 'bg-trip-gray1'}`}>약관동의</li>
                        <li className={`py-6 pr-14 pl-8 rounded-r-full font-theJamsil-regular ${step === 2 ? 'bg-trip-skyblue text-trip-blue' : 'bg-trip-gray1'}`}>정보입력</li>
                    </ul>
                </div>
                {step === 1 && <Step1 step={step} setStep={setStep} agreements={agreements}
            setAgreements={setAgreements} />}
                {step === 2 && (
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Step2 agreements={agreements} />
                        <button type='submit' className={`${el.btn_squre} w-full bg-trip-gray1 font-theJamsil-medium sm:text-medium-text`}>가입하기</button>
                        </form>
                    </FormProvider>
                )}
                {/*  {step === 3 && submittedData && <Step3 user={submittedData} />}
                
                <div className="button_area">
                    {step  === 1 && (
                        <button  onClick={()=>{ setStep(2) }} className={`${el.btn_squre} w-full bg-trip-gray1 font-theJamsil-medium sm:text-medium-text`} >다음</button>
                    )}
                    {step === 2 && (
                        <button onClick={()=>{ setStep(3) }} className={`${el.btn_squre} w-full bg-trip-gray1 font-theJamsil-medium sm:text-medium-text`}>가입하기</button>
                    )}
                    {step === 3 && (
                        <div className="button_wrap mt-8 sm:mt-[3.75rem] mb-10 flex justify-center gap-4 sm:gap-6">
                            <Link to='/' className={`${el.btn_squre} ${el.btn_blue} w-[7.5rem] sm:w-[15rem] sm:text-mediumbig-text`} >메인으로 가기</Link>
                            <Link to='/user/login' className={`${el.btn_squre} ${el.btn_blue} w-[7.5rem] sm:w-[15rem] sm:text-mediumbig-text`} >로그인 하기</Link>
                        </div>
                    )}
                </div> */}
            </div>
        
        </section>
    );
};

export default SignUp;