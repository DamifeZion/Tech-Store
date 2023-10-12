import React from "react";
import blueLogo from "../../../assets/blueLogo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { mobileNavUtil } from "../../../util/mobileNavUtil";
import { NavLink } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const MainMenu = () => {
  const { mainMenuToggle } = mobileNavUtil();

  const navlinkStyle = "flex items-center justify-between select-none";

  return (
    <main className="h-screen overflow-hidden">
      <nav className="bg-[--white] pt-[10px] pb-[20px] text-[--black] min-h-[200px] h-full overflow-auto transition-all duration-200 ease-linear">
        <header className="flex items-center justify-between pr-[25px] pb-1 border-b border-[--col6]">
          <span id="logo">
            <img src={blueLogo} alt="logo" className="w-[71px]" />
          </span>

          <button onClick={mainMenuToggle} className="text-1xl">
            <AiOutlineClose strokeWidth={50} />
          </button>
        </header>

        <ul
          id="menu-items"
          className="hideScrollBar flex flex-col gap-[17px] mt-[16px] px-[25px] text-[13px]"
        >
          <li>
            <NavLink className={navlinkStyle}>
              Laptops
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>

          <li>
            <NavLink className="flex items-center justify-between">
              Desktop PCs
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>

          <li>
            <NavLink className="flex items-center justify-between">
              Networking Devices
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>

          <li>
            <NavLink className="flex items-center justify-between">
              Printers & Scanners
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>

          <li>
            <NavLink className="flex items-center justify-between">
              PC Parts
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>

          <li>
            <NavLink className="flex items-center justify-between">
              All Other Products
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>

          <li>
            <NavLink className="flex items-center justify-between">
              Repairs
              <BiChevronRight strokeWidth={2} />
            </NavLink>
          </li>
        </ul>

        <button className="text-[--col3] border-2 border-[--col3] font-semibold px-[50px] py-2 ml-[--px] mt-[20px] rounded-3xl">
          Our Deals
        </button>
      </nav>
    </main>
  );
};

export default MainMenu;
