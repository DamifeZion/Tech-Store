import React from "react";
import paypalLogo from "../../../assets/paypalLogo.svg";
import MiniCartItem from "./MiniCartItem";

const MiniCart = () => {
  return (
    <div className="flex flex-col shadow-miniCart bg-[--white] w-[325px] pt-5 pb-7 text-[--black]">
      <h1 className="font-semibold text-center text-xl">My Cart</h1>

      <p className="text-[--col5] text-sm mt-[7px] text-center w-full">
        2 item in cart
      </p>

      <button className="text-[--col3] text-md font-semibold border-2 border-[--col3] py-2 rounded-3xl mt-[18px] mx-[24px]">
        View or Edit Your Cart
      </button>

      <div className="mt-[20px] grid grid-cols-1 border-t border-[--col6]">
        <MiniCartItem />
        <MiniCartItem />
      </div>

      <h3
        id="sub-total"
        className="mt-[16px] text-center text-[--col5] text-md font-semibold"
      >
        Subtotal: <span className="text-xl text-[--black]">$499.00</span>
      </h3>

      <div className="mt-[13px] mx-[24px] flex flex-col gap-[7px] font-semibold text-md">
        <button className="bg-[--col3] w-full py-3 rounded-3xl text-[--white]">
          Go to Checkout
        </button>

        <button className="flex items-center justify-center gap-2 bg-[#FFB800] w-full py-3 rounded-3xl">
          Checkout with
          <img src={paypalLogo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
