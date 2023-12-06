"use client";
import Section from "@/components/Section"
import Image from "next/image"
import cn from "@/helpers";
import Icon from "@/components/Icon";
import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide, SwiperRef, SwiperProps } from 'swiper/react';

import { register } from 'swiper/element/bundle';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/modules/pagination/navigation.min.css'
// import required modules

import { Pagination, Navigation } from 'swiper/modules';
import ButtomLink from "@/components/ButtomLink";
import { SwiperContainer } from 'swiper/element/bundle';
import { useSwiper } from 'swiper/react';

const cases = [
    {
        id: 'cc-01',
        title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
        category: 'Wind Power for auto field irrigation',
        date: 'July 2023',
        image: '/assets/cases-01.jpg'
    },
    {
        id: 'cc-02',
        title: 'Zhytomyr city Private Enterprise “Bosch”',
        category: 'Solar Panels for industrial use',
        date: 'November 2023',
        image: '/assets/cases-02.jpg'
    },
    {
        id: 'cc-03',
        title: 'Rivne city Private Enterprise “Biotech”',
        category: 'Thermal modules',
        date: 'October 2023',
        image: '/assets/cases-03.jpg'
    },
    {
        id: 'cc-04',
        title: 'Kherson city Private Enterprise “HealthyFarm”',
        category: 'Wind power',
        date: 'September 2021',
        image: '/assets/cases-04.jpg'
    },
    {
        id: 'cc-05',
        title: 'Zaporizhia city Private Enterprise “Biotech”',
        category: 'Mini nuclear stations',
        date: 'May 2021',
        image: '/assets/cases-05.jpg'
    },

]

type CasesCard = {
    id: string,
    title: string,
    category: string,
    date: string,
    image: string
}



const CasesCard = ({ id, title, category, date, image }: CasesCard) => {
    return (
        <div className="bg-secondaryBg pb-3 d:pb-9  flex flex-col justify-between ">
            <Image className="block "
                src={image}
                alt='cases'
                width={596}
                height={296}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between h-full gap-x-3 mx-3 d:mx-12 py-6 t:py-9 border-b border-accent ">
                    <h3 className="  text-18xl t:text-20xl d:text-24xl  "> {title} </h3>
                    <ButtomLink href='' title="more" className=" h-[60px] w-[60px] shrink-0 flex items-center justify-center  hover:text-accent hover:bg-primary   bg-accent ">
                        <Icon name='/assets/icons/small.svg' id='arrow-big' className="h-7 w-7 rotate-[135deg] " />
                    </ButtomLink>
                </div>
                <div className="flex items-center justify-between gap-x-3 mx-3 d:mx-12 pt-3 d:pt-6 text-12xl t:text-14xl d:text-16xl ">
                    <p>
                        {category}
                    </p>
                    <p>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}



const Cases = () => {

    const swiperRef = useRef<SwiperProps>(null);
    const [swiper, setSwiper] = useState<SwiperProps>(null);
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = () => {
        swiper.slideNext();
    };

    const prevSlide = () => {
        swiper.slidePrev();
    };

    const getActiveSlide = () => {
        if (swiper?.realIndex + 1 !== activeSlide) {
            setActiveSlide(swiper?.realIndex + 1)
            //  console.log(swiper?.slides?.length)
        }
    }

    return (
        <Section id="cases" className=" ">
            <div className="grid grid-cols-1 t:grid-cols-2 pb-9 t:pb-[100px] d:pb-[120px]">
                <h2 className=" sectionTitle text-left p-0 t:pr-[100px] d:pr-[260px] pb-6 t:pb-0 ">Successful cases of our company </h2>
                <div className="flex items-center t:border-l t:border-accent">

                    <p className="self-end text-28xl font-light ml-0 t:ml-2 d:ml-[161px]   ">
                        {activeSlide} <span className=" opacity-25">/{swiper?.slides?.length | 0}</span>
                    </p>

                    <button title="prev" onClick={prevSlide}
                        className=" h-[66px] w-[66px]  flex items-center justify-center border rounded-full mr-0 ml-auto
                         hover:text-accent border-primary  hover:border-accent transition-colors duration-200 ">
                        <Icon name='/assets/icons/small.svg' id='arrow-big' className="w-9 h-9 " />
                    </button>

                    <button title="next" onClick={nextSlide}
                        className=" h-[66px] w-[66px] flex items-center justify-center border rounded-full mr-0 ml-3 d:ml-6 
                         hover:text-accent border-primary  hover:border-accent transition-colors duration-200">
                        <Icon name='/assets/icons/small.svg' id='arrow-big' className="w-9 h-9 rotate-180 " />
                    </button>


                </div>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Pagination, Navigation]}
                onSwiper={(s: React.SetStateAction<null>) => { setSwiper(s) }}
                loop
                onActiveIndexChange={getActiveSlide}
                className="mySwiper"
                wrapperTag='ul'
                spaceBetween={24}
                breakpoints={
                    {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1440:
                        {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        }
                    }}
            >
                {cases.map(item => <SwiperSlide key={item.id} tag="li"> <CasesCard {...item} /></SwiperSlide>)}
            </Swiper>
        </Section>
    )
}
export default Cases