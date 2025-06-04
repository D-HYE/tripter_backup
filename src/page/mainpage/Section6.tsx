import React from "react";
import { Link } from 'react-router-dom';
import hye from '../../scss/hye.module.scss'


const Section6:React.FC = () => {

    return (
        <section className="section6 bg-[url('https://d-hye.github.io/source/img/main_img/bgimg1.jpg')] bg-no-repeat bg-[right_center] bg-cover">
            <div className="h-[18.75rem] md:h-[27.5rem] flex gap-8 flex-col-reverse md:flex-row items-center justify-center">
                <div className="qrimg">
                    <div className="w-[7.5rem] h-[7.5rem] hidden md:block bg-trip-black"></div>
                    <Link to="#none" className={`block p-2 md:p-0 mt-5 text-center font-theJamsil-thin text-white ${hye.qrLink}`}>앱 다운로드</Link>
                </div>
                <div className="txt_box">
                    <h3 className="mb-4 text-trip-white font-theJamsil-medium text-semibig-text leading-[1.45] md:leading-[1]">나보다 나를 더 잘 아는 <span className="block md:inline font-theJamsil-medium text-semibig-text">최고의 여행 메이트</span></h3>
                    <div className="logo w-[7.5rem] md:w-[13.5rem]">
                        <img src="https://d-hye.github.io/source/img/logo/logo_TRT_wh.svg" alt="트립:터"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;