// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import img1 from '../Images/img1.webp'
// import img2 from '../Images/img2.webp'
// import img3 from '../Images/img3.webp'
// import img4 from '../Images/img4.webp'
// import img5 from '../Images/img5.webp'
// import img6 from '../Images/img6.webp'
// import img7 from '../Images/img7.webp'
// import img8 from '../Images/img8.webp'

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4,
//         slidesToSlide: 1
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 768 },
//         items: 3,
//         slidesToSlide: 1
//     },
//     mobile: {
//         breakpoint: { max: 767, min: 464 },
//         items: 2,
//         slidesToSlide: 1
//     }
// };
// const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8];

// const Slider = () => {
//     return (
//         <div className="parent">
//             <Carousel
//                 responsive={responsive}
//                 // autoPlay={true}
//                 // swipeable={true}
//                 // draggable={true}
//                 // showDots={true}
//                 infinite={true}
//                 partialVisible={false}
//                 dotListClass="custom-dot-list-style"
//             >
//                 {sliderImages.map((imageUrl, index) => {
//                     return (
//                         <div className="slider py-5 mx-5" key={index}>
//                             <img src={imageUrl} alt="movie" className="w-full rounded-md" />
//                         </div>
//                     );
//                 })}
//             </Carousel>
//         </div>
//     );
// };

// export default Slider;






import React, { useState } from 'react';

import student1 from '../Images/student1.webp'
import student2 from '../Images/student2.webp'
import student3 from '../Images/student3.webp'


const images = [
    student1,
    student2,
    student3,
    student1,
    student2,
    student3,
    student1,
    student2,
    student3
];

const Test = () => {
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        if (startIndex < images.length - 5) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen relative">
            {startIndex > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md z-10"
                >
                    Prev
                </button>
            )}
            <div className="flex space-x-4 overflow-hidden">
                {images.slice(startIndex, startIndex + 5).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="max-w-xs cursor-pointer hover:opacity-75 transition-opacity duration-300"
                        onClick={() => console.log(`Clicked image ${startIndex + index}`)}
                    />
                ))}
            </div>
            {startIndex < images.length - 5 && (
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md z-10"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Test;

// //   'https://via.placeholder.com/500x300?text=Image+1',
// //   'https://via.placeholder.com/500x300?text=Image+2',
// //   'https://via.placeholder.com/500x300?text=Image+3',
// //   'https://via.placeholder.com/500x300?text=Image+4',
// //   'https://via.placeholder.com/500x300?text=Image+5',
// //   'https://via.placeholder.com/500x300?text=Image+6',
// //   'https://via.placeholder.com/500x300?text=Image+7',
// //   'https://via.placeholder.com/500x300?text=Image+8',
// //   'https://via.placeholder.com/500x300?text=Image+9',
// //   'https://via.placeholder.com/500x300?text=Image+10',




{/* <section className='flex items-center justify-center'>
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
</section> */}