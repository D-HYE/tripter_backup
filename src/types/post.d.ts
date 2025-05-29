export interface UserInfo {
    user_num: number;
    user_id: string;
    user_pw: string;
    user_name: string;
    user_nickname: string;
    user_phone: string;
    user_email: string;
    marketing_agree: boolean;
    location_agree: boolean;
    created_at: string; // ISO 8601 형식 문자열 (예: "2024-06-01T12:00:00.000Z")
}
  

export interface postUser {
    user_id: string;
    user_nickname: string;
}

export interface Post {
    post_id: number;
    post_tit: string;
    trip_spot?: string;
    trip_date?: string; // Supabase는 ISO string으로 내려줌
    post_cont: string;
    src?: string;
    alt?: string;
    posted_at: string;
    rate?: number;
    likes?: number;
    views: number;
    comments?: number;
    user_num: number;
    postUser?: postUser;
}