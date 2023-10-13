import React from "react";
import PropTypes from "prop-types";
import heart from "../../assets/loveProduct.svg";
import metrics from "../../assets/metrics.svg";
import cart from "../../assets/cart.svg";
import greenCheck from "../../assets/greenCheck.svg";
import checkAvailability from "../../assets/checkAvailability.svg";
import { BiSolidStar } from "react-icons/bi";
import { limitTextCharacterUtil } from "../../util/limitTextCharacterUtil";

const ProductCard = ({ arrayData, btnStyle, buttonStyle, contCn, iconSpanCn }) => {
  return (
    <div
      id="product"
      className={`${contCn} px-3 pt-4 pb-[20px] flex flex-col relative bg-[--white] group cursor-pointer hover:shadow-shadow1 hover:z-50 min-w-[70%] 400:min-w-[55%] 500:min-w-[40%] 600:px-[25px] md:min-w-[30%] 1000:min-w-[25%] lg:min-w-[20%] xl:min-w-[16.5%] `}
    >
      <div
        id="availability"
        className="absolute top-[8px] left-3 600:top-[16px]"
      >
        {arrayData.inStock && (
          <span className="flex items-center gap-1 text-[#78A962] text-xsm">
            <img src={greenCheck} alt="In stock" />
            In Stock
          </span>
        )}

        {!arrayData.inStock && (
          <span className="flex items-center gap-1 text-[#C94D3F] text-xsm">
            <img src={checkAvailability} alt="In stock" />
            Check Availability
          </span>
        )}
      </div>

      <div className="mt-[10px] place-self-center flex items-center justify-center w-[100%] 500:w-[75%]">
        <div className="h-[150px] w-[150px] object-cover">
          <img
            src={arrayData.img}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <span
          id="icons"
          className={`absolute hidden top-[8px] right-[16px] flex-col gap-[7px] 600:top-[16px] md:flex ${iconSpanCn}`}
        >
          <button>
            <img src={heart} alt="Like" className="w-[22px]" />
          </button>

          <button>
            <img src={metrics} alt="Metrics" className="w-[22px]" />
          </button>
        </span>
      </div>

      <ul id="rating-and-reviews" className="flex items-center gap-[9px]">
        <span
          id="rating"
          className="flex items-center text-[13px] gap-[2px] text-[#E9A426]"
        >
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar className="text-[#C4C4C4]" />
        </span>

        <p id="reviews" className="text-[--col5] text-sm ">
          Reviews <span id="review-length">({arrayData.reviewLength})</span>
        </p>
      </ul>

      <p id="product-title" className="mt-[10px] text-[13px]">
        {limitTextCharacterUtil(`${arrayData.productTitle}`)}
      </p>

      <ul id="price" className="mt-[10px] flex flex-col">
        <strike className="text-md text-[--col10]">
          ${arrayData.previousPrice}
        </strike>
        <p className="text-xl text-[--black] font-semibold">
          ${arrayData.currentPrice}
        </p>
      </ul>

      <button
        id="add-to-cart"
        style={buttonStyle}
        className={`hidden mt-[12px] group-hover:flex items-center justify-center text-[14px] font-semibold text-[--col3] border-2 border-[--col3] rounded-[50px] gap-[2px] px-[20px] py-[6px] ${btnStyle}`}
      >
        <img src={cart} />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
