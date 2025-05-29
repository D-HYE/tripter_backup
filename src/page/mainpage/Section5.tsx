import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchPostData } from '../../api/data_boardCRUD';
import { Post } from '../../types/post';

import hye from '../../scss/hye.module.scss'

const Section5:React.FC = () => {
    const [reviewData, setReviewData] = useState<Post[]>([]);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      async function loadData(tableName: string) {
        const data = await fetchPostData(tableName);
        if (data) setReviewData(data);
      }
      loadData("findReview");
    }, []);

    const cloneCount = 10; // 루프 효과를 위한 복제 개수
    const midpoint = Math.ceil(reviewData.length / 2);



    const reviewList = reviewData.map(review => (
        <li className="marquee_content w-[8.125rem] md:w-[12.5rem] lg:w-[17.5rem] py-2 px-1 md:py-4 md:px-3 bg-trip-white drop-shadow-[var(--dropShadow)]" key={review.post_id}>
          <Link to='/tripTalk/findReview'>
            <div className={`${hye.img_box} h-[6.75rem] md:h-[10rem] lg:h-[16rem]`}>
              <img src={review.src} alt={review.alt} />
            </div>
            <div className="txt_box">
              <div className="user_info hidden md:flex justify-between lg:justify-start gap-4 my-5">
                <span className="review_user text-small-text lg:text-semismall-text">{review.postUser?.user_nickname}</span>
                <div className="ratingWrap flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <div
                          className={`rating ${i < (review.rate ?? 0) ? "giveStar" : ""}`}
                          key={i}
                        ></div>
                    ))}
                </div>
              </div>
              <p className={`review_txt hidden md:block text-desc-text lg:text-small-text ${hye.truncate}`}>{review.post_tit}</p>
              <div className="user_info md:hidden my-2">
                <b className="review_user text-desc-text font-400">{review.postUser?.user_nickname} 님의 후기</b>
              </div>
            </div>
          </Link>
        </li>
      ));

      const marqueeList1 = isMobile ? reviewList : reviewList.slice(0, midpoint);
      const marqueeList2 = isMobile ? [] : reviewList.slice(midpoint);

    return (
        <section className={`section4 py-[3.75rem] md:pt-[5rem] md:pb-[8.5rem] ${hye.review_gradient}`}>
            <div className="max-w-[90rem] mx-auto px-[0.625rem] md:px-5">
                <h3 className="pb-10 md:pb-20 font-theJamsil-bold text-semismall-text md:text-mediumbig-text text-center">
                    실시간 후기
                </h3>
                <div className="page_view max-w-[90rem] mx-auto px-[0.625rem] md:px-5 mb-8 md:mb-9 text-center md:text-right">
                    <Link to="/tripTalk/findReview" className="text-desc-text md:text-semismall-text">후기 더 보기&gt;</Link>
                </div>
            </div>
            <div className="marquee_area overflow-hidden">
                <div className="marquee_wrap relative h-[10.75rem] md:h-[19.75rem] lg:h-[25.75rem]">
                    <ul className={`absolute left-0 flex gap-4 md:gap-8 ${hye.marquee1}`} id="review_marquee1">
                        {marqueeList1}
                        {marqueeList1.slice(0, cloneCount)}
                    </ul>
                </div>
                {!isMobile && (
                    <div className="marquee_wrap relative hidden md:block h-[10.75rem] md:h-[19.75rem] lg:h-[25.75rem]">
                        <ul className={`absolute right-0 flex gap-4 md:gap-8 ${hye.marquee2}`} id="review_marquee2">
                        {marqueeList2}
                        {marqueeList2.slice(0, cloneCount)}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Section5;