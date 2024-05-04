import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const previousImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setImageIndex(slideIndex);
  };

  //  # Changing Image Automatically after some delay
  // useEffect(()=>{
  //      const timer = setTimeout(()=>{
  //         setImageIndex((prevIndex)=> (prevIndex + 1) % imageUrls.length )
  //      },2000)

  //      return () => clearTimeout(timer)

  // },[imageIndex])

  return (
    <section className="relative w-full h-full py-16 px-4 group">
      <div
        style={{ backgroundImage: `url(${imageUrls[imageIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={previousImage} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextImage} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {imageUrls.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
