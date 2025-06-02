import supabase from '../config/supabaseApi';
import type { User } from '../types/user';

export const loginRegister = async (
    user_id: string,
    user_pw: string
  ): Promise<{ success: boolean; data?: User; error?: string }> => {
    const { data, error } = await supabase
      .from("user_info")
      .select("*")
      .eq("user_id", user_id)
      .eq("user_pw", user_pw)
      .limit(1);
  
    if (error) {
      console.error("로그인 실패:", error.message);
      return { success: false, error: error.message };
    }
  
    if (!data || data.length === 0) {
      return { success: false, error: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
  
    return { success: true, data:data[0] };
  };

export const registerUser = async (
  user: User
): Promise<{ success: boolean; error?: string }> => {
  const { error } = await supabase.from("user_info").insert([user]);

  if (error) {
    console.error("회원가입 실패:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
};

  
  