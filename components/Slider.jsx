import React from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="max-w-[70%] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => (
          <div
            key={index}
            className={
              index === current ? `opacity-1 ease-in duration-300` : `opacity-0`
            }
          >
            <FaArrowCircleRight
              onClick={prevSlide}
              className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
            {index === current && (
              <Image
                width="1440"
                height="800"
                objectfit="cover"
                src={slide.image}
                alt="serene"
              />
            )}
            <FaArrowCircleLeft
              onClick={nextSlide}
              className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
