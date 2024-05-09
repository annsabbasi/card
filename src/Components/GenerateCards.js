import React, { useEffect, useState } from 'react';

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

export default function GenerateCards() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const handleChangeText = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const items = [
        { text: 'My Cards', svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
        { text: 'Generate Cards', svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
        { text: 'Address Book', svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
        { text: 'Calendar', svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
        { text: 'Drafts & Favourites', svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
        { text: 'Subsctiption Plans', svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
    ];

    // FOR THE SINGLE SLIDER
    const [activeIndexx, setActiveIndexx] = useState(0);

    // Function to handle dot click
    const handleDotClick = (index) => {
        setActiveIndexx(index);
    };

    // Function to handle automatic navigation after 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexx((prevIndex) => (prevIndex + 1) % 8); // Assuming you have 8 images
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const responsivee = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='gap-6 mx-auto pr-5 w-[75%] pt-3 mb-10'>
            <div className='flex items-center justify-center flex-col gap-16 sm:gap-2 w-full text-center px-5'>
                <article className="w-full border-b border-gray-200 pb-4 mb-8">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                            return (
                                <div className='w-full flex items-center flex-col'>
                                    <div className="relative shadow-sm shadow-gray-300 border mx-5 bg-white rounded-md my-0 sm:my-4 pt-5 pb-2 px-2 w-11/12" key={index}>
                                        <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </article>

                <div className='w-full flex items-center justify-between gap-10'>
                    <article className="w-[45%]">
                        <Carousel
                            responsive={responsivee}
                            infinite={true}
                            partialVisible={false}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            // customDot={<CustomDot activeIndexx={activeIndexx} handleDotClick={handleDotClick} />}
                            arrows={false}
                        >
                            {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                                return (
                                    <div className='flex items-center flex-col' key={index}>
                                        <div className="relative shadow-sm shadow-gray-300 border mx-5 bg-white rounded-md my-0 sm:my-4 pt-5 pb-2 px-2">
                                            <img src={imageUrl} alt="movie" className="rounded-md " />
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </article>

                    <article className='w-full mt-10 flex flex-col gap-12'>
                        <div className='flex items-center justify-center flex-col gap-4'>
                            <input type="text" className='border border-gray-300 bg-slate-50 py-4 px-4 rounded-md w-full outline-none' placeholder='Type Here...' />
                            <input type="text" className='border border-gray-300 bg-slate-50 py-4 px-4 rounded-md w-full outline-none' placeholder='Write Here...' />
                            <input type="text" className='border border-gray-300 bg-slate-50 py-4 px-4 rounded-md w-full outline-none' placeholder='Type Here...' />
                            <input type="text" className='border border-gray-300 bg-slate-50 py-4 px-4 rounded-md w-full outline-none' placeholder='Write Here...' />
                        </div>

                        <div className='flex items-center justify-center flex-col gap-4'>
                            <button className='w-full bg-pink-utility text-white font-normal rounded-md py-3 px-3 text-sm md:text-base border-pink-utility border hover:bg-white hover:text-pink-utility transition-all duration-200'>Refresh Messages</button>

                            <div className='flex justify-between w-full'>
                                <button className='flex items-center w-[45%] justify-center hover:bg-pink-utility rounded-md hover:text-white gap-1 py-2 px-3 bg-transparent text-pink-utility hover:border-pink-utility transition-all duration-150 border border-pink-utility text-base'>
                                    <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                                    </svg>
                                    </span>Save to Print</button>

                                <button className='flex items-center w-[45%] justify-center hover:bg-pink-utility rounded-md hover:text-white gap-1 py-2 px-3 bg-transparent text-pink-utility hover:border-pink-utility transition-all duration-150 border border-pink-utility text-base'>
                                    <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>

                                    </span>Save to Drafts</button>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        </div>
    )
}



// export const CustomDot = ({ activeIndexx, handleDotClick }) => {
//     return (
//         <ul className="custom-dot-list-style">
//             {[...Array(8)].map((_, index) => (
//                 <li
//                     key={index}
//                     className={`custom-dot ${activeIndexx === index ? 'active' : ''}`}
//                     onClick={() => handleDotClick(index)}
//                 />
//             ))}
//         </ul>
//     );
// };