import React from "react";
import { useMediaQuery } from "@mui/material";
import NavbarMobile from "./navbarMobile/NavbarMobile";
import NavbarPC from "./navbarPC/NavbarPC";

const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1099px)");

  return (
    <nav className="flex flex-col">
      {isSmallScreen && <NavbarMobile />}
      {!isSmallScreen && <NavbarPC />}
    </nav>
  );
};

export default Navbar;
