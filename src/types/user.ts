export interface User {
    user_id: string;
    user_pw: string;
    user_name: string;
    user_phone: string;
    user_email: string;
    user_nickname: string;
    marketing_agree: boolean;
    location_agree: boolean;
    privacy_agree: boolean;
    
    agree1?: boolean;
    agree2?: boolean;
    agree3?: boolean;
    confirm_pw?: string;
    phone1?: string;
    phone2?: string;
    phone3?: string;
}

export type LoginForm = Pick<User, 'user_id' | 'user_pw'>;
export type SignupForm = Omit<User, "confirm_pw" | "agree1" | "agree2" | "agree3">;