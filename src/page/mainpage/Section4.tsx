import React from "react";
import { Link } from 'react-router-dom';
import hye from '../../scss/hye.module.scss'


const Section4:React.FC = () => {

    return (
        <section className="section4 py-[3.75rem] md:pt-[6.5rem] md:pb-[5rem]">
            <h3 className="section_tit pb-[2.5rem] md:pb-[5rem] font-theJamsil-bold text-semismall-text md:text-mediumbig-text text-center">
                여행 혜택도 놓치지 마세요
            </h3>
            <div className="max-w-[90rem] mx-auto px-[0.625rem] md:px-5">
                    <ul className={`flex justify-between flex-col md:flex-row gap-8 md:gap-0 ${hye.adSection}`}>
                        <li className="">
                            <Link to="/tripterEvent/event2" className={`block ${hye.img_box}`}>
                                <img src="https://d-hye.github.io/source/img/banner/coupon_event.jpg" alt="트립터 후기 이벤트"/>
                            </Link>
                        </li>
                        <li className="">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s5YtOodFQZY?si=zqrrEUOKmJgJzv2E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ border: 'none' }}/>

                        </li>
                    </ul>
            </div>
        </section>
    );
};

export default Section4;