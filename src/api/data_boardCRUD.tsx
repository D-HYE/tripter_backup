import supabase from '../config/supabaseApi'
import {Post} from '../types/post'

export const fetchPostData = async (tableName: string): Promise<Post[] | undefined> => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select();

    if (error) throw error;
    return data as Post[];
  } catch (err) {
    console.error('Error fetching post data:', err);
  }
};