import gif from "../assets/HeroSection/heroanimationtransparentbck-2.gif";
import { Button } from "../components/Button";
import { Rocket } from "lucide-react";

export function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-row p-6  gap-4 mx-auto max-w-md md:max-w-xl xl:max-w-xl md:scale-125  xl:scale-[1.9] md:my-20 xl:my-40">
      <div className="flex flex-col md:w-1/2 justify-between my-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-sm">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        <div className="py-4 md:hidden">
          <img src={gif} alt="hero-section" loading="lazy" />
        </div>
          <Button variant="HeaderButton" className="md:py-3 md:px-6 md:w-2/3 md:h-12 my-3 md:rounded-2xl justify-self-center xl:w-1/2 xl:h-1 xl:px-5 xl:py-4 xl:rounded-xl" >
            <Rocket  className="xl:w-3" />
            <h2 className="md:text-xs xl:text-[10px]">Get started</h2>
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
      </div>
      <div className="py-4 hidden md:flex md:w-1/2">
        <img src={gif} alt="hero-section" loading="lazy" />
      </div>
    </section>
  );
}
