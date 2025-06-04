import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { getMDSlides, MDSlides } from '../../api/md_slideCRUD'

import hye from '../../scss/hye.module.scss'

export default function Section2(){
    const [slides, setSlides] = useState<MDSlides[]>([])
    
    useEffect(() => {
        async function fetchSlides() {
          const data = await getMDSlides()
          setSlides(data)
          //console.log(data)
        }
        fetchSlides()
    }, [])

    return(
        <section className="section section2 pt-16 pb-8 md:py-20">
            <h3 className="section_tit pb-10 md:pb-20 font-theJamsil-bold text-mediumbig-text text-center">
                MD 추천 테마여행지
            </h3>
            <div >
                <Swiper className="md_swiper pb-[3rem] gap-0"
                    slidesPerView="auto"
                    centeredSlides={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    {slides.map((item ,idx) => (
                        <SwiperSlide key={idx}
                            className='w-[7.5rem] md:w-[15rem] mx-3 md:mx-4'
                        >
                            <Link to={item.link ?? '/'}>
                                <div className={`h-[10rem] md:h-[15rem] rounded-[20px] overflow-hidden ${hye.img_box}`}>
                                    <img src={item.src} alt={item.alt}/>
                                </div>
                                <div className="swiper_desc">
                                    <p className="items-center justify-center flex-col h-[4.5rem] py-3 text-semismall-text font-500 leading-[1.45] hidden md:flex">{item.title}{item.title_span && <span className='text-semismall-text'>{item.title_span}</span>}</p>
                                    <p className="text-center text-desc-text md:text-small-text leading-[1.45]">{item.subtitle}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    

                    <div className="swiper-button-next hidden md:block md:right-[5%] xl:right-[13.542%]"></div>
                    <div className="swiper-button-prev hidden md:block md:left-[5%] xl:left-[13.542%]"></div>
                    <div className="swiper-pagination md:hidden"></div>

                </Swiper>
            </div>
        </section>
    );
}