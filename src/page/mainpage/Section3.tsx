import React, { useState } from "react";
import { Link } from 'react-router-dom';
import hye from '../../scss/hye.module.scss'
import {TabData} from '../../types/common'

interface tabProps {
    tabData: TabData[];
}

const Section3:React.FC<tabProps> = ({tabData}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    if (!tabData) return <p>Loading...</p>;

    return (
        <section className="section3 py-[3.75rem] md:py-[7.5rem] bg-trip-yellow">
            <div className="max-w-[90rem] mx-auto px-[0.625rem] md:px-5">
                <h3 className="pb-10 md:pb-20 font-theJamsil-bold text-semismall-text md:text-mediumbig-text text-center">
                    지금 가장 인기있는 <span className="font-theJamsil-bold text-semismall-text md:text-mediumbig-text">여행지를 만나보세요</span>
                </h3>
                <ul className={`stab_menu ${hye.horizontalScroll} mb-4 md:mb-10 flex justify-start md:justify-center flex-nowrap md:flex-wrap gap-4 font-700 overflow-x-scroll md:overflow-x-visible`}>
                    {tabData.map((item, idx) => (
                        <li 
                            key={item.tabid} 
                            className={`shrink-0 text-trip-blue py-2 px-4 text-small md:text-semismall-text rounded-full cursor-pointer ${hye.border1px} ${activeIndex === idx ? `${hye.tabActive}` : ""}`}
                            onClick={() => setActiveIndex(idx)}
                        >
                            &#35;{item.tabnm}
                        </li>
                    ))}
                </ul>
                <ul className="tab_contents flex justify-between flex-wrap lg:flex-nowrap gap-4" id="tabContent">
                    {tabData[activeIndex].tablist.map(item => (
                        <li 
                            key={item.src} 
                            className={`${hye.tabDesc} w-[calc(50%-0.5rem)] lg:w-[23.077%] h-[56.25vw] md:h-[22.917vw] flex items-end rounded-2xl overflow-hidden cursor-pointer`}
                            style={{ backgroundImage: `url("${item.src}")` }}
                        >
                            <Link to={item.link} className="flex items-center justify-center flex-col h-[3.75rem] lg:h-[6.25rem] w-full p-4 text-trip-white bg-black/50">
                                <b>{item.title}</b>
                                <span className="leading-[1.45] text-desc-text md:text-small-text">{item.desc}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Section3;