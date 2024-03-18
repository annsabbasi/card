import React from 'react'
import pic1 from '../Images/pic1.webp'
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
import bglogo from '../Images/bg-logo.png'
// import Lottie from 'lottie-react';
// import animation1 from '../Images/Animation - 1710576710387.json'
// import animation2 from '../Images/Animation - 1710579831372.json'
// import animation3 from '../Images/Animation - 1710580235250.json'
// import animation4 from '../Images/Animation - 1710580985345.json'

export default function Main() {
    const dataSvg = [
        {
            title: "Generate Your Cards",
            description: "Build your recipients profile, by telling us a bit about them",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16">
                <path className='text-gray-400' strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>)
        },
        {
            title: "We Mail It",
            description: "Based on the profile and message theme, we will generate the cards and messages for you",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16">
                    <path className='text-gray-400' strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            )
        },
        {
            title: "Build your Recipient Profile",
            description: "Pick your favorite cards and based on the event date, we'll mail it for you!",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16">
                    <path className='text-gray-400' strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            )
        }
    ]

    const dataGetCard = [
        {
            title: "4 Greeting Cards",
            description: "4 physical greeting cards every month with custom messages built from your recipients profile",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>)
        },
        {
            title: "Calendar View",
            description: "A Calendar view that shows you all your upcoming occasions for every month",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>)
        },
        {
            title: "Notification Reminders",
            description: "We will send you notification reminders of upcoming events, so you never miss another special moment.",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>)
        },
        {
            title: "Mailed Cards",
            description: "We mail the greeting cards you picked directly to your recipient!",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path className='text-gray-400' stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
            </svg>)
        }
    ]

    const dataTestimonials = [
        {
            title: "Caralynn W.",
            title2: "Bussiness Student",
            description: "“I was failing math and really frustrated. Tutoring helped me understand the material and now I’m at the top of my class.”",
            icon: (<svg viewBox="0 0 198 198" className='w-12 h-12 fill-[#FC5C66] mx-auto'>
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
            icon: (<svg viewBox="0 0 198 198" className='w-12 h-12 fill-[#FC5C66] mx-auto'>
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
            icon: (<svg viewBox="0 0 198 198" className='w-12 h-12 fill-[#FC5C66] mx-auto'>
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

    return (
        <div>
            <section className='landing-main bg-cover bg-center bg-no-repeat flex items-center justify-center relative h-[85vh]'>
                <div className='flex-col mx-auto h-4/5 text-center z-10 mt-16 max-w-screen-2xl'>
                    <h1 className='text-8xl leading-tight my-5 text-white uppercase font-text-comfortaa font-semibold'>Heartfelt MOMENTS MADE EASY</h1>
                    <p className='text-white text-3xl mt-10 mb-8 font-text-shadow-italic'>AI Powered Greeting Cards With A Human Touch</p>
                    <span className='flex items-center justify-between w-3/5 mx-auto'>
                        <button className='w-[30%]  bg-[#FC5C66] text-white font-semibold rounded-md py-4 px-2 text-xl border-[#FC5C66] border-2 hover:bg-white hover:text-[#FC5C66] transition-all duration-200 '>Subscribe</button>
                        <button className='w-[30%]  bg-white border-[#FC5C66] border-2 text-[#FC5C66] font-semibold rounded-md py-4 px-2 text-xl hover:bg-[#FC5C66] hover:text-white transition-all duration-200'>Generate Card</button>
                    </span>
                </div>
            </section>

            <section className='flex items-center justify-center h-auto my-28'>
                <div className='max-w-screen-2xl text-center w-full'>
                    <span>
                        <h2 className='text-5xl font-semibold text-[#364957] mb-5'>How it Works</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-[#FC5C66]' />
                    </span>
                    <article className='flex items-center justify-between gap-10 w-full mt-20'>
                        {dataSvg.map((item, index) => (
                            <div key={index} className='self-center p-5 w-2/6 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300'>
                                <div className='mx-auto p-5 border border-2-[#364957] w-fit rounded-full mb-3'>
                                    {item.icon}
                                </div>
                                <h3 className='text-2xl font-semibold text-[#364957] mb-5'>{item.title}</h3>
                                <p className='text-[#364957] text-xl'>{item.description}</p>
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* REAL GREETINGS CARDS */}
            <section className='flex items-center justify-center bg-slate-50'>
                <div className='flex items-center justify-center gap-12 w-full'>
                    <article className='w-full border'>
                        <span className=''>
                            <img src={pic1} alt="" className='h-[80vh] w-full object-cover' />
                        </span>
                    </article>

                    <article className='w-full'>
                        <div className='flex flex-col gap-10'>
                            <span className=''>
                                <h2 className='text-5xl font-semibold text-[#364957] mb-5'>Real Greetings Cards</h2>
                                <hr className='h-[3px] w-[20%] rounded-lg bg-[#FC5C66]' />
                            </span>

                            <p className='text-[#364957] text-lg'>An amazing collection of high-quality card made from 100% recycled material.</p>
                            <p className='text-[#FC5C66] text-2xl font-medium'>Get our special offer - 30% off</p>
                            <button className='w-[40%]  bg-[#FC5C66] text-white font-semibold rounded-full py-4 px-2 text-lg border-[#FC5C66] border-2 hover:bg-white hover:text-[#FC5C66] transition-all duration-200 uppercase'>Get Started Today!</button>
                        </div>
                    </article>
                </div>
            </section>

            {/* WHAT DO YOU GET */}
            <section className='flex items-center justify-center h-[90vh]'>
                <div className='max-w-screen-2xl text-center w-full'>
                    <span>
                        <h2 className='text-5xl font-semibold text-[#364957] mb-5'>What Do You Get?</h2>
                    </span>
                    <article className='flex items-center gap-10 w-full mt-20'>
                        {dataGetCard.map((item, index) => (
                            <div key={index} className='flex items-center flex-col justify-center px-2 self-center py-5 h-72 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300'>
                                <div className='mx-auto p-5 w-fit rounded-full mb-3'>
                                    {item.icon}
                                </div>
                                <h3 className='text-2xl font-semibold text-[#364957] mb-4'>{item.title}</h3>
                                <p className='text-[#364957] text-base'>{item.description}</p>
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className='flex items-center justify-center bg-slate-50'>
                <div className='flex items-center justify-center flex-col gap-20 max-w-screen-2xl text-center w-full py-24'>
                    <span className='w-full'>
                        <h2 className='text-5xl font-semibold text-[#364957] mb-5'>Testimonials</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-[#FC5C66]' />
                    </span>
                    <article className='flex items-stretch justify-center gap-10 p-5 w-full'>
                        {dataTestimonials.map((item, index) => (
                            <div key={index} className='height-here text-center w-1/4  py-10 bg-white px-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300'>
                                <div className='rounded-full relative'><img className='absolute -top-20 rounded-full w-28 h-28 left-1/3' src={item.student} alt="" /></div>
                                <article>
                                    <div className='mt-28'>
                                        <span className='text-center'>
                                            {item.icon}
                                        </span>
                                        <p className='text-[#364957] text-base my-4'>{item.description}</p>
                                        <h3 className='text-2xl text-[#364957] font-semibold mb-2 mt-10'>{item.title}</h3>
                                        <h4 className='text-3xl text-[#364957] font-normal'>{item.title2}</h4>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* TRENDING CARDS */}
            <section className='flex items-center justify-center'>
                <div className='flex items-center justify-center flex-col gap-20 max-w-screen-2xl text-center w-full py-24 pb-36'>
                    <span className='w-full'>
                        <h2 className='text-5xl font-semibold text-[#364957] mb-5'>Trending Cards</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-[#FC5C66]' />
                    </span>
                    <article className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
                            <div key={index} className='card-hover relative bg-white shadow-md shadow-gray-600 cursor-pointer'>
                                <img src={img} alt={`Trending Card ${index}`} />
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/*  */}
            <footer className='bg-slate-800 flex items-center justify-center'>
                <article className='flex justify-between gap-20 max-w-screen-2xl w-full py-24 px-10'>
                    <div className='w-fit'>
                        <span className='cursor-pointer'><img src={bglogo} alt="" className='w-60 mb-10' /></span>
                        <button className='w-fit bg-[#FC5C66] text-white font-semibold rounded-full py-4 px-10 text-lg border-[#FC5C66] border-2 hover:bg-white hover:text-[#FC5C66] transition-all duration-200 uppercase'>Contact Us</button>
                    </div>
                    <div>
                        <ul className='text-xl text-gray-300 font-normal'>
                            <li className='mb-4'><a href="/" className='hover:underline'>About Us</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Browse Cards</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Plans</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Bolg</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>User Portal</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-xl text-gray-300 font-normal'>
                            <li className='mb-4'><a href="/" className='hover:underline'>(555) 555-5555</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>example@myemail.com</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Street Address,</a></li>
                            <li className='mb-4'><a href="/" className='hover:underline'>Zip Code,  City</a></li>
                        </ul>
                    </div>

                    <div>
                        <span className='flex items-center gap-5 fill-white mb-7 cursor-pointer'>
                            <svg className='fill-white w-12 h-12' viewBox="0 0 24 24">
                                <path className='fill-white' fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#000000" />
                            </svg>
                            <p className='text-xl font-semibold text-gray-300'>Whats App</p>
                        </span>

                        <span className='flex items-center gap-5 fill-white mb-7 cursor-pointer'>
                            <svg className='w-12 h-12'
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
                            <p className='text-xl font-semibold text-gray-300'>Android</p>
                        </span>

                        <span className='flex items-center gap-5 fill-white mb-7 cursor-pointer'>
                            <svg viewBox="0 0 512 512" className='w-12 h-12'>
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
                            <p className='text-xl font-semibold text-gray-300'>IOS</p>
                        </span>
                    </div>
                </article>
            </footer>
        </div>
    )
}
