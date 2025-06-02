import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { User } from '../../../types/user';

import { registerUser } from '../../../api/auth';

const SignUpForm:React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<User>({
        mode: 'onBlur', // 포커스 아웃 시 유효성 검사
      });
    
      const onSubmit = async (data: User) => {
        const result = await registerUser(data);
    
        if (!result.success) {
          alert(result.error || "회원가입에 실패했습니다.");
          return;
        } else {
          alert("회원가입 성공!");
          setIsSubmitting(true)
          // 회원가입 성공 후 추가 작업 (예: 로그인 페이지로 리다이렉트 등)
        }
      };

      
    return (

        <div>
            {
                isSubmitting ? (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <input
                      type="text"
                      placeholder="아이디"
                      {...register('user_id', { required: '아이디는 필수입니다' })}
                    />
                    {errors.user_id && <p>{errors.user_id.message}</p>}
              
                    <input
                      type="password"
                      placeholder="비밀번호"
                      {...register('user_pw', { required: '비밀번호는 필수입니다' })}
                    />
                    {errors.user_pw && <p>{errors.user_pw.message}</p>}
              
                    <input
                      type="text"
                      placeholder="이름"
                      {...register('user_name', { required: '이름은 필수입니다' })}
                    />
                    {errors.user_name && <p>{errors.user_name.message}</p>}
              
                    <input
                      type="tel"
                      placeholder="전화번호"
                      {...register('user_phone', { required: '전화번호는 필수입니다' })}
                    />
                    {errors.user_phone && <p>{errors.user_phone.message}</p>}
              
                    <input
                      type="email"
                      placeholder="이메일"
                      {...register('user_email', { required: '이메일은 필수입니다' })}
                    />
                    {errors.user_email && <p>{errors.user_email.message}</p>}
              
                    <input
                      type="text"
                      placeholder="닉네임"
                      {...register('user_nickname', { required: '닉네임은 필수입니다' })}
                    />
                    {errors.user_nickname && <p>{errors.user_nickname.message}</p>}
              
                    <label>
                      <input type="checkbox" {...register('marketing_agree', { required: true })} />
                      마케팅 수신 동의 (필수)
                    </label>
                    {errors.marketing_agree && <p>마케팅 수신에 동의해주세요</p>}
              
                    <label>
                      <input type="checkbox" {...register('location_agree', { required: true })} />
                      위치정보 수집 동의 (필수)
                    </label>
                    {errors.location_agree && <p>위치정보 수집에 동의해주세요</p>}
              
                    <button type="submit">회원가입</button>
                  </form>

                ) : (

                    <p>축하메세지</p>

                )
            }
        
        </div>
    );
};

export default SignUpForm;