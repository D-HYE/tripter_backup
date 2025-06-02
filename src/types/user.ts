export interface User {
    user_id: string;
    user_pw: string;
    user_name: string;
    user_phone: string;
    user_email: string;
    user_nickname: string;
    marketing_agree: boolean;
    location_agree: boolean;
}

export type LoginForm = Pick<User, 'user_id' | 'user_pw'>;