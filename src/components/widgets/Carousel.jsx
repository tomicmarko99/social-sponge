import React, { useEffect, useState } from "react";
import ArrowLight from "../../assets/arrow-left.png";
import ArrowSolid from "../../assets/arrow-right.png";
import Img1 from "../../assets/slider-img-1.png";
import Img2 from "../../assets/slider-img-2.png";
import Img3 from "../../assets/slider-img-3.png";
import Img4 from "../../assets/slider-img-4.png";
import Img5 from "../../assets/slider-img-5.png";

const Carousel = () => {
  const slides = [
    {
      url: Img1,
      alt: "Living Room",
    },
    {
      url: Img2,
      alt: "Living Room",
    },
    {
      url: Img3,
      alt: "Living Room",
    },
    {
      url: Img4,
      alt: "Living Room",
    },
    {
      url: Img5,
      alt: "Living Room",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const currentIndexFormatted = (currentIndex + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const SlidesLength = slides.length.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  useEffect(() => {
    if (currentIndex === 0) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }

    if (currentIndex === slides.length - 1) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    if (!isFirst) {
      setCurrentIndex(newIndex);
    }
  };

  const nextSlide = () => {
    const newIndex = isLast ? 0 : currentIndex + 1;
    if (!isLast) {
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full m-auto py-16 relative group">
      <div className=" w-full h-full duration-500">
        <img
          src={slides[currentIndex].url}
          alt={`Social Spogne - ${slides[currentIndex].alt}`}
          className="w-full"
        />
      </div>

      <div className="text-[12px] md:text-[36px] text-[#fff] font-[500] w-full py-[5px] md:py-[25px] px-[20px] absolute -translate-y-[100%] flex justify-center">
        <div className="max-w-[1680px] w-full md:px-[145px] flex flex-col gap-[10px] md:gap-[20px]">
          <div className="w-full flex justify-between items-center">
            <div>
              {currentIndexFormatted}/
              <span className="text-[.6em]">{SlidesLength}</span>
            </div>
            <div className="flex gap-[15px] md:gap-[30px]">
              <button
                onClick={prevSlide}
                className="w-[24px] flex justify-start items-center"
              >
                {isFirst ? (
                  <img
                    src={ArrowLight}
                    alt="arrow-left"
                    className="w-[20px] md:w-auto"
                  />
                ) : (
                  <img
                    src={ArrowSolid}
                    alt="arrow-left"
                    className="rotate-180 w-[20px] md:w-auto"
                  />
                )}
              </button>
              <button
                onClick={nextSlide}
                className="w-[24px] flex justify-end items-center"
              >
                {isLast ? (
                  <img
                    src={ArrowLight}
                    alt="arrow-right"
                    className="rotate-180 w-[20px] md:w-auto"
                  />
                ) : (
                  <img
                    src={ArrowSolid}
                    alt="arrow-right"
                    className="w-[20px] md:w-auto"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="w-full h-[3px] md:h-[5px] bg-[#fff] bg-opacity-[60%] flex">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="w-full text-2xl cursor-pointer opacity-[100%]"
              >
                <div
                  className={`w-full h-[3px] md:h-[5px] ${
                    slideIndex === currentIndex ? "bg-sunglow" : null
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
