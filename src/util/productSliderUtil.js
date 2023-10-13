import { useEffect, useRef } from "react";

export const productSliderUtil = () => {
  const sliderRef = useRef(null);
  const slideItemRef = useRef(null);

  useEffect(() => {
    const slider = document.querySelector(`${"#product-slider"}`);
    const slideItem = document.querySelector("#product-slide-item");

    sliderRef.current = slider;
    slideItemRef.current = slideItem;
  }, []);

  const scrollToPreviousSlide = () => {
    const slider = sliderRef.current;
    //make the slider scroll only on click
    slider.classList.add("overflow-auto");

    slider.scrollTo({
      left: slider.scrollLeft - slider.offsetWidth,
      behavior: "smooth",
    });

    if (slider.scrollLeft === 0) {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth",
      });
    }

    //remove the scroll after it finished scrolling
    setTimeout(() => {
      slider.classList.remove("overflow-x-auto");
    }, 1000);
  };

  const scrollToNextSlide = () => {
    const slider = sliderRef.current;
    //make the slider scroll only on click
    slider.classList.add("overflow-x-auto");

    slider.scrollTo({
      left: slider.scrollLeft + slider.offsetWidth,
      behavior: "smooth",
    });

    const maxScrollLeft = slider.scrollWidth - slider.offsetWidth;

    if (slider.scrollLeft >= maxScrollLeft) {
      slider.scrollTo({
        left: slider.scrollLeft - maxScrollLeft,
        behavior: "smooth",
      });
    }

    //remove the scroll after it finished scrolling
    setTimeout(() => {
      slider.classList.remove("overflow-x-auto");
    }, 1000);
  };

  return {
    scrollToPreviousSlide,
    scrollToNextSlide,
  };
};
