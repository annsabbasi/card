import React from 'react'

export default function BookAd() {
    return (
        <>
            <div className='gap-6 mx-auto pr-5 w-[75%] pt-3 mb-10'>
                <section className='flex items-center flex-col gap-5'>
                    <div className='flex items-center justify-center flex-col gap-4 w-full'>
                        <h1 className='text-gray-700 text-2xl self-start font-text-shadow-italic font-bold'>Tell Us About Them</h1>
                        <div className='border py-4 px-6 flex items-center justify-between w-full bg-gray-100 border-gray-700 rounded-md'>
                            <div className='border border-gray-400 flex items-center justify-center h-36 w-36 rounded-md bg-white cursor-pointer hover:opacity-70 font-text-shadow-italic text-xl'>Upload Photo</div>
                            <div className='flex items-start justify-center gap-12'>
                                <div className='flex flex-col gap-6'>
                                    <input type="text" placeholder='Full Name' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 placeholder:font-text-shadow-italic font-semibold' />
                                    <input type="text" placeholder='Birthday' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 placeholder:font-text-shadow-italic font-semibold' />
                                </div>
                                <div>
                                    <input type="text" placeholder='Releationship' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 placeholder:font-text-shadow-italic font-semibold' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <main className='flex items-center justify-center flex-col w-full gap-14'>
                        <div className='w-full flex items-center justify-between mt-5'>
                            <button className='w-fit md:w-[30%] bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-opacity transition-all duration-200  font-text-shadow-italic font-semibold'>Male</button>
                            <button className='w-fit md:w-[30%] bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-opacity transition-all duration-200  font-text-shadow-italic font-semibold'>Female</button>
                        </div>

                        <div className='self-start w-full flex flex-col gap-4'>
                            <h1 className='text-gray-700 text-2xl font-text-shadow-italic font-bold'>Character Triats</h1>
                            <div className='flex flex-wrap gap-2'>
                                {['Kind', 'Loving', 'Generous', 'Funny', 'Adventorous', 'Compassionate', 'Spontanious', 'Patient', 'Gentle'].map((item, index) => (
                                    <button className='flex items-center w-[15%] justify-center rounded-md text-pink-utility gap-1 py-2 px-3 hover:bg-pink-opacity hover:border-pink-urility transition-all duration-150 border border-pink-utility mb-1 font-text-shadow-italic text-xl font-semibold' key={index}>{item}</button>
                                ))}
                            </div>
                        </div>
                        <div className='border py-4 px-6 flex items-center justify-between w-full bg-gray-100 border-gray-700 rounded-md'><h1 className='text-gray-700 text-2xl font-text-shadow-italic font-bold'>Occation</h1></div>

                        <div className='self-start w-full flex flex-col gap-4'>
                            <h1 className='text-gray-700 text-2xl font-text-shadow-italic font-bold'>Address</h1>
                            <div className='border py-4 px-6 flex items-center justify-between flex-col w-full bg-gray-100 border-gray-700 rounded-md gap-8'>
                                <div className='w-full'>
                                    <input type="text" placeholder='Street Address' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-full placeholder:font-text-shadow-italic font-semibold' />
                                </div>
                                <div className='flex items-center gap-4 justify-between w-full'>
                                    <input type="text" placeholder='City' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-[25%] placeholder:font-text-shadow-italic font-semibold' />
                                    <input type="text" placeholder='State' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-[25%] placeholder:font-text-shadow-italic font-semibold' />
                                    <input type="text" placeholder='Zip Code' className='border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-[25%] placeholder:font-text-shadow-italic font-semibold' />
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between mt-5'>
                                <button className='w-fit md:w-[30%] bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200  font-text-shadow-italic font-semibold'>Save</button>
                                <button className='w-fit md:w-[30%] bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200  font-text-shadow-italic font-semibold'>Cancel</button>
                                <button className='w-fit md:w-[30%] bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200  font-text-shadow-italic font-semibold'>Save & Generate</button>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </>
    )
}
