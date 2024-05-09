import React from 'react'

export default function SubPlan() {
    return (
        <div className='gap-6 mx-auto pr-5 w-[75%] pt-3 mb-10'>
            <section section className='flex items-center justify-center gap-10 mt-10'>
                <div className='border py-5 px-4 rounded-md flex items-center flex-col w-80'>
                    <h2 className='border-b border-gray-700 text-3xl pb-2 text-gray-700 text-center leading-10 mb-5'>3 Cards per Month for $12.50</h2>
                    <div className=''>
                        <ul className='pl-4 list-disc text-[1.3rem] flex flex-col gap-2 mb-10 mt-5 text-gray-700 font-normal'>
                            <li className='mb-2'>Cancel Anytime</li>
                            <li className='mb-2'>Unlimited Access</li>
                            <li className='mb-2'>Event Notifications</li>
                            <li className='mb-2'>Mailing Costs Included</li>
                        </ul>
                        <button className='w-full bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200  font-text-shadow-italic font-semibold'>Subscribe</button>
                    </div>
                </div>
                <div className='border py-5 px-4 rounded-md flex items-center flex-col w-80'>
                    <h2 className='border-b border-gray-700 text-3xl pb-2 text-gray-700 text-center leading-10 mb-5'>3 Cards per Month for $12.50</h2>
                    <div className=''>
                        <ul className='pl-4 list-disc text-[1.3rem] flex flex-col gap-2 mb-10 mt-5 text-gray-700 font-normal'>
                            <li className='mb-2'>Cancel Anytime</li>
                            <li className='mb-2'>Unlimited Access</li>
                            <li className='mb-2'>Event Notifications</li>
                            <li className='mb-2'>Mailing Costs Included</li>
                        </ul>
                        <button className='w-full bg-white border-pink-utility border text-pink-utility rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200  font-text-shadow-italic font-semibold'>Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
