import React from 'react';
import logo from '../Images/logos/logo.webp';

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
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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

    return (
        <>
            <main>
                <header className='border-b'>
                    <nav className='flex items-center justify-between w-full max-w-screen-2xl px-6 mx-auto py-1'>
                        <Link to={'/'}> <img src={logo} alt="Logo" className="w-40 h-16 mx-auto" /></Link>
                        <div className='flex items-center gap-5'>
                            <span className='cursor-pointer text-gray-500 hover:text-main-utility transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            </span>
                            <span className='cursor-pointer text-gray-500 hover:text-main-utility transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            </span>
                        </div>
                    </nav>
                </header>
                {/*  */}
                <section className='flex justify-center w-full gap-4 max-w-screen-2xl mx-auto'>
                    <aside className="w-1/4 h-auto border border-gray-200 border-t-0 bg-gray-50">
                        <div className="pt-4">
                            <ul className="space-y-8 mb-8 mt-10 text-lg">
                                <li className="cursor-pointer relative w-full flex items-center gap-2 py-5 text-white bg-yellow-rgb transition-all">
                                    <div className='z-10 pl-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    </div>
                                    <a href="/" className='z-10'>Card Generation</a>
                                    <span className='absolute z-0 left-0 top-0 w-full h-full bg-yellow-rgb transition-transform transform origin-left duration-300'></span>
                                    <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#8b6620] transition-transform transform origin-left duration-300'></span>
                                </li>
                                <li className="text-gray-700 cursor-pointer relative theli w-full flex items-center gap-2 py-5 hover:text-white transition-all">
                                    <div className='z-10 pl-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                        </svg>

                                    </div>
                                    <a href="/" className='z-10'>Address Book Generation</a>
                                    <span className='absolute z-0 left-0 top-0 w-full h-full bg-yellow-rgb transition-transform transform origin-left duration-300'></span>
                                    <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#8b6620] transition-transform transform origin-left duration-300'></span>
                                </li>
                                <li className="text-gray-700 cursor-pointer relative theli w-full flex items-center gap-2 py-5 hover:text-white transition-all">
                                    <div className='z-10 pl-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                        </svg>

                                    </div>
                                    <a href="/" className='z-10'>Calendar Generation</a>
                                    <span className='absolute z-0 left-0 top-0 w-full h-full bg-yellow-rgb transition-transform transform origin-left duration-300'></span>
                                    <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#8b6620] transition-transform transform origin-left duration-300'></span>
                                </li>
                                <li className="text-gray-700 cursor-pointer relative theli w-full flex items-center gap-2 py-5 hover:text-white transition-all">
                                    <div className='z-10 pl-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                        </svg>

                                    </div>
                                    <a href="/" className='z-10'>Favourites Generation</a>
                                    <span className='absolute z-0 left-0 top-0 w-full h-full bg-yellow-rgb transition-transform transform origin-left duration-300'></span>
                                    <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#8b6620] transition-transform transform origin-left duration-300'></span>
                                </li>
                                <li className="text-gray-700 cursor-pointer relative theli w-full flex items-center gap-2 py-5 hover:text-white transition-all">
                                    <div className='z-10 pl-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                        </svg>

                                    </div>
                                    <a href="/" className='z-10'>Drafts Generation</a>
                                    <span className='absolute z-0 left-0 top-0 w-full h-full bg-yellow-rgb transition-transform transform origin-left duration-300'></span>
                                    <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#8b6620] transition-transform transform origin-left duration-300'></span>
                                </li>
                                <li className="text-gray-700 cursor-pointer relative theli w-full flex items-center gap-2 py-5 hover:text-white transition-all">
                                    <div className='z-10 pl-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                                        </svg>

                                    </div>
                                    <a href="/" className='z-10'>Premium Plan Generation</a>
                                    <span className='absolute z-0 left-0 top-0 w-full h-full bg-yellow-rgb transition-transform transform origin-left duration-300'></span>
                                    <span className='absolute left-0 bottom-0 w-full h-[2px] bg-[#8b6620] transition-transform transform origin-left duration-300'></span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-center gap-10">
                                <button className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6 fill-current">
                                        <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />
                                    </svg>
                                </button>
                                <button className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6 fill-current">
                                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                                    </svg>
                                </button>
                                {/* <button className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6 fill-current">
                                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </aside>
                    {/*  */}
                    <div className='gap-6 mx-auto pr-8 w-[75%] pt-10'>
                        <article className='flex justify-between w-full'>
                            <div className='flex flex-col w-full justify-between'>
                                <h2 className='text-3xl text-main-utility'>Card Generation</h2>

                                <article className='flex items-center gap-6'>
                                    <div className='flex items-center justify-between border-b-[2px] color-yellow-utility pb-1 cursor-pointer w-48'>
                                        <p className='text-gray-500 font-normal'>Choose Occasion</p>
                                        <span className='cursor-pointer text-gray-500 hover:text-main-utility transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>

                                        </span>
                                    </div>

                                    <div className='flex items-center justify-between border-b-[2px] color-yellow-utility pb-1 cursor-pointer w-48'>
                                        <p className='text-gray-500 font-normal'>For Whom?</p>
                                        <span className='cursor-pointer text-gray-500 hover:text-main-utility transition-all'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>

                                        </span>
                                    </div>
                                </article>
                            </div>

                            <div className='flex flex-col gap-2 w-2/3'>
                                <div className='border color-yellow-utility rounded-md py-2 px-3 flex items-center bg-gray-50 justify-between'>
                                    <input className='bg-transparent outline-none w-[85%]' type="text" placeholder='Search for Themes' />
                                    <span className='cursor-pointer' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                    </span>
                                </div>
                                <button className='flex items-center justify-center bg-yellow-utility rounded-md text-white gap-1 py-2 px-3 hover:bg-transparent hover:text-main-utility transition-all border color-yellow-utility'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                    </svg>
                                    </span> Generate Cards</button>
                            </div>
                        </article>
                        {/* @@@@@@@@ */}

                        <section section className='flex items-center flex-col'>
                            <div className='flex items-center justify-center flex-col gap-16 sm:gap-20 w-full text-center pt-20 px-5'>
                                <article className="w-full">
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        partialVisible={false}
                                        dotListClass="custom-dot-list-style"
                                    >
                                        {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                                            return (
                                                <div className="shadow-md shadow-gray-300 border mx-5 bg-white rounded-md cursor-pointer my-0 sm:my-4 pt-5 pb-2 px-2" key={index}>
                                                    <img src={imageUrl} alt="movie" className="w-full rounded-md" />

                                                    <button className='flex items-center justify-center bg-pink-utility rounded-md text-white gap-1 py-2 px-3 hover:bg-transparent hover:text-main-utility transition-all border-pink-utility border w-full'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                        </svg>
                                                        </span> Generate Cards</button>
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </article>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-16 sm:gap-20 w-full text-center pb-20 pt-10 px-5'>
                                <article className="w-full">
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        partialVisible={false}
                                        dotListClass="custom-dot-list-style"
                                    >
                                        {[img8, img7, img6, img5, img4, img3, img2, img1].map((imageUrl, index) => {
                                            return (
                                                <div className="shadow-md shadow-gray-300 border mx-5 bg-white rounded-md cursor-pointer my-0 sm:my-4 pt-5 pb-2 px-2" key={index}>
                                                    <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                                    <button className='flex items-center justify-center bg-pink-utility rounded-md text-white gap-1 py-2 px-3 hover:bg-transparent hover:text-main-utility transition-all border-pink-utility border w-full'>
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                        </svg>
                                                        </span> Generate Cards</button>
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </article>
                            </div>
                        </section>
                        {/* @@@@@@@@ */}
                    </div>
                </section >
                <Footer />
            </main >
        </>
    );
}
