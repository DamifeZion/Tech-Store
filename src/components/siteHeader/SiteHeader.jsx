import React from "react";
import { useMediaQuery } from "@mui/material";
import { HiChevronDown } from "react-icons/hi";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import whieLogo from "../../assets/whiteLogo.svg";

const SiteHeader = () => {
  return (
    <header className="bg-[--header-bg]">
      <section
        id="template"
        className="flex items-center  px-[--px] h-[44px] font-poppins text-[--white] font-medium lg:justify-between"
      >
        <div
          id="logo"
          className="relative w-[64px] h-[64px] rounded-full bg-[--col3] mt-10 lg:hidden"
        >
          <NavLink to={"/"}>
            <img
              src={whieLogo}
              alt="Logo"
              className="absolute top-2 left-1/2 -translate-x-1/2 z-10"
            />
          </NavLink>
        </div>

        <ul
          id="work-hours"
          className="flex items-center text-xsm ml-[10px] 400:text-[11px] 400:ml-[26px] lg:text-sm lg:ml-0"
        >
          <h6 className="text-[--col5]">
            Mon-Thu: <b className="text-[--white]">9:00 AM - 5:30 PM</b>
          </h6>
          <span className="cursor-pointer text-[--white]">
            <HiChevronDown strokeWidth={1.5} />
          </span>
        </ul>

        <p id="contact-us" className="flex gap-2 text-[--col5] ml-auto lg:ml-0">
          <span className="hidden lg:block">
            Visit our showroom in 1234 Street Adress City Address, 1234
          </span>
          <a className="border-[--white] text-[--white] text-xsm border-b-[1px] py-[2px] 400:text-[11px] lg:py-0 lg:px-1 lg:border-b-2 lg:text-sm">
            Contact Us
          </a>
        </p>

        <ul id="call-us" className="hidden items-center text-sm lg:flex">
          <p>Call Us: (00) 1234 5678</p>

          <div
            id="socials"
            className="flex items-center gap-[8px] ml-[14px] text-1xl"
          >
            <i>
              <FaSquareFacebook />
            </i>

            <i>
              <AiFillInstagram />
            </i>
          </div>
        </ul>
      </section>
    </header>
  );
};

export default SiteHeader;
