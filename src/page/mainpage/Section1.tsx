import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//,useRef 
import { getMainBanners, MainBanner } from '../../api/main_slideCRUD'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Sectino1() {
  const [slides, setSlides] = useState<MainBanner[]>([])

  useEffect(() => {
    async function fetchSlides() {
      const data = await getMainBanners()
      setSlides(data)
      console.log(data)
    }
    fetchSlides()
  }, [])

  // if (slides.length === 0) return <p>로딩 중...</p>

  return (
    <section className="section section1">
      <div className="relative">
          <Swiper className="main_swiper h-[100vw] md:h-[40rem] md:rounded-tl-full md:rounded-bl-full"
            modules={[Pagination, Autoplay]}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            autoplay={{delay: 3000}}
            loop = {true}
          >
              {slides.map((item, idx) => (
                <SwiperSlide
                  key={item.alt}
                  className={`swiper-slide${idx + 1} bg-cover bg-left bg-no-repeat`}
                  style={{ backgroundImage: `url("${item.src}")` }}
                >
                  <Link to={item.link || "#none"} className='block h-full'>
                    <div className={`slide_desc absolute top-[10vw] left-[1rem] md:top-[10rem] md:left-[15.625%] max-w-[32rem] text-trip-white tracking-tighter break-keep ${item.text_color === 'black' ? 'text-black' : 'text-white'}`}>
                      <h2 className="font-[TheJamsil700] text-[7.5vw] md:text-main-slide break-words">{item.title}</h2>
                      {item.subtitle && <p className="mt-12 text-[4.375vw] md:text-big-text font-bold leading-[1.45] ">{item.subtitle}</p>}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
          </Swiper>
          {/* <div className="simple_feelter abs" ref={feelterRef}>
              <Feelter/>
          </div> 
          <div id="simple_feelter_btn" className="mb abs simple_feelter_btn" onClick={toggleFeelter}>
              <div className="d-flex">
                  <div className="txt_box">
                      <h4>MY FEEL:TER</h4>
                      <p>나의 여행 스타일 설정하기</p>
                  </div>
                  <div className="img_box d-flex">
                      <img src="https://d-hye.github.io/source/img/icon/arrow-right.svg" alt="arrow"/>
                  </div>
              </div>
          </div>*/}
      </div>
      {/*
      <div className="mb icon_menu">
          <div className="container">
              <ul className="d-flex justify-content-center">
                  <li className="d-flex align-items-center justify-content-center">
                      <p>
                          <img src="https://d-hye.github.io/source/img/icon/pencil_m.svg" alt=""/>
                          </p>
                  <p className="">
                      계획짜기
                  </p>                            
                  </li>
                  <li className="d-flex align-items-center justify-content-center">
                      <p>
                          <img src="https://d-hye.github.io/source/img/icon/triptalk_m.svg" alt=""/>
                      </p>
                      <p className="">
                          트립톡
                      </p>    
                  </li>
                  <li className="d-flex  align-items-center justify-content-center">
                      <p>
                      <img src="https://d-hye.github.io/source/img/icon/event.svg" alt=""/>
                      </p>
                      <p className="">
                          이벤트
                      </p>    
                  </li>
              </ul>
          </div>
      </div>*/}
  </section>
  )
}
