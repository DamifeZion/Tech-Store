import { useEffect } from "react";
import hoveredImg from "../../src/assets/hoveredSponsorImg.png";

export const changeListingSponsorImgUtil = () => {
  useEffect(() => {
    const sponsorImg = document.querySelectorAll("#lisiting-sponsor-img");

    sponsorImg.forEach((img) => {
      const originalSrc = img.getAttribute("src");
      const hoveredSrc = hoveredImg;

      img.addEventListener("mouseover", () => {
        img.style.opacity = 0;

        setTimeout(() => {
          img.setAttribute("src", hoveredSrc);
          img.style.opacity = 1;
        }, 300);
      });

      img.addEventListener("mouseout", () => {
        img.style.opacity = 0;

        setTimeout(() => {
          img.setAttribute("src", originalSrc);
          img.style.opacity = 1;
        }, 300);
      });
    });
  }, []);
};
