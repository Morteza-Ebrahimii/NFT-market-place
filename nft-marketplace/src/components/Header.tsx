import { useState } from "react";
import {Navbar} from "./Navbar";
import Storefront from "../assets/nav/Storefront.png";
import { Link } from "react-router-dom";

interface HeaderProps {
  setIsToggleHomburgerMenu: (isToggleHomburgerMenu: boolean) => void;
}

export function Header({ setIsToggleHomburgerMenu }: HeaderProps) {
  const [isToggleHomburgerMenu, setIsToggleHomburgerMenuLocal] =
    useState(false);

  const handleHomburgerMenu = () => {
    setIsToggleHomburgerMenuLocal((c) => !c);
    setIsToggleHomburgerMenu(!isToggleHomburgerMenu);
  };

  return (
    <header className="header sticky top-0 bg-primary-background z-20 opacity-[.95]">
      <div className="flex flex-row justify-between py-3 mx-6  md:my-5 md:mx-16">
        <Link className="header flex flex-row items-center gap-3 " to="/">
          <span>
            <img src={Storefront} alt="logo" className="w-[20px] xl:w-[30px]" />
          </span>
          <h1 className="header-logo md:font-semibold font-normal text-sm md:text-lg  xl:text-xl">NFT Marketplace</h1>
        </Link>
        <Navbar handleHomburgerMenu={handleHomburgerMenu} isToggleHomburgerMenu={isToggleHomburgerMenu} />
      </div>
    </header>
  );
}
