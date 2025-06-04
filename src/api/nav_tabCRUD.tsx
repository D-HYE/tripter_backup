import supabase from '../config/supabaseApi'

export interface NavTab {
  id: number
  tab_group: string
  tab_key: string
  tab_name: string
  link: string
  description: string
  section_name: string

}

export async function getNavTabs(): Promise<NavTab[]> {
    const { data, error } = await supabase
      .from('nav_tab')
      .select('*')
      .order('id', { ascending: true })
  
    if (error) {
      console.error('에러 발생:', error)
      return []
    }
  
    return data as NavTab[]
}