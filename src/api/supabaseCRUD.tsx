import supabase from '../config/supabaseApi'

export interface MainBanner {
  id?: number
  title: string
  english: string
  subtitle: string
  src: string
  alt?: string
  link?: string
}

/** 전체 목록 조회 (Read) */
export async function getMainBanners(): Promise<MainBanner[]> {
  const { data, error } = await supabase
    .from('main_banner')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('에러 발생:', error)
    return []
  }

  return data as MainBanner[]
}

/** 새 슬라이드 추가 (Create) */
export async function addMainBanner(slide: Omit<MainBanner, 'id'>): Promise<MainBanner[] | null> {
  const { data, error } = await supabase
    .from('main_banner')
    .insert([slide])

  if (error) {
    console.error('슬라이드 추가 실패:', error)
    return null
  }

  return data as MainBanner[]
}

/** 슬라이드 수정 (Update) */
export async function updateMainBanner(id: number, updates: Partial<Omit<MainBanner, 'id'>>): Promise<MainBanner[] | null> {
  const { data, error } = await supabase
    .from('main_banner')
    .update(updates)
    .eq('id', id)

  if (error) {
    console.error('슬라이드 수정 실패:', error)
    return null
  }

  return data as MainBanner[]
}

/** 슬라이드 삭제 (Delete) */
export async function deleteMainBanner(id: number): Promise<MainBanner[] | null> {
  const { data, error } = await supabase
    .from('main_banner')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('슬라이드 삭제 실패:', error)
    return null
  }

  return data as MainBanner[]
}
