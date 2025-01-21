import gif from "../assets/HeroSection/heroanimationtransparentbck-2.gif";
import { Button } from "../components/Button";
import { Rocket } from "lucide-react";
import { data } from "../data/data";
import { useState } from "react";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <section>
        <TrendingCollection />
      </section>
    </>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-row p-6 gap-4 mx-auto max-w-md md:max-w-xl xl:max-w-xl md:scale-125 xl:scale-[1.9] md:my-20 xl:my-40">
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
        <Button
          variant="HeaderButton"
          className="md:py-3 md:px-6 md:w-2/3 md:h-12 my-3 md:rounded-2xl justify-self-center xl:w-1/2 xl:h-1 xl:px-5 xl:py-4 xl:rounded-xl"
        >
          <Rocket className="xl:w-3" />
          <h2 className="md:text-xs xl:text-[10px]">Get started</h2>
        </Button>
        <div className="flex flex-row gap-5 justify-center mt-4">
          <div className="text-center">
            <h2 className="font-semibold text-lg">240K+</h2>
            <p>Total Sale</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg">100K+</h2>
            <p>Auctoins</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg">80K+</h2>
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

function TrendingCollection() {
  const [toggleSeeMore, setToggleSeeMore] = useState(false);

  const trendingItemOne = data[0];
  const trendingItemTwo = data[1];
  const trendingItemThree = data[2];

  const handleSeeMore = () => {
    setToggleSeeMore((prev) => !prev);
  };

  return (
    <section className="container mx-auto px-6 py-6 max-w-sm md:max-w-3xl xl:max-w-5xl">
      <div className="flex flex-col gap-2 py-5 md:py-10 xl:py-20">
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold">
          Trending Collection
        </h2>
        <p className="text-sm md:text-base">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

        <div className="container py-5 xl:py-1">
          <div>
            <img src={trendingItemOne.largeImage} alt="largeImage" />
          </div>
          <div className="flex flex-row py-3 justify-around">
            {trendingItemOne.smallImages.map((image, index) => (
              <img
                key={index}
                className="w-[5.5rem] h-[5.5rem]"
                src={image}
                alt={`Trending Collection ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            <h2 className="text-xl font-semibold">{trendingItemOne.title}</h2>
            <div className="name&logo flex align-center gap-2">
              <img
                src={trendingItemOne.avatarIcon}
                alt="logo"
                className="size-6"
              />
              <p>{trendingItemOne.author}</p>
            </div>
          </div>
        </div>

        {toggleSeeMore && (
          <>
            <div className="container md:hidden py-5 xl:py-1 transition-opacity duration-500">
              <div>
                <img src={trendingItemTwo.largeImage} alt="largeImage" />
              </div>
              <div className="flex flex-row py-3 justify-around">
                {trendingItemTwo.smallImages.map((image, index) => (
                  <img
                    key={index}
                    className="w-[5.5rem] h-[5.5rem]"
                    src={image}
                    alt={`Trending Collection ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 px-4 py-3">
                <h2 className="text-xl font-semibold">
                  {trendingItemTwo.title}
                </h2>
                <div className="name&logo flex align-center gap-2">
                  <img
                    src={trendingItemTwo.avatarIcon}
                    alt="logo"
                    className="size-6"
                  />
                  <p>{trendingItemTwo.author}</p>
                </div>
              </div>
            </div>

            <div className="container md:hidden py-5 xl:py-1 transition-opacity duration-500">
              <div className="">
                <img src={trendingItemThree.largeImage} alt="test" />
              </div>
              <div className="flex flex-row py-3 justify-around">
                {trendingItemThree.smallImages.map((image, index) => (
                  <img
                    key={index}
                    className="w-[5.5rem] h-[5.5rem]"
                    src={image}
                    alt={`Trending Collection ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 px-4 py-3">
                <h2 className="text-xl font-semibold">
                  {trendingItemThree.title}
                </h2>
                <div className="name&logo flex align-center gap-2">
                  <img
                    src={trendingItemThree.avatarIcon}
                    alt="logo"
                    className="size-6"
                  />
                  <p>{trendingItemThree.author}</p>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="md:hidden flex justify-center">
          <Button variant="outline" onClick={handleSeeMore}>
            {toggleSeeMore ? "Show less" : "Show more"}
          </Button>
        </div>

        <div className="container py-5 xl:py-1 hidden md:block">
          <div>
            <img src={trendingItemTwo.largeImage} alt="largeImage" />
          </div>
          <div className="flex flex-row py-3 justify-around">
            {trendingItemTwo.smallImages.map((image, index) => (
              <img
                key={index}
                className="w-[5.5rem] h-[5.5rem]"
                src={image}
                alt={`Trending Collection ${index + 1}`}
              />
            ))}{" "}
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            <h2 className="text-xl font-semibold">{trendingItemTwo.title}</h2>
            <div className="name&logo flex align-center gap-2">
              <img
                src={trendingItemTwo.avatarIcon}
                alt="logo"
                className="size-6"
              />
              <p>{trendingItemTwo.author}</p>
            </div>
          </div>
        </div>

        <div className="container py-5 xl:py-1 hidden md:block">
          <div className="">
            <img src={trendingItemThree.largeImage} alt="test" />
          </div>
          <div className="flex flex-row py-3 justify-around">
            {trendingItemThree.smallImages.map((image, index) => (
              <img
                key={index}
                className="w-[5.5rem] h-[5.5rem]"
                src={image}
                alt={`Trending Collection ${index + 1}`}
              />
            ))}{" "}
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            <h2 className="text-xl font-semibold">{trendingItemThree.title}</h2>
            <div className="name&logo flex align-center gap-2">
              <img
                src={trendingItemThree.avatarIcon}
                alt="logo"
                className="size-6"
              />
              <p>{trendingItemThree.author}</p>
            </div>
          </div>
        </div>

        <div className="container py-5 xl:py-1 hidden md:block xl:hidden">
          <div className="">
            <img src={trendingItemThree.largeImage} alt="test" />
          </div>
          <div className="flex flex-row py-3 justify-around">
            {trendingItemThree.smallImages.map((image, index) => (
              <img
                key={index}
                className="w-[5.5rem] h-[5.5rem]"
                src={image}
                alt={`Trending Collection ${index + 1}`}
              />
            ))}{" "}
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            <h2 className="text-xl font-semibold">{trendingItemThree.title}</h2>
            <div className="name&logo flex align-center gap-2">
              <img
                src={trendingItemThree.avatarIcon}
                alt="logo"
                className="size-6"
              />
              <p>{trendingItemThree.author}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
