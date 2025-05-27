import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getNavTabs, NavTab } from '../../api/nav_tabCRUD'


interface LayoutProps {
  children: React.ReactNode;
  id: string;
}


function SubLayout( { children, id }: LayoutProps ) {
    const { tab } = useParams();

    const [tabs, setNavTab] = useState<NavTab[]>([])
    
      useEffect(() => {
        async function fetchTabs() {
            const data = await getNavTabs()
            setNavTab(data)
            console.log(data)
        }
        fetchTabs()
    }, [])
    

    return (
        <main className="subMain page_plan md:pt-[5rem]">  
            <section className={`Section bg-bg-gray`}>
                <div className="sectionBanner h-[15.375rem] hidden md:block">
                    <div className="flex justify-center items-center flex-col text-center text-trip-blue">
                        <h3 className="font-[TheJamsil500] text-huge-text">{tabs.find((item) => item.tab_key === tab)?.tab_name || '트립터'}</h3>
                        <p className="font-[TheJamsil500] text-medium-text">{tabs.find((item) => item.tab_key === tab)?.description || '트립터에서 더 다양한 혜택을 즐겨보세요'}</p>
                    </div>
                </div>
                <div className="subContWrap flex justify-center max-w-[64rem]">
                    <div className="sectionList bg-trip-white drop-shadow-[var(--dropShadow)]">
                        <ul className="flex flex-col gap-[1.625rem]">
                            {tabs
                                .filter((item) => item.tab_group === id)
                                .map((item) => (
                                    <li key={item.id} data-id={item.id} className={`text-[1.125rem] font-[TheJamsil500] ${item.tab_key} ${item.tab_key === tab ? 'active' : ''}`}>
                                        <Link to={`/${item.tab_group}/${item.tab_key}`}>{item.tab_name}</Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="sectionCont bg-trip-white drop-shadow-[var(--dropShadow)]">
                        {children}
                    </div>
                </div>
            </section>  
        </main>

    );
}

export default SubLayout;