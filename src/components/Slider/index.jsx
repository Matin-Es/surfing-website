import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { SliderData } from "../../data/SliderData";
import Image from "next/image";

//Slider component

const SliderImage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // console.log(current);
  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  //changes slider every 5 second

  //goes to next slider
  const nextSlide = () => {
    setCurrent((prev) => (current === length - 1 ? 0 : prev + 1));
  };

  //goes to previous slider
  const prevSlide = () => {
    setCurrent((prev) => (current === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      nextSlide();
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <section className="slider relative left-32 top-0">
      <div className="opacity-10">
        <VscChevronLeft className="left-arrow" onClick={prevSlide} />
      </div>

      <div className="text-blue-400 inline-flex font-semibold absolute top-96 mt-72 -left-56 ">
        {current}
        <div className="text-gray-700">
          <span className="opacity-10 mx-1">/</span>
          {slides.length - 1}
        </div>
      </div>
      <div className="opacity-10">
        <VscChevronRight className="right-arrow" onClick={nextSlide} />
      </div>

      {/* gets data from fake db and maps it through elements  */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <div>
                  <Image
                    src={slide.image}
                    width={1135}
                    height={684}
                    alt={slide.alt}
                    className="image"
                  />
                </div>

                <div className="absolute z-10 top-64 -left-60 ml-14">
                  <p className="tracking-headerLetterSpacing text-blue-400 font-leagueSpartan">
                    {slide.topText}
                  </p>
                  <h2 className="text-6xl font-PlayfairBold font-bold mt-5">
                    {slide.middleText}
                  </h2>
                  <p className="mt-5 text-gray-400 font-Poppins font-semibold">
                    <p>{slide.bottomText1}</p>
                    <p>{slide.bottomText2}</p>
                    <p>{slide.bottomText3}</p>
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SliderImage;
