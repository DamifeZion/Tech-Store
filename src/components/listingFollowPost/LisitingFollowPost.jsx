import React from "react";

const LisitingFollowPost = ({ arrayData }) => {
  return (
    <div className="mt-[21px] w-[20%] h-[341px] overflow-hidden 1300:w-[16.4%]">
      <div id="img" className="h-1/2 px-[1px]">
        <img
          src={arrayData.img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        id="text"
        className="py-[10px] px-[25px] flex flex-col gap-[10px] text-ellipsis"
      >
        <p className="text-center">{arrayData.body}</p>

        <small className="text-center text-xsm text-[--col5]">
          {arrayData.date}
        </small>
      </div>
    </div>
  );
};

export default LisitingFollowPost;
