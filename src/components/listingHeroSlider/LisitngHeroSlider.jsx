import { useEffect, useRef } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { listingHeroSliderUtil } from "../../util/listingHeroSliderUtil";
import { listingHeroSliderData } from "../../data/listingPage/listingHeroSliderData";
import SliderImages from "./SliderImages";

const LisitngHeroSlider = () => {
  const { scrollToPreviousSlide, scrollToNextSlide } = listingHeroSliderUtil();
  const images = listingHeroSliderData;

  useEffect(() => {
    const slider = document.querySelector("#listing-slider");

    const handleScroll = (event) => {
      event.preventDefault();
    };

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="template" className="1400:h-[328px] relative overflow-hidden">
      <div
        id="buttons"
        className="text-[--white] text-xsm 500:text-md md:text-xl lg:text-[22px] border"
      >
        <button
          id="previous"
          onClick={scrollToPreviousSlide}
          className="absolute top-1/2 -translate-y-1/2 rounded-r-full bg-[#252931] p-1 -left-1 md:p-[5px] lg:-left-2 lg:p-2"
        >
          <BiSolidChevronLeft />
        </button>

        <button
          id="next"
          onClick={scrollToNextSlide}
          className="absolute top-1/2 -translate-y-1/2 rounded-l-full bg-[#252931] p-1 -right-1 md:p-[5px] lg:-right-2 lg:p-2"
        >
          <BiSolidChevronRight />
        </button>
      </div>

      <div className="flex" id="listing-slider">
        {images.map((data, index) => (
          <SliderImages key={index} src={data.img} alt={data.alt} id="lisiting-slide-item" />
        ))}
      </div>
    </section>
  );
};

export default LisitngHeroSlider;
