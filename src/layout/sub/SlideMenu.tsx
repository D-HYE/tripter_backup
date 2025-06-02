import React from 'react';
import { Link } from 'react-router-dom';
import hyo from '../../scss/hyo.slidemenu.module.scss'





interface SlideMenuProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  

  return (
    <div className={`${hyo.hb_submenu} ${isMenuOpen ? hyo.open : ''} flex flex-col inset-0 bg-trip-white max-w-[15.625rem] xs:max-w-[25rem] fixed z-[999]`}>
      <div className={`flex flex-col flex-grow h-full relative bg-trip-white font-semismall-text`}>
        <div className="flex justify-end min-h-[40px] xs:h-auto">
          <button className="p-0 mx-4 xs:p-4" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://d-hye.github.io/source/img/icon/x-01.svg"
              className="block w-[13px] h-[13px] xs:w-6 xs:h-6"
              alt="닫기"
            />
          </button>
        </div>

        {/* 로그인 전 */}
        <div className="hidden border-t border-b border-[#ccc]">
          <div className="m-6">
            <span>로그인/회원가입</span>
          </div>
          <ul className="social_icon flex justify-center gap-6">
            <li className={`my-4`}>
              <a className="bg-[#03c75a] flex justify-center items-center w-12 h-12 rounded-full" href="/">
                <img
                  src="https://d-hye.github.io/source/img/icon/naver.svg"
                  alt="naver"
                />
              </a>
            </li>
            <li className={`my-4`}>
              <a className="bg-[#fae100] flex justify-center items-center w-12 h-12 rounded-full" href="/">
                <img
                  src="https://d-hye.github.io/source/img/icon/kakao.svg"
                  alt="kakao"
                />
              </a>
            </li>
            <li className={`my-4`}>
              <a className="border-[#0051d3] flex justify-center items-center w-12 h-12 rounded-full" href="/">
                <img
                  src="https://d-hye.github.io/source/img/icon/google.svg"
                  alt="google"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* 로그인 후 */}
        <div className={`border-t border-b border-gray-300`}>
          <div className="bg-[#FFDA00] bg-opacity-25 flex items-end flex justify-between px-4 py-[8px] xs:px-9 xs:py-4">
            <div className='flex items-center gap-4 xs:gap-6'>
              <div className="bg-trip-skyblue rounded-full w-12 h-12 flex justify-center items-center">
                <img
                  src="https://d-hye.github.io/source/img/icon/user-profile-02.svg"
                  className="d-block"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="leading-none">
                  <span className='text-[12px] xs:text-small-text'>안녕하세요!</span>
                </div>
                <div className='text-[12px] xs:text-small-text'>
                  트립터<span className="text-desc-text xs:text-semismall-text">###</span>님
                </div>
              </div>
            </div>
            <a className="settings" href="/">
              <img
                className="d-block"
                src="https://d-hye.github.io/source/img/icon/settings.svg"
                alt="설정"
              />
            </a>
          </div>
          <ul className={`${hyo.menu_icon} flex justify-between bg-trip-white px-4 py-[8px] xs:px-9 xs:py-4`}>
            <li>
              <Link to="/user" className="heart flex flex-col justify-center items-center">
                <img
                  src="https://d-hye.github.io/source/img/icon/heart_02.svg"
                  className="d-block m-2.5"
                  alt="내찜"
                />
                <span className='text-[12px] xs:text-desc-text'>내 찜</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex flex-col justify-center items-center">
                <img
                  src="https://d-hye.github.io/source/img/icon/travel.svg"
                  className="d-block m-2.5"
                  alt="내여행"
                />
                <span className='text-[12px] xs:text-desc-text'>내 여행</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex flex-col justify-center items-center">
                <img
                  src="https://d-hye.github.io/source/img/icon/layer.svg"
                  className="d-block m-2.5"
                  alt="가계부"
                />
                <span className='text-[12px] xs:text-desc-text'>내 가계부</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex flex-col justify-center items-center">
                <img
                  src="https://d-hye.github.io/source/img/icon/pencil-02.svg"
                  className="d-block m-2.5"
                  alt="내후기"
                />
                <span className='text-[12px] xs:text-desc-text'>내 후기</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 메뉴리스트 */}
        <div className={`flex flex-col flex-grow m-4 gap-4 xs:my-[2.25rem] xs:mx-[2.5rem] overflow-y-auto xs:gap-[2.5rem]`}>
          <div>
            <Link to="/tripRoute/myFeelter" className="flex items-center">
              <span className="text-trip-blue font-theJamsil-medium text-small-text xs:text-semismall-text">MY FEEL:TER</span>
            </Link>
          </div>
          <div>
            <Link
              to="/tripRoute/planMaker"
              className="flex items-center"
            >
              <span className="text-trip-blue font-theJamsil-medium text-small-text xs:text-semismall-text">계획짜기</span>
            </Link>
          </div>
          <div className="flex flex-col overflow-y-auto gap-4 xs:gap-[2.5rem] flex-grow">
            <ul className={`${hyo.communitymenu}`}>
              <li>
                <Link to="/bbs/findFriend" className="text-desc-text xs:text-small-text font-theJamsil-medium">
                  동행 구해요
                </Link>
              </li>
              <li>
                <Link to="/bbs/findPlan" className="text-desc-text xs:text-small-text font-theJamsil-medium">
                  계획 둘러보기
                </Link>
              </li>
              <li>
                <Link
                  to="/tripTalk/findReview"
                  className="text-desc-text xs:text-small-text font-theJamsil-medium"
                >
                  후기 둘러보기
                </Link>
              </li>
            </ul>
            <ul className={`${hyo.communitymenu} flex flex-wrap`}>
              <li>
                <Link to="/" className="text-desc-text xs:text-small-text font-theJamsil-medium">
                  MD추천
                </Link>
              </li>
              <li>
                <Link to="/tripterEvent/tripterSpecial" className="text-desc-text xs:text-small-text font-theJamsil-medium">
                  이벤트
                </Link>
              </li>
            </ul>
            <ul className={`${hyo.hb_sublist} flex flex-col gap-4 xs:gap-[2rem]`}>
              <li className='flex flex-col gap-2 xs:gap-4'>
                <div>
                  <Link to="/products/airplane/onSaleA" className='text-small-text font-theJamsil-medium xs:text-semismall-text'>항공권</Link>
                </div>
                <ul className={`${hyo.sublist} flex flex-wrap gap-y-[0.5rem] xs:gap-y-4`}>
                  <li>
                    <Link to="/products/airplane/onSaleA" className='text-[12px] xs:text-small-text'>
                      특가항공
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/airplane/domestic" className='text-[12px] xs:text-small-text'>
                      국내항공
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/airplane/overseas" className='text-[12px] xs:text-small-text'>
                      국외항공
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='flex flex-col gap-2 xs:gap-4'>
                <div>
                  <Link to="/products/accommodation/onSaleB" className='text-small-text font-theJamsil-medium xs:text-semismall-text'>
                    숙소
                  </Link>
                </div>
                <ul className={`${hyo.sublist} flex flex-wrap  gap-y-[0.5rem] xs:gap-y-4`}>
                  <li>
                    <Link to="/products/accommodation/onSaleB" className='text-[12px] xs:text-small-text'>
                      특가숙소
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/accommodation/hotel" className='text-[12px] xs:text-small-text'>
                      호텔
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/accommodation/guestHouse" className='text-[12px] xs:text-small-text'>
                      게스트하우스
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/accommodation/countryside" className='text-[12px] xs:text-small-text'>
                      펜션&캠핑
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='flex flex-col gap-2 xs:gap-4'>
                <div>
                  <Link to="/products/reservation/allPass" className='text-small-text font-theJamsil-medium xs:text-semismall-text'>
                    티켓&투어
                  </Link>
                </div>
                <ul id="ticket" className={`${hyo.sublist} flex flex-wrap  gap-y-[0.5rem] xs:gap-y-4`}>
                  <li>
                    <Link
                      className="allPass text-trip-blue font-theJamsil-medium text-[12px] xs:text-small-text"
                      to="/products/reservation/allPass"
                    >
                      올패스권
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/localTour" className='text-[12px] xs:text-small-text'>
                      현지투어
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/themePark" className='text-[12px] xs:text-small-text'>
                      테마파크
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/ticket" className='text-[12px] xs:text-small-text'>
                      전시체험
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/train" className='text-[12px] xs:text-small-text'>
                      철도여행
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;