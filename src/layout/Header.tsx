import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import hyo from "../scss/hyo.header.module.scss"
import SlideMenu from "./sub/SlideMenu"; 

const Header: React.FC<{ id: string }> = ({ id }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 40) {
    setIsScrolled(true);
    } else {
    setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);
  
  //고객지원
  const toggleDropdown =() =>{
    setIsDropdown(prev => !prev)
  }
  useEffect(()=>{
    setIsDropdown(false)
  },[location]);

  useEffect(()=>{
    setIsMenuOpen(false)
  },[location])

  return (
    <header id={id} className={isScrolled ? hyo.scrolled : ""}>
      <div className="header_inner">
        <div className={`bg-trip-blue pc w-100`}>
          <div className="py-4 max-w-container mx-auto flex justify-end h-10">
            <ul className="flex gap-6 items-center">
              <li className="flex">
                <Link to="/user" className="text-white text-m-small-text">
                  로그인/회원가입
                </Link>
              </li>
              <li className={`relative`} onClick={toggleDropdown}>
                <span className="text-white flex text-m-small-text gap-2 cursor-pointer">
                  고객지원
                  <img
                    src="https://d-hye.github.io/source/img/icon/polygon-1.svg"
                    alt="더보기"
                  />
                </span>
                <ul className={`${hyo.hide_menu} ${isDropdown ? "" : "hidden"} w-20 h-20 absolute bg-white top-5 left-[-0.9375rem] z-[200] shadow-[0_0.125rem_0.4375rem_rgba(0,0,0,0.5)]`} >
                  <li className={`mt-[0.4rem] flex justify-center`}>
                    <Link to="/service/guide">이용가이드</Link>
                  </li>
                  <li className={`mt-[0.4rem] flex justify-center`}>
                    <Link to="/service/faq">FAQ</Link>
                  </li>
                  <li className={`mt-[0.4rem] flex justify-center`}>
                    <Link to="/service/ask">문의게시판</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${hyo.gnbbox} fixed top-[2.5rem] left-0 right-0 z-[100] bg-white w-full border-b border-b-trip-gray2 transition-[height] duration-300`}>
          <div className={`${hyo.gnb} max-w-[90rem] mx-auto flex justify-between items-center cursor-pointer h-20`}
          >
            <h1 className={`${hyo.logo} order-2 mx-auto`}>
              <Link to="/">
                <img className={`h-[3.375rem] transition-opacity duration-500 ease-in-out`}
                  src="https://d-hye.github.io/source/img/logo/logo_TRT_basic.svg"
                  alt="트립터"
                />
                <span className="hidden">트립터</span>
              </Link>
            </h1>
            <div className="mr-[1.25rem] cursor-pointer relative z-[1000]">
              {/* 전체메뉴 트리거 */}
              <div className={` ${hyo.hb_icon}`} onClick={()=>{ 
                setIsMenuOpen(true)
              }}>
                <img
                  src="https://d-hye.github.io/source/img/icon/menu-all.svg"
                  alt="전체메뉴"
                />
              </div>
            </div>

            <ul className={`${hyo.menu} flex gap-6 order-1 pc`}>
              <li>
                <Link
                  to="/tripRoute/myFeelter"
                  className={isScrolled ? hyo.scrolled : ""}
                >
                  계획짜기
                </Link>
              </li>
              <li>
                <Link
                  to="/tripTalk/findPlan"
                  className={isScrolled ? hyo.scrolled : ""}
                >
                  트립톡
                </Link>
              </li>
              <li>
                <Link
                  to="/tripterEvent"
                  className={isScrolled ? hyo.scrolled : ""}
                >
                  이벤트
                </Link>
              </li>
            </ul>
            <ul className="icon flex items-center order-3">
              <li className={hyo.search}>
                <form action="/" className="flex items-center gap-[0.2rem]">
                  <input
                    type="text"
                    className={`${isScrolled ? hyo.scrolled : ""} pc rounded-l-[0.75rem] rounded-r-[0.3125rem] border-[2px] border-trip-blue outline-none px-4`}
                    name="search"
                    placeholder="눈의 나라 훗카이도로~!"
                  />
                  <input
                    type="image"
                    className="search-icon py-0"
                    src="https://d-hye.github.io/source/img/icon/search-02.svg"
                    alt="검색"
                  />
                </form>
              </li>
              <li>
                <button className="ml-4 mb-[-0.125rem] p-0">
                  <Link to="/">
                    <img
                      src="https://d-hye.github.io/source/img/icon/travel_bl.svg"
                      alt="찜"
                    />
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <div className={`${hyo.mb_searchbox} hidden mb`}>
            <form
              action="/"
              className="mb_search flex items-center justify-end"
            >
              <input
                type="text"
                className="mb_searchbar"
                name="search"
                placeholder="눈의 나라 훗카이도로~!"
              />
              <input
                type="image"
                className="mb_searchicon"
                src="https://d-hye.github.io/source/img/icon/search-01.svg"
                alt="검색"
              />
            </form>
          </div>
        </div>
      </div>
     
      <SlideMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}   ></SlideMenu>
     
      
    </header>
  );
};

export default Header;