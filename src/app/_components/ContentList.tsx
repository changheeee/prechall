//컨텐츠 리스트 UI : 매개변수로 실시간 급상승, 키워드를 받아서 정렬하도록
'use client'

import React, { useState } from 'react';
import ContentItem from "./ContentItem"
import { contentData } from "@/app/MOCKDATA";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
    isKeword: boolean,
    isRank: boolean,
}

export default function ContentList({ isKeword, isRank }: Props) {
    const data = contentData;
    const [visibleItems, setVisibleItems] = useState(5); // 초기에 보여질 아이템 수
    // 랭크 포인트 기준 상위 10개 추출
    const top10ContentData = contentData
        .sort((a, b) => b.rank_point - a.rank_point) // 내림차순 정렬
        .slice(0, 10); // 상위 10개 추출

    return (
        <article>
            <Swiper
                className="grid grid-flow-col auto-cols-min w-full h-auto"
                modules={[Mousewheel, Keyboard, Navigation, Scrollbar]}
                // navigation={true}
                loop={false}
                keyboard={true}
                mousewheel={false}
                // slidesPerGroup={4}
                // slidesPerView={7}
                spaceBetween={10}
                breakpoints={{
                    // 1000: {
                    //   slidesPerView: 2,
                    //   spaceBetween: 10,
                    // },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                    1800: {
                        slidesPerView: 6,
                    },
                    1900: {
                        slidesPerView: 7,
                    },
                }}>
                {top10ContentData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ContentItem item={item} rank={index} isKeyword={isKeword} isRank={isRank} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </article >
    )
}

