import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getNavTabs, NavTab } from '../../api/nav_tabCRUD'


interface LayoutProps {
  children: React.ReactNode;
  id: string;
  tab: string;
}


function SubLayout( { children, id, tab }: LayoutProps ) {

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
        <main className="subMain md:pt-[5rem]">  
            <div className={`bg-bg-gray ${id}`}>
                <div className="sectionBanner hidden md:block">
                    <div className="h-[15.375rem] flex justify-center items-center flex-col text-center text-trip-blue">
                        <h3 className="font-[TheJamsil500] text-huge-text">{tabs.find((item) => item.tab_key === tab)?.tab_name || '트립터'}</h3>
                        <p className="font-[TheJamsil500] text-medium-text">{tabs.find((item) => item.tab_key === tab)?.description || '트립터에서 더 다양한 혜택을 즐겨보세요'}</p>
                    </div>
                </div>
                <div className="subContWrap flex justify-center flex-col lg:flex-row gap-[1.625rem] max-w-[64rem] mx-auto py-0 lg:py-[2.5rem]">
                    <div className="sectionList bg-trip-white py-[1.25rem] px-[0.625rem] lg:py-20 lg:px-5 drop-shadow-[var(--dropShadow)]">
                        <ul className="flex justify-center lg:justify-start flex-row lg:flex-col gap-[1.625rem]">
                            {tabs
                                .filter((item) => item.tab_group === id)
                                .map((item) => (
                                    <li key={item.id} data-id={item.id} className={`${item.tab_key} ${item.tab_key === tab ? 'active' : ''}`}>
                                        <Link to={`${item.link}`}
                                        className='flex items-center text-semismall-text md:text-medium-text font-[TheJamsil500]'
                                        >{item.tab_name}<span></span></Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="sectionCont px-2 bg-trip-white drop-shadow-[var(--dropShadow)]">
                        {children}
                    </div>
                </div>
            </div>  
        </main>

    );
}

export default SubLayout;