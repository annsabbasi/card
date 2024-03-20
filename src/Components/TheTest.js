import React, { useState, useEffect } from 'react';
import student1 from '../Images/student1.webp';
import student2 from '../Images/student2.webp';
import student3 from '../Images/student3.webp';

function TheTest() {
    const [slide, setSlide] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = Array.from(Array(3).keys()).map((_, index) => ({
            src: index === 0 ? student1 : index === 1 ? student2 : student3,
            className: index === 0 ? 'carousel__photo initial' : 'carousel__photo'
        }));
        setItems(items);
    }, []);

    const moveNext = () => {
        if (slide === items.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    };

    const movePrev = () => {
        if (slide === 0) {
            setSlide(items.length - 1);
        } else {
            setSlide(slide - 1);
        }
    };

    useEffect(() => {
        const newItems = items.map((item, index) => {
            if (index === slide) return { ...item, className: 'carousel__photo active' };
            if (index === (slide + 1) % items.length) return { ...item, className: 'carousel__photo next' };
            if (index === (slide - 1 + items.length) % items.length) return { ...item, className: 'carousel__photo prev' };
            return { ...item, className: 'carousel__photo' };
        });
        setItems(newItems);
    }, [slide, items]);

    return (
        <div className="carousel-wrapper">
            <div className="carousel relative">
                {items.map((item, index) => (
                    <img
                        key={index}
                        className={`${item.className} absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500`}
                        src={item.src}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
                <div className="carousel__button--next absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full cursor-pointer border border-black" onClick={moveNext}></div>
                <div className="carousel__button--prev absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full cursor-pointer border border-black" onClick={movePrev}></div>
            </div>
        </div>
    );
}

export default TheTest;
