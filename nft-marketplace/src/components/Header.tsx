import { useState } from "react";
import Storefront from "../assets/nav/Storefront.png";
import HomburgerMenu from "../assets/nav/homburger-menu.svg";
import ArrowRight from "../assets/nav/ArrowRight.svg";
import { Button } from "./Button";

export function Header() {
  const [isToggleHomburgerMenu, setIsToggleHomburgerMenu] = useState(false);

  const handleHomburgerMenu = () => {
    setIsToggleHomburgerMenu((c) => !c);
  };

  return (
    <header className="header">
      <div className="flex flex-row justify-between my-5 mx-16">
        <a className="header flex flex-row items-center gap-3" href="/">
          <span>
            <img src={Storefront} alt="logo" />
          </span>
          <h1 className="font-semibold text-xl ">NFT Marketplace</h1>
        </a>

        <nav className="nav ">
          <section className="flex-col xl:hidden">
            {isToggleHomburgerMenu ? (
              <>
                <ul className="flex flex-col absolute right-16 bg-background-gray p-3 rounded-lg">
                  <li className="flex justify-end">
                    <button onClick={handleHomburgerMenu}>
                      <img src={ArrowRight} alt="ArrowRight" />
                    </button>
                  </li>
                  <li className="">
                    <Button variant="outline">
                      <a
                        href="/marketplace"
                        className="font-semibold text-base"
                      >
                        MarketPlace
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline">
                      <a
                        href="/marketplace"
                        className="font-semibold text-base"
                      >
                        MarketPlace
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline">
                      <a
                        href="/marketplace"
                        className="font-semibold text-base"
                      >
                        MarketPlace
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline">
                      <a
                        href="/marketplace"
                        className="font-semibold text-base"
                      >
                        MarketPlace
                      </a>
                    </Button>
                  </li>
                </ul>
              </>
            ) : (
              <div>
                <button onClick={handleHomburgerMenu}>
                  <img src={HomburgerMenu} alt="HomburgerMenu" />
                </button>
              </div>
            )}
          </section>
          <ul className="flex-row items-center hidden xl:flex">
            <li>
              <Button variant="ghost">
                <a href="/marketplace" className="font-semibold text-base">
                  MarketPlace
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <a href="/rankings" className="font-semibold text-base">
                  Rankings
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <a href="/connectWallet" className="font-semibold text-base">
                  Connect a Wallet
                </a>
              </Button>
            </li>
            <li className="flex items-center gap-2">
              <Button variant="default">
                <svg
                  className="user-icon"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="svg-icon"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5ZM7 12C7 7.02944 11.0294 3 16 3C20.9706 3 25 7.02944 25 12C25 16.9706 20.9706 21 16 21C11.0294 21 7 16.9706 7 12Z"
                    fill="white"
                  />
                  <path
                    className="svg-icon"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9999 20.999C13.7177 20.999 11.4758 21.5998 9.4994 22.741C7.52303 23.8822 5.8819 25.5235 4.74099 27.5001C4.4649 27.9784 3.85332 28.1423 3.375 27.8662C2.89668 27.5901 2.73275 26.9785 3.00885 26.5002C4.32528 24.2196 6.21889 22.3257 8.49932 21.009C10.7798 19.6922 13.3666 18.999 15.9999 18.999C18.6332 18.999 21.2201 19.6922 23.5005 21.009C25.781 22.3257 27.6746 24.2196 28.991 26.5002C29.2671 26.9785 29.1032 27.5901 28.6248 27.8662C28.1465 28.1423 27.535 27.9784 27.2589 27.5001C26.1179 25.5235 24.4768 23.8822 22.5004 22.741C20.5241 21.5998 18.2821 20.999 15.9999 20.999Z"
                    fill="white"
                  />
                </svg>
                <span className="font-semibold text-base">Sign Up</span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
