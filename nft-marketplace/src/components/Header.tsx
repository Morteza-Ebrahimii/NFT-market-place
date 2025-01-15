import { useState } from "react";
import {Navbar} from "./Navbar";
import Storefront from "../assets/nav/Storefront.png";

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
    <header className="header">
      <div className="flex flex-row justify-between py-3 mx-6  md:my-5 md:mx-16">
        <a className="header flex flex-row items-center gap-3 " href="/">
          <span>
            <img src={Storefront} alt="logo" className="w-[20px] xl:w-[30px]" />
          </span>
          <h1 className="font-semibold text-sm xl:text-xl">NFT Marketplace</h1>
        </a>
        <Navbar handleHomburgerMenu={handleHomburgerMenu} isToggleHomburgerMenu={isToggleHomburgerMenu} />
      </div>
    </header>
  );
}
