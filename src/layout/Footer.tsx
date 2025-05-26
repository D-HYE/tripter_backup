import React from 'react';
import { Link } from "react-router-dom";
import ekcss from "../scss/ek.footer.module.scss";
interface FooterProps<T = Record<string, unknown>> {
    footerVariant: string;
    additionalProps?: T;
}

const Footer: React.FC<FooterProps<Record<string, unknown>>> = ({ footerVariant}) => {
    const footerConfig = footerVariant !== "basic" 
        ? { footerClass: ekcss.blFooter, imgSrc: "https://d-hye.github.io/source/img/logo/logo_TRT_wh.svg" }
        : { footerClass: ekcss.subFooter, imgSrc: "https://d-hye.github.io/source/img/logo/logo_TRT_basic.svg" };

    const { footerClass, imgSrc } = footerConfig;

    return (
        <div className={`footerArea ${footerClass}`}>
            <footer className={` xl:pt-[2.5rem] xl:pb-[3.75rem] px-0`}>
                <div className="px-[16px] xl:px-[32px] xl:mx-auto container xl:flex justify-between xl:items-end">
                <div className="flex flex-row items-center gap-[1rem] xl:block">
                    <div className={`${ekcss.imgbox} h-[3.6rem] h-[60px] flex mb-[14px] `}>
                        <img src={imgSrc} alt="trip:ter" className=""/>
                    </div>
                    {/*768이하 앱다운 버튼*/} 
                    <div className={`${ekcss.download_btn} block xl:hidden ml-[1rem]`}>
                        <Link to="#" className="px-[1rem] py-[10px]">트립터 앱 다운로드</Link>
                    </div>
                </div>

                    <div className={ekcss.footer_menu}>
                        <ul className="xl:gap-[2.5rem] gap-[1rem] flex xl:flex-row xl:py-[0.625rem] xl:px-[0]">
                            <li><Link to="#none">회사소개</Link></li>
                            <li><Link to="#none">사업자정보</Link></li>
                            <li><Link to="#none">이용약관</Link></li>
                            <li><Link to="#none">개인정보 처리방침</Link></li>
                            <li><Link to="#none">제휴 / 광고 문의</Link></li>
                        </ul>
                        <div>
                            <div className={`${ekcss.company_info} flex `}>
                                <i>(주)트립터</i>
                                <i><span>대표자</span> 신은경</i>
                                <i><span>고객센터</span> 0000-0000</i>
                                <i><span>주소</span> 서울특별시 구로구 구로5동 3-25 602호</i>
                                <i><span>메일</span> help@tripter.com</i>
                            </div>
                            <div className={`${ekcss.company_id} flex`}>
                                <i><span>사업자등록번호</span> 0000000-0000</i>
                                <i><span>통신판매입신고번호</span> 제0000-서울00-0000호</i>
                                <i><span>관광사업자등록번호</span> 제0000-000000호</i>
                                <i>© 2025 Trip:ter, Inc</i>
                            </div>
                        </div>
                    </div>
                    
                    {/*pc사이즈 버튼*/}
                    <div className={`${ekcss.download_btn} a hidden xl:block mb-[1rem]`}>
                        <Link to="#" className="xl:px-[24px] xl:py-[1rem] px-[10px] py-[10px]">트립터 앱 다운로드</Link>
                    </div>
                </div>    
        
            </footer>
        </div>
    );
};

export default Footer;