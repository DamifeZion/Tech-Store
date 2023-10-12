import { useEffect, useRef } from "react";

export const listingHeroSliderUtil = () => {
  const sliderRef = useRef(null);
  const slideItemRef = useRef(null);

  useEffect(() => {
    const slider = document.querySelector("#listing-slider");
    const slideItem = document.querySelector("#lisiting-slide-item");

    sliderRef.current = slider;
    slideItemRef.current = slideItem;
  }, []);

  const scrollToPreviousSlide = () => {
    const slider = sliderRef.current;
    const slideItem = slideItemRef.current;
    //make the slider scroll only on click
    slider.classList.add("overflow-auto");

    slider.scrollTo({
      left: slider.scrollLeft - slideItem.offsetWidth,
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
      slider.classList.remove("overflow-auto");
    }, 1000);
  };

  const scrollToNextSlide = () => {
    const slider = sliderRef.current;
    const sliderItem = slideItemRef.current;
    //make the slider sscroll only on click
    slider.classList.add("overflow-auto");

    slider.scrollTo({
      left: slider.scrollLeft + sliderItem.offsetWidth,
      behavior: "smooth",
    });

    if (slider.scrollLeft === slider.scrollWidth - slider.offsetWidth) {
      slider.scrollTo({
        left: -slider.scrollWidth,
        behavior: "smooth",
      });
    }

    //remove the scroll after it finished scrolling
    setTimeout(() => {
      slider.classList.remove("overflow-auto");
    }, 1000);
  };

  return {
    scrollToPreviousSlide,
    scrollToNextSlide,
  };
};
