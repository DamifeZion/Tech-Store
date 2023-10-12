import React from "react";
import miniCartItem1 from "../../../assets/miniCartItem1.png";
import edit from "../../../assets/miniCartItemEdit.svg";
import cancel from "../../../assets/miniCartItemCancel.svg";
import { limitTextCharacterUtil } from "../../../util/limitTextCharacterUtil";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MiniCartItem = () => {;
  
  return (
    <div className="flex items-center justify-between pt-[17px] pb-[23px] border-b border-[--col6] px-[24px]">
      <ul id="count">
        <h2 className="text-xl whitespace-nowrap">
          1 <span className="text-md">x</span>
        </h2>
      </ul>

      <ul className="w-[65px]">
        <img src={miniCartItem1} />
      </ul>

      <ul id="product-details">
        <li className="flex items-center text-sm w-[153px] h-[64px]">
          {limitTextCharacterUtil(
            "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On sjjjjjjjjjjj"
          )}
        </li>
      </ul>

      <ul className="flex flex-col gap-[4px] w-fit text-[--col5]">
        <button>
          <img src={cancel} />
        </button>

        <button>
          <img src={edit} />
        </button>
      </ul>
    </div>
  );
};

export default MiniCartItem;
