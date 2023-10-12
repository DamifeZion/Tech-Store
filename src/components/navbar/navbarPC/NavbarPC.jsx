import React from "react";
import SiteHeader from "../../siteHeader/SiteHeader";
import blueLogo from "../../../assets/blueLogo.svg";
import search from "../../../assets/searchPC.svg";
import profileImg from "../../../assets/profileImage.png";
import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { desktopNavUtil } from "../../../util/desktopNavUtil";
import SearchBar from "./SearchBar";
import MiniCart from "./MiniCart";

const NavbarPC = () => {
  const navlinkStyle = "whitespace-nowrap";
  const { searchVisibility, miniCartVisibility } = useSelector(
    (state) => state.desktopNavSlice
  );
  const { searchBarToggle, miniCartToggleTrue, miniCartToggleFalse } =
    desktopNavUtil();

  return (
    <div>
      <SiteHeader />

      <section id="template">
        <nav className="flex items-center h-[80px] px-[--px] xl:h-[92px] relative">
          <img
            id="logo"
            src={blueLogo}
            alt="logo"
            className="w-[75px] xl:w-[85px]"
          />

          {searchVisibility ? (
            <SearchBar />
          ) : (
            <ul
              id="menu"
              className="ml-[20px] gap-[16px] flex  items-center text-[--black] text-sm font-semibold xl:text-md xl:ml-[30px] xl:gap-[25px]"
            >
              <li>
                <NavLink className={navlinkStyle}>Laptops</NavLink>
              </li>

              <li>
                <NavLink className={navlinkStyle}>Desktop PCs</NavLink>
              </li>

              <li>
                <NavLink className={navlinkStyle}>Networking Devices</NavLink>
              </li>

              <li>
                <NavLink className={navlinkStyle}>Printers & Scanners</NavLink>
              </li>

              <li>
                <NavLink className={navlinkStyle}>PC Parts</NavLink>
              </li>

              <li>
                <NavLink className={navlinkStyle}>All Other Products</NavLink>
              </li>

              <li className={navlinkStyle}>
                <NavLink>Repairs</NavLink>
              </li>

              <button className="py-2 px-[26px] border-2 border-[--col3] rounded-3xl text-[--col3] whitespace-nowrap">
                Our Deals
              </button>
            </ul>
          )}

          <ul id="account" className="flex items-center ml-auto gap-[25px]">
            <button onClick={searchBarToggle} className="w-[19px]">
              {searchVisibility ? (
                <AiOutlineClose
                  strokeWidth={50}
                  className="text-[19px] text-[--col3]"
                />
              ) : (
                <img src={search} alt="" />
              )}
            </button>

            <button onMouseEnter={miniCartToggleTrue} className="relative">
              <i>
                <RiShoppingCartLine
                  strokeWidth={0.2}
                  className="text-[26px] transform scale-x-[-1] text-[--black]"
                />
              </i>
              <span
                id="cart-list"
                className="absolute flex items-center justify-center -top-[9.5px] -right-[8px] bg-[--col3] rounded-full w-[16px] h-[17px] text-xsm font-bold text-[--white]"
              >
                2
              </span>
            </button>

            <button className="w-[36px] rounded-full overflow-hidden">
              <img src={profileImg} alt="" />
            </button>
          </ul>
        </nav>
      </section>

      <div
        id="template"
        className="relative"
        onMouseLeave={miniCartToggleFalse}
      >
        <div
          id="miniCart-tooltip"
          className={`${
            miniCartVisibility ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-opacity z-[1000] ease-linear duration-150 absolute right-[--px]`}
        >
          <MiniCart />
        </div>
      </div>
    </div>
  );
};

export default NavbarPC;
