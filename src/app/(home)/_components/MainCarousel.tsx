'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function MainCarousel() {
    const swiperContainerStyle = 'w-full h-full bg-gray-500 '
    const swiperItemStyle = 'flex items-end'
    const slideItems = [{ id: 0, keword: '키워드1', description: '키워드 설명<br>키워드 설명' }, { id: 1, keword: '키워드2', description: '키워드 설명<br>키워드 설명' }, { id: 2, keword: '키워드3', description: '키워드 설명<br>키워드 설명' }, { id: 3, keword: '키워드4', description: '키워드 설명<br>키워드 설명' }]
    return (
        <div className='h-[40%] rounded-[18px] overflow-hidden'>
            <Swiper pagination={true} modules={[Pagination, A11y, Autoplay]}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}

                slidesPerView={1}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
                breakpoints={{
                    // 1000: {
                    //   slidesPerView: 2,
                    //   spaceBetween: 10,
                    // },
                    // 1400: {
                    //     slidesPerView: 3,
                    //     spaceBetween: 10,
                    // },
                }}
                className={swiperContainerStyle}>
                {slideItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className='absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black/50'></div>
                        <div className='flex flex-col gap-[5px] h-full justify-end p-[35px]'>
                            <h2 className='text-[40px] text-white font-bold'>#{item.keword}</h2>
                            <p className='ml-[10px] text-[20px] text-white font-semibold leading-[27px]'
                                dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

