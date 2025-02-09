import { useParams } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";
import backgroundImage from "../assets/ArtistsData/ImagePlaceHolder.png";
import { Button } from "../components/Button";
import { useNftContext } from "../context/NftContext";
import { useEffect, useRef, useState } from "react";
import { categoriesOfNft } from "../data/data";
import { CardsNft } from "../components/cordComponents/CardsNft";
import {
  Copy,
  Globe,
  Instagram,
  Linkedin,
  Plus,
  Twitter,
  Youtube,
} from "lucide-react";

export function ArtistProfile() {
  const [visibleItemCount, setVisibleItemCount] = useState(2);
  const [showAll, setShowAll] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { getArtistById } = useArtistContext();
  const { nftCards } = useNftContext();
  const artist = getArtistById(Number(id));
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleItemCount = () => {
      if (window.innerWidth < 640) {
        setVisibleItemCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleItemCount(4);
      } else {
        setVisibleItemCount(6);
      }
    };

    window.addEventListener("resize", updateVisibleItemCount);
    updateVisibleItemCount();

    return () => window.removeEventListener("resize", updateVisibleItemCount);
  }, []);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const handleShowAll = () => {
    if (showAll && cardContainerRef.current) {
      cardContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <>
      {/* artist profile */}
      <div className="relative ">
        <div
          className="h-52 md:h-64 lg:h-80 bg-center bg-cover "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="flex flex-col justify-center items-center md:items-start mt-[-4rem] md:mt-[-5rem] md:ps-24 lg:ps-48 xl:ps-48">
          <div className="relative size-28 md:size-36 border-2 rounded-full border-primary-background">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="max-w-sm  px-8 md:px-0">
            <div className="w-full flex flex-col xl:flex-row  gap-2 md:gap-4  xl:gap-64 my-1 md:my-2 ">
              <span className="text-2xl md:text-4xl xl:text-5xl font-semibold  my-5 xl:min-w-96">
                {artist.name}
              </span>
              <div className="flex flex-col md:flex-row gap-4">
                <Button
                  variant="default"
                  className="w-full rounded-xl justify-center h-[4rem] md:gap-4"
                >
                  <span>
                    <Copy className="size-4" />
                  </span>
                  <h3 className="font-semibold text-sm md:text-base">
                    {artist.hashaddress}
                  </h3>
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl justify-center h-[4rem] md:gap-4 md:mx-2"
                >
                  <span>
                    <Plus className="text-purple" />
                  </span>
                  <h3 className="text-sm md:text-lg font-semibold">Follw</h3>
                </Button>
              </div>
            </div>
            <div className="flex flex-row gap-6  xl:gap-2 justify-between mt-6 md:mt-8 xl:mt-6 mb-3 md:mb-5 xl:w-[30rem]">
              <div className="text-center">
                <h2 className="changing-font font-semibold text-lg md:text-2xl xl:text-3xl">
                  {artist.volume}K +
                </h2>
                <p className="text-sm md:text-base xl:text-xl">Volume</p>
              </div>
              <div className="text-center">
                <h2 className="changing-font font-semibold text-lg md:text-2xl xl:text-3xl">
                  {artist.nftsSold}K +
                </h2>
                <p className="text-sm md:text-base xl:text-xl">NFT Sold</p>
              </div>
              <div className="text-center">
                <h2 className="changing-font font-semibold text-lg md:text-2xl xl:text-3xl">
                  {artist.followers}K +
                </h2>
                <p className="text-sm md:text-base xl:text-xl">Followers</p>
              </div>
            </div>
            <div className="bio xl:mb-6 xl:mt-8">
              <h3 className="text-label-text my-2 mt-5 md:text-lg xl:text-2xl xl:font-bold">
                Bio
              </h3>
              <p className="text-sm md:text-base xl:text-xl changing-font ">
                {artist.bio}
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-label-text mt-5 mb-1 xl:mb-3 md:text-lg xl:text-2xl xl:font-bold changing-font">
                Links
              </h3>
              <div className="flex flex-row text-label-text gap-2 ">
                <Globe className="size-5 md:size-6 xl:size-7 " />
                <Youtube className="size-5 md:size-6 xl:size-7" />
                <Twitter className="size-5 md:size-6 xl:size-7" />
                <Instagram className="size-5 md:size-6 xl:size-7" />
                <Linkedin className="size-5 md:size-6 xl:size-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-label-text opacity-30 my-2" />
      <Categories />
      {/* Nft cards of artist*/}
      <div className=" bg-background-gray"  ref={cardContainerRef}>
        <div className="container mx-auto  px-6 py-8 py-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-y-10 max-w-xs md:max-w-3xl xl:max-w-6xl   justify-items-center ">
          {nftCards
            .slice(0, showAll ? nftCards.length : visibleItemCount)
            .map((nft) => (
              <CardsNft
                nft={nft}
                key={nft.id}
                onHandleShowAll={handleShowAll}
                showAll={showAll}
                artist={artist}
              />
            ))}
        </div>
        <div className="flex justify-center pb-5">
          <Button
            variant={"outline"}
            onClick={handleShowAll}
            className="min-w-48 w-1/3 justify-center"
          >
            <h3>{showAll ? "Show Less" : "Show All"}</h3>
          </Button>
        </div>
      </div>
    </>
  );
}

function Categories() {
  const [isActive, setisActive] = useState("Created");

  return (
    <div className="flex justify-center text-label-text">
      <div className="flex flex-row gap-1 px-2">
        {categoriesOfNft.map((category) => (
          <div
            key={category.name}
            className={`font-semibold text-sm md:text-base xl:text-xl border-b-2 ${
              isActive === category.name
                ? "border-label-text border-opacity-70 text-white translate-2 "
                : "border-transparent"
            }`}
            onClick={() => setisActive(category.name)}
          >
            <div className="flex gap-3 px-5 md:px-16 xl:px-36 py-4 items-center">
              {category.name}

              <span
                className={`flex hidden md:inline  px-2 py-[2px] rounded-2xl text-center text-sm font-normal changing-font ${
                  isActive === category.name
                    ? "flex hidden md:inline bg-label-text px-2 py-[2px] rounded-2xl text-center text-sm font-normal"
                    : "text-white bg-backgroundButton "
                } `}
              >
                {category.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
