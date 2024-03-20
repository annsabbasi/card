import React from 'react'
import logo from '../Images/logos/logo.webp'

export default function Navbar() {
    return (
        <>
            <header className='shadow-md shadow-gray-200 py-3'>
                <nav className='flex items-center justify-between max-w-screen-xl mx-auto px-5'>
                    <span className='w-40 sm:w-[20%] md:w-[12%] cursor-pointer'><img src={logo} alt="" className='w-fit' /></span>
                    <div className='w-1/2'>
                        <ul className='hidden md:flex items-center justify-between text-lg text-gray-500 font-normal'>
                            <li className='relative theli pb-[2px]'>
                                <a href="/">About Us</a>
                                <span className='absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transition-transform transform origin-left'></span>
                            </li>
                            <li className='relative theli pb-[2px]'>
                                <a href="/">Browse Cards</a>
                                <span className='absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transition-transform transform origin-left'></span>
                            </li>
                            <li className='relative theli pb-[2px]'>
                                <a href="/">Plans</a>
                                <span className='absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transition-transform transform origin-left'></span>
                            </li>
                            <li className='relative theli pb-[2px]'>
                                <a href="/">Blog</a>
                                <span className='absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transition-transform transform origin-left'></span>
                            </li>
                            <li className='relative theli pb-[2px]'>
                                <a href="/">User Portal</a>
                                <span className='absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transition-transform transform origin-left'></span>
                            </li>
                        </ul>
                    </div>


                    <span className='flex items-center gap-5'>
                        <span className='cursor-pointer fill-[#FC5C66] hover:scale-110 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='w-6 h-6 sm:w-8 sm:h-8'>    <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" /></svg>
                        </span>
                        <span className='cursor-pointer fill-[#FC5C66] hover:scale-110 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='w-6 h-6 sm:w-8 sm:h-8'><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
                        </span>
                        <span className='cursor-pointer fill-[#FC5C66] hover:scale-110 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='w-6 h-6 sm:w-8 sm:h-8'><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                        </span>
                    </span>

                    {/* HAMBURGER */}
                    <span className='block md:hidden ml-12 sm:ml-24'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#FC5C66] w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </span>
                </nav>
            </header>
        </>
    )
}