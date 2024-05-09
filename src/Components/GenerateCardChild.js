import React from 'react'
import img1 from '../Images/img1.webp'
import img2 from '../Images/img2.webp'
import img3 from '../Images/img3.webp'
import img4 from '../Images/img4.webp'
import img5 from '../Images/img5.webp'
import img6 from '../Images/img6.webp'
import img7 from '../Images/img7.webp'
import img8 from '../Images/img8.webp'

export default function GenerateCardChild() {
    return (
        <div className='gap-6 mx-auto pr-5 w-[75%] pt-3 mb-10'>
            <div className='flex flex-wrap gap-6'>
                {[img1, img2, img3, img4, img5, img6, img7, img8, img4, img7, img1, img5, img2, img3, img8, img6, img1, img2].map((item, index) => (
                    <div className='flex items-center flex-col w-44 h-60 border rounded-md mb-12'>
                        <img src={item} alt="movie" className="rounded-md w-full h-full" />
                        <button className='flex items-center justify-center hover:bg-pink-utility rounded-xl text-pink-utility hover:text-white gap-1 py-2 px-3 bg-white duration-150 border-pink-utility transition-all border w-full mt-2'>Generate</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
