export interface UserInfo {
    userID: string;
    userNickname: string;
}
  
export interface Post {
    postID: number;
    postTit: string;
    tripSpot: string;
    tripDate: string; // Supabase는 ISO string으로 내려줌
    postCont: string;
    userNum: number;
    postedAt: string;
    views: number;
    userInfo?: UserInfo;
}