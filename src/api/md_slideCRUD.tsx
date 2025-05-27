import supabase from '../config/supabaseApi'

export interface MDSlides {
    id: number
    title: string
    title_span?: string
    subtitle: string
    src: string
    alt: string
    link?: string
}

export async function getMDSlides(): Promise<MDSlides[]> {
    const { data, error } = await supabase
      .from('md_slides')
      .select('*')
      .order('id', { ascending: true })
  
    if (error) {
      console.error('에러 발생:', error)
      return []
    }
  
    return data as MDSlides[]
}