import React from 'react'
import bglogo from '../Images/logos/bg-logo.png'

export default function Footer() {
    return (
        <>
            {/* FOOTER */}
            < footer className='bg-slate-800 flex items-center justify-center' >
                <article className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 md:gap-20 max-w-screen-xl w-full py-24 px-10'>
                    <div className='w-fit'>
                        <span className='cursor-pointer'><img src={bglogo} alt="" className='w-32 md:w-60 mb-10' /></span>
                        <button className='w-full bg-pink-utility text-white font-semibold rounded-full py-3 px-3 text-sm md:text-base border-pink-utility border-2 hover:bg-white hover:text-pink-utility transition-all duration-200 uppercase'>Contact Us</button>
                        <span className='flex items-center justify-center mt-6 gap-5'>
                            <span className='cursor-pointer fill-white hover:scale-110 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='w-6 h-6 sm:w-8 sm:h-8'>    <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" /></svg>
                            </span>
                            <span className='cursor-pointer fill-white hover:scale-110 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='w-6 h-6 sm:w-8 sm:h-8'><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
                            </span>
                            <span className='cursor-pointer fill-white hover:scale-110 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='w-6 h-6 sm:w-8 sm:h-8'><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                            </span>
                        </span>
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
            </ footer >
        </>
    )
}
