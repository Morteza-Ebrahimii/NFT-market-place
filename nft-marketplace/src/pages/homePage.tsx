import { Header } from "../components/Header";
import gif from "../assets/HeroSection/heroanimationtransparentbck-2.gif";
import { Button } from "../components/Button";
import { Rocket } from "lucide-react";

interface HomePageProps {
  setIsToggleHomburgerMenu: (isToggleHomburgerMenu: boolean) => void;
}
export function HomePage({ setIsToggleHomburgerMenu }: HomePageProps) {
  return (
    <>
      <HeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col p-6  gap-4 mx-auto max-w-sm w-full ">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">
          Discover digital art & Collect NFTs
        </h1>
        <p className="text-sm">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
      </div>
      <div className="py-4">
        <img src={gif} alt="hero-section" loading="lazy" />
      </div>

      <Button variant="HeaderButton">
        <Rocket size={17} />
        <h2>Get started</h2>
      </Button>
      <div className="flex flex-row gap-5 justify-center mt-4">
        <div className="text-center">
          <h2 className="font-semibold text-lg	">240K+</h2>
          <p>Total Sale</p>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-lg	">100K+</h2>
          <p>Auctoins</p>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-lg	">80K+</h2>
          <p>Artists</p>
        </div>
      </div>
    </section>
  );
}
