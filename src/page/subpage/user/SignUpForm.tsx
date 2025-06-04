import React, {useState, useEffect} from 'react';
import {useFormContext} from 'react-hook-form';
//import type { User } from '../../../types/user';

import el from '../../../scss/element.module.scss'
import hye from '../../../scss/hye.module.scss'

type Steptype = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  agreements: {
    agree1: boolean;
    agree2: boolean;
    agree3: boolean;
    privacy_agree: boolean;
    location_agree: boolean;
  };
  setAgreements: React.Dispatch<React.SetStateAction<{
    agree1: boolean;
    agree2: boolean;
    agree3: boolean;
    privacy_agree: boolean;
    location_agree: boolean;
  }>>;
};

type Step2Props = {
  agreements: {
    agree1: boolean;
    agree2: boolean;
    agree3: boolean;
    privacy_agree: boolean;
    location_agree: boolean;
  };
};

const Step1:React.FC<Steptype> = ({step, setStep,  agreements, setAgreements}) => {
 

  const allAgreed = Object.values(agreements).every(Boolean);

  const handleSingleChange = (field: keyof typeof agreements) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreements((prev) => ({
      ...prev,
      [field]: e.target.checked,
    }));
  };

  const handleAgreeAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAgreements({
      agree1: checked,
      agree2: checked,
      agree3: checked,
      privacy_agree: checked,
      location_agree: checked,
    });
  };

  const handleNext = () => {
    const { agree1, agree2, agree3 } = agreements;
    if (agree1 && agree2 && agree3) {
      setStep(2);
      console.log(agreements);
    } else {
      alert("필수 항목을 모두 체크해주세요.");
    }
  };

  
    return (
      <div className={`signup_step${step}`}>
        <div className="all_agree">
          <label className={el.checkbox}>
              <input type="checkbox" checked={allAgreed} onChange={handleAgreeAllChange}/>
              <span>약관 전체 동의</span>
          </label>
        </div>
        <div className="agree_list">
            <div className="require_checkbox">
                <div className=''>필수 동의 항목</div>
                <fieldset className="fieldset1">
                    <label className={el.checkbox}>
                        <input type="checkbox"
                        checked={agreements.agree1}
                        onChange={handleSingleChange("agree1")} />
                        <span className="text-blue">[필수] 이용약관 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus.</p>
                        </div>
                    </label>
                </fieldset>
                <fieldset className="fieldset2">
                    <label className={el.checkbox}>
                        <input type="checkbox" 
                        checked={agreements.agree2}
                        onChange={handleSingleChange("agree2")}  />
                        <span className="text-blue">[필수] 전자 금융 거래 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam.</p>
                        </div>
                    </label>
                </fieldset>
                <fieldset className="fieldset3">
                    <label className={el.checkbox}>
                        <input type="checkbox"
                        checked={agreements.agree3}
                        onChange={handleSingleChange("agree3")} />
                        <span className="text-blue">[필수] 개인정보 수집동의서 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus.</p>
                        </div>
                    </label>
                </fieldset>
            </div>
            <div className="option_checkbox">
                <div className=''>선택 동의 항목</div>
                <fieldset className="fieldset4">
                    <label className={el.checkbox}>
                        <input type="checkbox"checked={agreements.privacy_agree}
                onChange={handleSingleChange("privacy_agree")} />
                        <span className="text-blue">[선택] 개인정보 수집 동의서 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam.</p>
                        </div>
                    </label>
                </fieldset>
                <fieldset className="fieldset4">
                    <label className={el.checkbox}>
                        <input type="checkbox" checked={agreements.privacy_agree}
                onChange={handleSingleChange("privacy_agree")} />
                        <span className="text-blue">[선택] 위치기반 서비스 이용약관 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam.</p>
                        </div>
                    </label>
                </fieldset>
            </div>
        </div>
        <div className="button_area">
                               
                 <button  onClick={handleNext} className={`${el.btn_squre} w-full bg-trip-gray1 font-theJamsil-medium sm:text-medium-text`} >다음</button>
                             
                            </div>
      </div>
      
    );
};

export const Step2:React.FC<Step2Props> = ({agreements}) => {
  //touchedFields
  
      const {
        register,
        watch,
        setValue,
        formState: { errors },
      } = useFormContext();

      const phone1 = watch("phone1");
      const phone2 = watch("phone2");
      const phone3 = watch("phone3");

      useEffect(() => {
        if (phone1 && phone2 && phone3) {
          setValue("user_phone", `${phone1}-${phone2}-${phone3}`);
        }
      }, [phone1, phone2, phone3, setValue]);

      
  
      return (
        <div className={`signup_step2`}>
          <ul className="mb-6 text-sm text-gray-700 list-disc list-inside">
            {Object.entries(agreements).map(([key, value]) => (
              <li key={key}>{key}: {value ? "동의함" : "동의 안 함"}</li>
            ))}
          </ul>
        
            <fieldset className="fieldset1">
                <label className="fieldset_tit">아이디</label>
                <input className={`block ${el.input_text}`}
                    type="text"
                    placeholder="6~20자 영문, 숫자"
                    {...register("user_id", {
                        required: "아이디는 필수입니다",
                        minLength: {
                          value: 5,
                          message: "영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.",
                        },
                        maxLength: {
                          value: 20,
                          message: "영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.",
                        },
                    })}
                />
                {errors.user_id && typeof errors.user_id.message === "string" && (
                    <p className="error_message">{errors.user_id.message}</p>
                  )}
            </fieldset>
            <fieldset className="fieldset2">
                <label className="fieldset_tit">비밀번호</label>
                <input className={`block ${el.input_text}`}
                    type="password"
                    placeholder="8~32자의 영문, 숫자 포함"
                    {...register("user_pw", {
                        required: "비밀번호는 필수입니다",
                        pattern: {
                            value: /(?=.*\d)(?=.*[a-z]).{8,32}/,
                            message: "비밀번호는 소문자, 숫자를 포함해야 합니다",
                        },
                    })}
                />
                {errors.user_pw && typeof errors.user_pw.message === "string"  && (
                  <p className="error_message">{errors.user_pw.message}</p>
                )}
            </fieldset>
            <fieldset className="fieldset2">
                <label className="fieldset_tit">비밀번호 확인</label>
                <input className={`block ${el.input_text}`}
                    type="password"
                    placeholder="비밀번호 재입력"
                    {...register("confirm_pw", {
                        required: "비밀번호 확인은 필수입니다",
                        validate: (val) => val === watch("user_pw") || "비밀번호가 일치하지 않습니다",
                    })}
                />
                {errors.confirm_pw && typeof errors.confirm_pw.message === "string"  && (
                  <p className="error_message">{errors.confirm_pw.message}</p>
                )}
            </fieldset>
            {/* <fieldset className="fieldset3">
                <label className="fieldset_tit">이름</label>
                <input className={`block ${el.input_text}`} type="text" {...register("user_name", { required: "이름을 입력하세요" })} />
                {touchedFields.user_id && errors.user_id && (
                  <p className="error_message">{errors.user_name.message}</p>
                )}
            </fieldset>
            <fieldset className="fieldset4">
                <label className="fieldset_tit">전화번호</label>
                <div className="flex items-center">
                    <input className={`${el.input_text}`} type="tel" maxLength="3" placeholder="010" {...register("phone1", { required: true })} />
                    <span>-</span>
                    <input className={`${el.input_text}`} type="tel" maxLength="4" placeholder="1234" {...register("phone2", { required: true })} />
                    <span>-</span>
                    <input className={`${el.input_text}`} type="tel" maxLength="4" placeholder="5678" {...register("phone3", { required: true })} />
                    <input type="hidden" {...register("user_phone")} />
                    <button className={`${el.btn_squre}`}>인증하기</button>
                </div>
            </fieldset>
            <fieldset className="fieldset5">
                <label className="fieldset_tit">이메일</label>
                <div className="flex align-items-center">
                    <input className={`${el.input_text}`} type="email" placeholder="example@email.com" {...register("user_email", { required: true })} />
                    <button className={`${el.btn_squre}`}>인증하기</button>
                </div>
            </fieldset>
            <fieldset className="fieldset6">
                <label className="fieldset_tit">닉네임</label>
                <input className={`block ${el.input_text}`} type="text" {...register("user_nickname", { required: true })} />
            </fieldset> 
            <fieldset className="fieldset7">
                <label className={el.checkbox}>
                    <input type="checkbox" {...register("marketing_agree")} />
                    <span className="text-blue">SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
                </label>
            </fieldset>*/}
            <fieldset className="fieldset8">
                <label className={el.checkbox}>
                    <input type="checkbox" />
                    <span className="text-blue">14세 미만입니다.</span>
                </label>
            </fieldset>

          
      </div>
      );
};

export const Step3:React.FC = () => {
    //const { register, formState: { errors } } = useFormContext();
    return (
      <div className='signup_result'>
          <div className={`${hye.img_box} max-w-[220px] sm:max-w-[451px] mx-auto`}>
              <img src="https://trip-ter.vercel.app/img/illustrator/airplane.png" alt="가입을 축하합니다!"/>
          </div>
          <h3 className="my-8 md:my-[3.75rem] text-trip-blue text-center font-theJamsil-medium text-semibig-text sm:text-big-text">님의 가입을 축하합니다!</h3>
          <p className='text-center text-semismall sm:text-semibig-text'>그럼 트립터와 함께 떠나볼까요?</p>
      </div>
    );
};

export default Step1;