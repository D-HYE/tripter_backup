import supabase from '../config/supabaseApi';
import type { Post, postUser } from '../types/post';


export const fetchPostData = async (tableName: string): Promise<Post[] | undefined> => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select(`
        *,
        user_info:user_num(
          user_id,
          user_nickname
        )
      `);

    if (error) throw error;
    if (!data) return;

    const rawData = data as (Post & { user_info?: postUser })[];

    const posts: Post[] = rawData.map( item => ({
      post_id: item.post_id,
      post_tit: item.post_tit,
      trip_spot: item.trip_spot,
      trip_date: item.trip_date,
      post_cont: item.post_cont,
      src: item.src ?? undefined,
      alt: item.alt ?? undefined,
      posted_at: item.posted_at,
      rate: item.rate ?? undefined,
      likes: item.likes ?? undefined,
      views: item.views,
      comments: item.comments ?? undefined,
      user_num: item.user_num,
      postUser: item.user_info
        ? {
            user_id: item.user_info.user_id,
            user_nickname: item.user_info.user_nickname,
          }
        : undefined
    }));

    return posts;
  } catch (err) {
    console.error('Error fetching post data:', err);
  }
};
