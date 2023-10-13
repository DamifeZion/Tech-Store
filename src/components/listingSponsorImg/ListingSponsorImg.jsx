import React from "react";
import { changeListingSponsorImgUtil } from "../../util/changeLisitingSponsorImgUtil";

const ListingSponsorImg = ({ arrayData }) => {
  //Below changes the sponsor image on hover
  changeListingSponsorImgUtil();

  return (
    <div className="py-[25px] cursor-pointer 500:w-[200px] 500:px-[30px] 500:py-[35px] ">
      <img
        src={arrayData.img}
        alt={`${arrayData.img}`}
        className="w-[152px] h-[79px]"
      />
    </div>
  );
};

export default ListingSponsorImg;
