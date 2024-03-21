import React from 'react'
import pic1 from '../Images/pic1.webp'
import bglogo from '../Images/logos/bg-logo.png'

import student1 from '../Images/student1.webp'
import student2 from '../Images/student2.webp'
import student3 from '../Images/student3.webp'

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

export default function Main() {
    const dataSvg = [
        {
            title: "Generate Your Cards",
            description: "Build your recipients profile, by telling us a bit about them",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-11 md:w-16 h-11 md:h-16">
                <path className='text-gray-400' strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>)
        },
        {
            title: "We Mail It",
            description: "Based on the profile and message theme, we will generate the cards and messages for you",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-11 md:w-16 h-11 md:h-16">
                    <path className='text-gray-400' strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            )
        },
        {
            title: "Build your Recipient Profile",
            description: "Pick your favorite cards and based on the event date, we'll mail it for you!",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-11 md:w-16 h-11 md:h-16">
                    <path className='text-gray-400' strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            )
        }
    ]

    const dataGetCard = [
        {
            title: "4 Greeting Cards",
            description: "4 physical greeting cards every month with custom messages built from your recipients profile",
            icon: (<svg className='w-12 md:w-16' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>)
        },
        {
            title: "Calendar View",
            description: "A Calendar view that shows you all your upcoming occasions for every month",
            icon: (<svg className='w-12 md:w-16' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>)
        },
        {
            title: "Notification Reminders",
            description: "We will send you notification reminders of upcoming events, so you never miss another special moment.",
            icon: (<svg className='w-12 md:w-16' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>)
        },
        {
            title: "Mailed Cards",
            description: "We mail the greeting cards you picked directly to your recipient!",
            icon: (<svg className='w-12 md:w-16' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
            </svg>)
        }
    ]


    const dataTestimonials = [
        {
            title: "Caralynn W.",
            title2: "Bussiness Student",
            description: "“I was failing math and really frustrated. Tutoring helped me understand the material and now I’m at the top of my class.”",
            icon: (<svg viewBox="0 0 198 198" className='w-10 md:w-12 h-10 md:h-12 fill-[#FC5C66] mx-auto'>
                <g>
                    <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"/>
                    <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"/>
                </g>
            </svg>),
            student: student1
        },
        {
            title: "Brian R.",
            title2: "Psychology Student",
            description: "“You really helped me through Basic Chemistry, and this enabled me to get into the program that I really wanted! I can't thank you enough.\"",
            icon: (<svg viewBox="0 0 198 198" className='w-10 md:w-12 h-10 md:h-12 fill-[#FC5C66] mx-auto'>
                <g>
                    <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"/>
                    <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"/>
                </g>
            </svg>),
            student: student2
        },
        {
            title: "Rachel L.",
            title2: "Science Student",
            description: "“My tutoring sessions were easy and fun. I did the Small Group program, and highly recommend it for anyone who learns better with others.”",
            icon: (<svg viewBox="0 0 198 198" className='w-10 md:w-12 h-10 md:h-12 fill-[#FC5C66] mx-auto'>
                <g>
                    <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"/>
                    <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"/>
                </g>
            </svg>),
            student: student3
        },
    ]

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
        <div>
            <section className='landing-main bg-cover bg-center bg-no-repeat flex items-center justify-center relative h-auto'>
                <div className='flex-col md:max-w-6xl max-w-3xl mx-auto h-4/5 text-center z-10 my-12 md:my-20 px-2 sm:px-0'>
                    <h1 className='text-[2.7rem] md:text-7xl leading-snug md:leading-tight my-5 text-white uppercase font-text-comfortaa font-semibold'>Heartfelt MOMENTS MADE EASY</h1>
                    <p className='text-white md:text-3xl text-2xl mt-5 md:mt-10 mb-8 font-text-shadow-italic'>AI Powered Greeting Cards With A Human Touch</p>
                    <span className='flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-between w-3/5 mx-auto'>
                        <button className='w-fit sm:w-[30%]  bg-pink-utility text-white font-semibold rounded-md py-2 px-4 sm:px-2 text-lg md:text-xl border-pink-utility border-2 hover:bg-white hover:text-pink-utility transition-all duration-200 '>Subscribe</button>
                        <button className='w-fit md:w-[30%] bg-white border-pink-utility border-2 text-pink-utility font-semibold rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200'>Generate Card</button>
                    </span>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className='flex items-center justify-center h-auto my-16 md:my-20 px-4 md:px-0'>
                <div className='max-w-screen-xl text-center w-full'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-main-utility mb-5'>How it Works</h2>
                    <hr className='h-[3px] w-[10%] md:w-[10%] mx-auto rounded-lg bg-pink-utility' />
                    <div className='grid grid-cols-1  sm:grid-cols-3 gap-12 sm:gap-2 md:gap-8 mt-12 md:mt-20'>
                        {dataSvg.map((item, index) => (
                            <div key={index} className='w-4/5 mx-auto sm:w-full p-3 md:p-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-100 h-68 sm:h-76 hover:border border-transparent border'>
                                <div className='mx-auto p-5 border border-2-[#364957] w-fit rounded-full mb-3'>
                                    {item.icon}
                                </div>
                                <h3 className='text-lg md:text-2xl font-semibold h-10 sm:h-16 text-main-utility mt-4 mb-3'>{item.title}</h3>
                                <p className='text-main-utility text-base'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REAL GREETINGS CARDS */}
            <section className='flex items-center justify-center bg-slate-50'>
                <div className='flex-col sm:flex-row flex items-center justify-center gap-0 md:gap-12 w-full'>
                    <article className='w-full border'>
                        <span className=''>
                            <img src={pic1} alt="" className='h-[80vh] md:h-[80vh] w-full object-cover' />
                        </span>
                    </article>

                    <article className='w-full px-5 py-10 sm:py-0 sm:pb-10'>
                        <div className='flex flex-col gap-5 sm:gap-10'>
                            <span className=''>
                                <h2 className='text-3xl md:text-5xl font-semibold text-main-utility mb-2 sm:mb-5'>Real Greetings Cards</h2>
                                <hr className='h-[3px] w-[20%] rounded-lg bg-pink-utility' />
                            </span>
                            <p className='text-main-utility text-base md:text-lg'>An amazing collection of high-quality card made from 100% recycled material.</p>
                            <p className='text-pink-utility text-lg md:text-2xl font-medium'>Get our special offer - 30% off</p>
                            <button className='w-fit md:w-[80%] lg:w-[40%] bg-pink-utility text-white font-semibold rounded-full py-3 px-7 md:px-2 text-sm md:text-base border-pink-utility border-2 hover:bg-white hover:text-pink-utility transition-all duration-200 uppercase'>Get Started Today!</button>
                        </div>
                    </article>
                </div>
            </section>

            {/* WHAT DO YOU GET */}
            <section className='flex items-center justify-center h-auto my-16 md:my-12'>
                <div className='max-w-screen-xl text-center w-full'>
                    <span>
                        <h2 className='text-4xl md:text-5xl font-semibold text-main-utility'>What Do You Get?</h2>
                    </span>
                    <article className='flex flex-col sm:flex-row items-center gap-12 sm:gap-1 md:gap-10 mt-10 md:mt-20'>
                        {dataGetCard.map((item, index) => (
                            <div key={index} className='flex w-4/5 sm:w-full items-center flex-col justify-between px-2 self-center py-5 h-60 sm:h-72 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-100 border border-transparent'>
                                <div className='mx-auto p-0 md:p-5 w-fit rounded-full mb-3'>
                                    {item.icon}
                                </div>
                                <h3 className='text-xl md:text-2xl font-semibold text-main-utility mb-4'>{item.title}</h3>
                                <p className='text-main-utility text-sm md:text-base'>{item.description}</p>
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className='flex items-center justify-center bg-slate-50'>
                <div className='flex items-center justify-center flex-col gap-12 sm:gap-20 max-w-screen-xl text-center w-full py-16 md:py-20'>
                    <span className='w-full'>
                        <h2 className='text-4xl md:text-5xl font-semibold text-main-utility mb-0 sm:mb-5'>Testimonials</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-pink-utility' />
                    </span>
                    {/* <article className='flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-16 sm:gap-5 md:gap-10 p-5 w-full'> */}
                    <article className='hidden sm:flex items-center sm:items-stretch justify-center gap-16 sm:gap-5 md:gap-10 p-5 w-full'>
                        {dataTestimonials.map((item, index) => (
                            <div key={index} className='height-here text-center w-4/5 sm:w-1/2 md:w-2/5 py-10 bg-white px-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-100 border border-transparent'>
                                <div className='rounded-full relative'><img className='absolute -top-16 md:-top-20 rounded-full w-32 sm:w-24 md:w-28 h-32 sm:h-24 md:h-28 left-[28%] sm:left-1/4 md:left-1/3' src={item.student} alt="" /></div>
                                <article>
                                    <div className='mt-28 sm:mt-20 md:mt-28 flex items-center flex-col justify-between h-72'>
                                        <span className='text-center'>
                                            {item.icon}
                                        </span>
                                        <p className='text-main-utility text-base sm:text-sm md:text-base my-4'>{item.description}</p>
                                        <h3 className='text-lg md:text-xl text-main-utility font-semibold mb-0 sm:mb-2 mt-5 md:mt-10'>{item.title}</h3>
                                        <h4 className='text-xl md:text-2xl text-main-utility font-normal'>{item.title2}</h4>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </article>

                    {/* For the Mobile */}
                    <article className='block sm:hidden w-11/12 mb-5'>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {dataTestimonials.map((item, index) => (
                                <div key={index} className='height-here text-center w-full mt-7 sm:w-1/2 md:w-2/5 py-10 bg-white px-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-100 border '>
                                    <div className='rounded-full relative'><img className='absolute -top-16 md:-top-20 rounded-full w-32 sm:w-24 md:w-28 h-32 sm:h-24 md:h-28 left-[30%] sm:left-1/4 md:left-1/3' src={item.student} alt="" /></div>
                                    <article>
                                        <div className='mt-28 sm:mt-20 md:mt-28 flex items-center flex-col justify-between h-72'>
                                            <span className='text-center'>
                                                {item.icon}
                                            </span>
                                            <p className='text-main-utility text-base sm:text-sm md:text-base my-4'>{item.description}</p>
                                            <h3 className='text-lg md:text-xl text-main-utility font-semibold mb-0 sm:mb-2 mt-5 md:mt-10'>{item.title}</h3>
                                            <h4 className='text-xl md:text-2xl text-main-utility font-normal'>{item.title2}</h4>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </Carousel>
                    </article>
                    {/*  */}
                </div>
            </section >

            {/* TRENDING CARDS */}
            <section section className='flex items-center justify-center' >
                <div className='flex items-center justify-center flex-col gap-16 sm:gap-20 max-w-screen-2xl text-center w-full py-20 px-5'>
                    <span className='w-full'>
                        <h2 className='text-4xl md:text-5xl font-semibold text-main-utility mb-5'>Trending Cards</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-pink-utility' />
                    </span>
                    <article className="w-11/12">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                                return (
                                    <div className="shadow-md shadow-gray-300 border mx-5 my-0 sm:my-4 py-5" key={index}>
                                        <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </article>
                </div>
            </section>

            {/* TODO SECTION */}
            < section className='bg-white dark:bg-gray-900' >
                {/* <section class=" text-gray-700 py-5 h-auto">
                    <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">How can I place an order?</summary>
                                <div class="px-4 pb-4">
                                    <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">What payment methods do you accept?</summary>
                                <div class="px-4 pb-4">
                                    <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">How long does shipping take?</summary>
                                <div class="px-4 pb-4">
                                    <p>Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and delivery can take 3-7 business days within India. You will receive a tracking notification once your order is shipped.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">Can I return a product if I'm not satisfied?</summary>
                                <div class="px-4 pb-4">
                                    <p>Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please contact our customer support at <a href="/" class="underline">example@gmail.com</a> for assistance.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">Do you offer international shipping?</summary>
                                <div class="px-4 pb-4">
                                    <p>Currently, we only provide shipping services within India. However, we may consider expanding our shipping options to international locations in the future. Please stay updated with our website for any changes in shipping destinations.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">What is your customer support contact?</summary>
                                <div class="px-4 pb-4">
                                    <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="/" class="underline">example@gmail.com</a>.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
                                <div class="px-4 pb-4">
                                    <p>You can find our detailed terms and conditions by visiting our
                                        <a href="/" class="underline">Terms of Service</a>
                                        page on our website. It includes information about our policies, user guidelines, and more.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section> */}

                <section class="max-w-screen-xl mx-auto"> 
                    <div class="container px-6 py-12 mx-auto">
                        <h1 class="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Frequently asked questions</h1>

                        <div class="mt-8 space-y-8 lg:mt-12">
                            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                                <button class="flex items-center justify-between w-full">
                                    <h1 class="font-semibold text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>

                                    <span class="text-gray-400 bg-gray-200 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                    </span>
                                </button>

                                <p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                                </p>
                            </div>

                            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                                <button class="flex items-center justify-between w-full">
                                    <h1 class="font-semibold text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance?</h1>

                                    <span class="text-white bg-blue-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                                <button class="flex items-center justify-between w-full">
                                    <h1 class="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>

                                    <span class="text-white bg-blue-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                                <button class="flex items-center justify-between w-full">
                                    <h1 class="font-semibold text-gray-700 dark:text-white">What are your opening house?</h1>

                                    <span class="text-white bg-blue-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                                <button class="flex items-center justify-between w-full">
                                    <h1 class="font-semibold text-gray-700 dark:text-white">What can i expect at my first consultation?</h1>

                                    <span class="text-white bg-blue-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

            {/* FOOTER */}
            < footer className='bg-slate-800 flex items-center justify-center' >
                <article className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 md:gap-20 max-w-screen-xl w-full py-24 px-10'>
                    <div className='w-fit'>
                        <span className='cursor-pointer'><img src={bglogo} alt="" className='w-32 md:w-60 mb-10' /></span>
                        <button className='w-full bg-pink-utility text-white font-semibold rounded-full py-3 px-3 text-sm md:text-base border-pink-utility border-2 hover:bg-white hover:text-pink-utility transition-all duration-200 uppercase'>Contact Us</button>
                    </div>
                    <div>
                        <ul className='text-base md:text-lg text-gray-300 font-normal mt-10 sm:mt-0'>
                            <li className='mb-4'><a href="/" className='hover:underline'>About Us</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Browse Cards</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Plans</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Blog</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>User Portal</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-base md:text-lg text-gray-300 font-normal'>
                            <li className='mb-4'><a href="/" className='hover:underline'>(555) 555-5555</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>example@myemail.com</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Street Address,</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Zip Code,  City</a></li>
                        </ul>
                    </div>

                    <div>
                        <span className='flex items-center gap-3 md:gap-5 mb-7 cursor-pointer group'>
                            <svg className='flex-shrink-0 w-10 md:w-12 h-10 md:h-12 transition-transform transform fill-white group-hover:scale-110' viewBox="0 0 24 24">
                                <path className='fill-white' fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#000000" />
                            </svg>
                            <p className='text-base md:text-lg flex-shrink-0 font-semibold text-gray-300'>Whats App</p>
                        </span>

                        <span className='flex items-center gap-3 md:gap-5 fill-white mb-7 cursor-pointer group'>
                            <svg className='flex-shrink-0 w-10 md:w-12 h-10 md:h-12 transition-transform transform fill-white group-hover:scale-110'
                                viewBox="0 0 512 512">
                                <g>
                                    <path d="M289.8,165.2c-4.1,0-7.4,3.3-7.4,7.4s3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4C297.3,168.5,294,165.2,289.8,165.2z" />
                                    <path d="M230.4,165.2c-4.1,0-7.4,3.3-7.4,7.4s3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4C237.8,168.5,234.5,165.2,230.4,165.2z" />
                                    <path d="M472,0H40C17.9,0,0,17.9,0,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V40C512,17.9,494.1,0,472,0z M180.8,288.2
		c0,8.2-6.7,14.9-14.9,14.9c-8.2,0-14.9-6.7-14.9-14.9v-63.6c0-8.2,6.7-14.9,14.9-14.9c8.2,0,14.9,6.7,14.9,14.9V288.2z
		 M329.5,222.1v10.1v86.6c0,8.7-7,15.7-15.7,15.7h-11.3c0.4,1.3,0.6,2.7,0.6,4.1v0.8v5V370c0,8.2-6.7,14.9-14.9,14.9
		s-14.9-6.7-14.9-14.9v-25.6v-5v-0.8c0-1.4,0.2-2.8,0.6-4.1h-27.6c0.4,1.3,0.6,2.7,0.6,4.1v0.8v5V370c0,8.2-6.7,14.9-14.9,14.9
		s-14.9-6.7-14.9-14.9v-25.6v-5v-0.8c0-1.4,0.2-2.8,0.6-4.1h-11.3c-8.7,0-15.7-7-15.7-15.7v-86.6v-10.1v-12.4h1.1h136.6h1.1
		L329.5,222.1L329.5,222.1z M190.7,199.9c0-21.2,14.2-39.8,35.3-49.6l-2.8-4.2l-2.8-4.1l-6.2-9.3c-0.7-1.1-0.4-2.7,0.7-3.4
		c1.1-0.8,2.7-0.4,3.4,0.7l6.6,9.9l2.8,4.2l2.8,4.2c9-3.5,18.9-5.4,29.5-5.4c10.5,0,20.5,1.9,29.5,5.4l2.8-4.2l2.8-4.2l6.6-9.9
		c0.7-1.1,2.3-1.5,3.4-0.7s1.5,2.3,0.7,3.4l-6.2,9.3l-2.6,4.1l-2.8,4.2c21,9.8,35.2,28.3,35.2,49.6L190.7,199.9L190.7,199.9z
		 M369.1,288.2c0,8.2-6.7,14.9-14.9,14.9c-8.2,0-14.9-6.7-14.9-14.9v-63.6c0-8.2,6.7-14.9,14.9-14.9c8.2,0,14.9,6.7,14.9,14.9V288.2
		z"/>
                                </g>
                            </svg>
                            <p className='text-base md:text-lg font-semibold text-gray-300'>Android</p>
                        </span>

                        <span className='flex items-center gap-3 md:gap-5 fill-white mb-7 cursor-pointer group'>
                            <svg viewBox="0 0 512 512" className='flex-shrink-0 w-10 md:w-12 h-10 md:h-12 transition-transform transform fill-white group-hover:scale-110'>
                                <g id="3e91140ac1bfb9903b91c1b0ca08a1f6">
                                    <path display="inline" d="M260.219,256.096c0,29.737-10.935,53.337-32.042,53.337c-20.909,0-32.23-23.791-32.23-52.761
		c0-27.051,10.169-52.763,32.424-52.763C250.051,203.908,260.219,229.042,260.219,256.096z M511.5,85.667v340.667
		c0,46.842-38.325,85.167-85.167,85.167H85.667C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5
		h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M146.446,223.674h-28.396v106.863h28.396V223.674z M147.404,194.508
		c0-8.827-6.138-15.158-15.347-15.158c-8.827,0-15.16,6.331-15.16,15.158c0,8.633,6.14,15.158,15.16,15.158
		C140.881,209.666,147.404,203.719,147.404,194.508z M289.959,254.946c0-39.333-19.953-74.25-60.823-74.25
		c-38.56,0-62.927,32.424-62.927,76.553c0,42.782,22.061,75.402,61.01,75.402C263.868,332.65,289.959,306.364,289.959,254.946z
		 M395.103,287.946c0-19.379-10.554-33-34.149-43.553c-18.036-8.25-25.33-13.047-25.33-23.6c0-8.25,6.717-16.308,21.683-16.308
		c12.085,0,21.104,3.645,26.286,6.331l5.947-23.217c-6.912-3.454-17.653-6.714-31.659-6.714c-31.851,0-50.842,18.609-50.842,42.787
		c0,19.183,13.814,32.998,36.066,42.59c16.31,7.103,23.412,13.432,23.412,23.986c0,10.933-8.25,18.414-23.986,18.414
		c-11.893,0-24.173-3.644-31.846-8.247l-5.564,23.791c6.903,4.217,21.679,8.251,36.259,8.251
		C375.724,332.459,395.103,313.654,395.103,287.946z">
                                    </path>
                                </g>
                            </svg>
                            <p className='text-base md:text-lg font-semibold text-gray-300'>IOS</p>
                        </span>
                    </div>
                </article>
            </ footer>
        </div >
    )
}