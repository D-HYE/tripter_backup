import React from 'react';
import { Link } from 'react-router-dom';
import hyo from '../../scss/hyo.slidemenu.module.scss'





interface SlideMenuProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className={`${hyo.hb_submenu} ${isMenuOpen ? hyo.open : ''} flex flex-col inset-0 bg-trip-white max-w-[25rem] fixed z-[999]`}>
      <div className={`${hyo.dim}`}></div>
      <div className={`flex flex-col flex-grow h-full relative bg-trip-white font-semismall-text`}>
        <div className="flex justify-end d-open">
          <button className="p-4 mx-4" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://d-hye.github.io/source/img/icon/x-01.svg"
              className="d-block"
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
          <div className="bg-[#FFDA00] bg-opacity-25 px-9 py-4 flex items-end flex justify-between">
            <div className="bg-trip-skyblue rounded-full w-12 h-12 flex justify-center items-center">
              <img
                src="https://d-hye.github.io/source/img/icon/user-profile-02.svg"
                className="d-block"
                alt=""
              />
            </div>
            <div className="ml-6 mr-auto text-small-text">
              <div className="mb-2 leading-none">
                <span>안녕하세요!</span>
              </div>
              <div>
                트립터<span className="text-semismall-text">###</span>님
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
          <ul className={`${hyo.menu_icon} flex justify-between bg-trip-white py-3 px-9`}>
            <li>
              <Link to="/user" className="heart flex flex-col justify-center items-center font-[0.875rem]">
                <img
                  src="https://d-hye.github.io/source/img/icon/heart_02.svg"
                  className="d-block m-2.5"
                  alt="내찜"
                />
                <span>내 찜</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex flex-col justify-center items-center font-[0.875rem]">
                <img
                  src="https://d-hye.github.io/source/img/icon/travel.svg"
                  className="d-block m-2.5"
                  alt="내여행"
                />
                <span>내 여행</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex flex-col justify-center items-center font-[0.875rem]">
                <img
                  src="https://d-hye.github.io/source/img/icon/layer.svg"
                  className="d-block m-2.5"
                  alt="가계부"
                />
                <span>내 가계부</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex flex-col justify-center items-center font-[0.875rem]">
                <img
                  src="https://d-hye.github.io/source/img/icon/pencil-02.svg"
                  className="d-block m-2.5"
                  alt="내후기"
                />
                <span>내 후기</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 메뉴리스트 */}
        <div className={`flex flex-col flex-grow my-[2.25rem] mx-[2.5rem] overflow-y-auto`}>
          <ul className="flex flex-col">
            <li className="mb-[0.9375rem]">
              <Link
                to="/tripRoute/myFeelter"
                className="flex items-center"
              >
                <span className="text-trip-blue font-theJamsil-medium text-semismall-text">MY FEEL:TER</span>
              </Link>
            </li>
            <li className="mb-[0.9375rem]">
              <Link
                to="/tripRoute/planMaker"
                className="flex items-center"
              >
                <span className="text-trip-blue font-theJamsil-medium text-semismall-text">계획짜기</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col overflow-y-auto">
            <ul className={`${hyo.communitymenu}`}>
              <li>
                <Link to="/tripTalk/findFriend" className="friendfind">
                  동행 구해요
                </Link>
              </li>
              <li>
                <Link to="/tripTalk/findPlan" className="planaround">
                  계획 둘러보기
                </Link>
              </li>
              <li>
                <Link
                  to="/tripTalk/findReview"
                  className="reviewaround"
                >
                  후기 둘러보기
                </Link>
              </li>
            </ul>
            <ul className={`${hyo.communitymenu} flex flex-wrap`}>
              <li>
                <Link to="/" className="mbrecomm">
                  MD추천
                </Link>
              </li>
              <li>
                <Link to="/tripterEvent" className="event">
                  이벤트
                </Link>
              </li>
            </ul>
            <ul className={`${hyo.hb_sublist}`}>
              <li>
                <div>
                  <Link to="/products/airplane/onSale">항공권</Link>
                </div>
                <ul className={`${hyo.sublist} flex flex-wrap`}>
                  <li>
                    <Link to="/products/airplane/onSale">
                      특가항공
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/airplane/domestic">
                      국내항공
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/airplane/overseas">
                      국외항공
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div>
                  <Link to="/products/accommodation/onSale">
                    숙소
                  </Link>
                </div>
                <ul className={`${hyo.sublist} flex flex-wrap`}>
                  <li>
                    <Link to="/products/accommodation/onSale">
                      특가숙소
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/accommodation/hotel">
                      호텔
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/accommodation/guestHouse">
                      게스트하우스
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/accommodation/countryside">
                      펜션&캠핑
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div>
                  <Link to="/products/reservation/allPass">
                    티켓&투어
                  </Link>
                </div>
                <ul id="ticket" className={`${hyo.sublist} flex flex-wrap`}>
                  <li>
                    <Link
                      className="allPass text-blue"
                      to="/products/reservation/allPass"
                    >
                      올패스권
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/localTour">
                      현지투어
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/themePark">
                      테마파크
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/ticket">
                      전시체험
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/reservation/train">
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