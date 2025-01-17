import { Button } from "./Button";
import { Menu, UserRoundPlus, ArrowRight    } from 'lucide-react'

interface MenuItem {
  label: string;
  href: string;
}
const menuItems: MenuItem[] = [
  { label: "MarketPlace", href: "/marketplace" },
  { label: "Rankings", href: "/rankings" },
  { label: "Connect a Wallet", href: "/ConnectWallet" },
  { label: "Sign Up", href: "/SignUp" },
];

interface NavbarProps {
  handleHomburgerMenu: () => void;
  isToggleHomburgerMenu: boolean;
}
export const Navbar = ({
  handleHomburgerMenu,
  isToggleHomburgerMenu,
}: NavbarProps) => {
  return (
    <nav className="nav ">
      <section className="flex-col xl:hidden">
        {isToggleHomburgerMenu ? (
          <ul className="flex flex-col right-5 p-2 top-12 absolute bg-background-gray rounded-lg gap-3 md:right-16 md:p-3 z-20">
            <li className="flex justify-end">
              <button onClick={handleHomburgerMenu}>
                <ArrowRight   />
              </button>
            </li>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Button
                  variant="outline"
                  className="md:w-[175px] md:h-[65px] w-[160px] h-[58px] justify-center text-center"
                >
                  <a href={item.href} className="font-semibold text-base">
                    {item.label}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <button onClick={handleHomburgerMenu}>
              <Menu className="md:size-8" />
            </button>
          </div>
        )}
      </section>
      <section>
        <ul className="flex-row items-center hidden xl:flex">
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              className={`${index === 3 ? "flex items-center gap-2" : ""}`}
            >
              {item.label === "Sign Up" ? (
                <a href="/SignUp" className="font-semibold text-base">
                  <Button variant="default">
                    <UserRoundPlus />
                    <span>Sign Up</span>
                  </Button>
                </a>
              ) : (
                <Button variant="ghost">
                  <a href={item.href} className="font-semibold text-base">
                    {item.label}
                  </a>
                </Button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};
