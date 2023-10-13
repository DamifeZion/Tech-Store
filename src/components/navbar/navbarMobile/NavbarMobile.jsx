import { FiMenu } from "react-icons/fi";
import searchIcon from "../../../assets/search.svg";
import { RiShoppingCartLine } from "react-icons/ri";
import accountIcon from "../../../assets/account.svg";
import { mobileNavUtil } from "../../../util/mobileNavUtil";
import { useSelector } from "react-redux";
import MainMenu from "./MainMenu";
import SiteHeader from "../../siteHeader/SiteHeader";
import { desktopNavUtil } from "../../../util/desktopNavUtil";

const NavbarMobile = () => {
  const { mainMenuToggle } = mobileNavUtil();
  const { mainMenuVisibility } = useSelector((state) => state.mobileNavSlice);
  const { handleSearchChange } = desktopNavUtil();

  return (
    <>
      <>
        <SiteHeader />
      </>

      <nav className="relative bg-[--col3] h-[64px] flex items-center justify-between px-[12px] md:px-[--px]">
        <button
          id="menu"
          onClick={mainMenuToggle}
          className="text-3xl relative z-[1000] text-[--white]"
        >
          <FiMenu strokeWidth={2.5} />
        </button>

        <ul
          id="search-bar"
          className="relative rounded-3xl overflow-hidden w-8/12 text-[11px] 500:w-3/4"
        >
          <i className="absolute top-1/2 -translate-y-1/2 left-[15px] text-xl">
            <img src={searchIcon} alt="search" />
          </i>

          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search here"
            className="w-full h-[38px] pl-[38px] pr-[15px] md:h-[38px] outline-none"
          />
        </ul>

        <ul
          id="account"
          className="flex items-center gap-[14px] 400:gap-[25px]"
        >
          <button className="relative">
            <i>
              <RiShoppingCartLine
                strokeWidth={0.5}
                className="text-[26px] transform scale-x-[-1] text-[--white]"
              />
            </i>
            <span
              id="cart-list"
              className="absolute flex items-center justify-center -top-[5px] -right-[10px] bg-[--white] rounded-full w-[17.5px] h-[17.5px] text-xsm font-bold text-[--col3]"
            >
              2
            </span>
          </button>

          <button className="flex items-center justify-center border-2 rounded-full p-1">
            <img src={accountIcon} alt="account" />
          </button>
        </ul>
      </nav>

      <div
        id="main-menu"
        className={`absolute top-0 left-0 z-[1000] w-full transition-all ease-linear duration-200 ${
          mainMenuVisibility ? "visible" : "invisible"
        }`}
      >
        <div
          className={`duration-300 w-[82%] md:w-1/2 ${
            !mainMenuVisibility && "-translate-x-full"
          }`}
        >
          <MainMenu />
        </div>

        <span
          id="pseudo-element"
          onClick={mainMenuToggle}
          className={`bg-black bg-opacity-25 fixed top-0 right-0 w-full h-full z-[-1] transition-all ease-linear duration-150 ${
            !mainMenuVisibility && "opacity-0"
          }`}
        />
      </div>
    </>
  );
};

export default NavbarMobile;
