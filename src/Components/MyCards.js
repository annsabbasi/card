import React, { useState } from 'react';

import img1 from '../Images/img1.webp'
import img2 from '../Images/img2.webp'
import img3 from '../Images/img3.webp'
import img4 from '../Images/img4.webp'
import img5 from '../Images/img5.webp'
import img6 from '../Images/img6.webp'
import img7 from '../Images/img7.webp'
import img8 from '../Images/img8.webp'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MyCards() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 5,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
    };

    return (
        <div className='gap-6 mx-auto pr-8 w-[75%] pt-2'>
            <section section className='flex items-center flex-col gap-2'>
                <div className='flex items-center justify-center flex-col gap-16 sm:gap-2 w-full text-center px-5'>
                    <div className='flex justify-between w-full ml-6 text-3xl text-gray-700'>
                        <p className='text-start'>January</p>
                        <div className='flex flex-col gap-2 w-full items-end'>
                            <button className='flex items-center w-[25%] justify-center bg-white text-pink-utility hover:bg-pink-utility rounded-md hover:text-white gap-1 py-2 px-3 transition-all duration-150 border hover:border-pink-utility border-pink-utility text-base'>
                                <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                                </span> Generate Cards</button>
                        </div>
                    </div>
                    <article className="w-full">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                                return (
                                    <div className='w-full flex items-center flex-col'>
                                        <div className="relative shadow-sm shadow-gray-300 border mx-5 bg-white rounded-md my-0 sm:my-2 pt-5 pb-2 px-2 w-11/12" key={index}>
                                            <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                        </div>
                                        <button className='flex items-center justify-center hover:bg-pink-utility rounded-xl text-pink-utility hover:text-white gap-1 py-2 px-3 bg-white duration-150 border-pink-utility transition-all border w-5/6'>Select</button>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </article>
                </div>

                <div className='flex items-center justify-center flex-col gap-16 sm:gap-2 w-full text-center pt-1]0 px-5 my-2'>
                    <div className='flex justify-between w-full ml-6 text-3xl text-gray-700'>
                        <p className='text-start'>February</p>
                    </div>
                    <article className="w-full">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {[img8, img7, img6, img5, img4, img3, img2, img1].map((imageUrl, index) => {
                                return (
                                    <div className='w-full flex items-center flex-col'>
                                        <div className="relative shadow-sm shadow-gray-300 border mx-5 bg-white rounded-md my-0 sm:my-2 pt-5 pb-2 px-2 w-11/12" key={index}>
                                            <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                        </div>
                                        <button className='flex items-center justify-center bg-white rounded-xl hover:text-white text-pink-utility gap-1 py-2 px-3 hover:bg-pink-utility  duration-150 transition-all border-pink-utility border w-5/6'>Select</button>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </article>
                </div>

                <div className='flex items-center justify-center flex-col gap-16 sm:gap-2 w-full text-center pt-1]0 px-5 my-2 mb-10'>
                    <div className='flex justify-between w-full ml-6 text-3xl text-gray-700'>
                        <p className='text-start'>March</p>
                    </div>
                    <article className="w-full">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                                return (
                                    <div className='w-full flex items-center flex-col'>
                                        <div className="relative shadow-sm shadow-gray-300 border mx-5 bg-white rounded-md my-0 sm:my-2 pt-5 pb-2 px-2 w-11/12" key={index}>
                                            <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                        </div>
                                        <button className='flex items-center justify-center hover:bg-pink-utility rounded-xl hover:text-white text-pink-utility gap-1 py-2 px-3 bg-white  duration-150 transition-all border-pink-utility border w-5/6'>Select</button>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </article>
                </div>
            </section>
        </div>
    )
}
