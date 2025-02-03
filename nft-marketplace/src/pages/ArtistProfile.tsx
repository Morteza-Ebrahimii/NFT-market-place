import { useParams, Link } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";
import backgroundImage from "../assets/ArtistsData/ImagePlaceHolder.png";
import { Button } from "../components/Button";
import { useNftContext } from "../context/NftContext";
import { useState } from "react";
import {
  Copy,
  Globe,
  Instagram,
  Linkedin,
  Plus,
  Twitter,
  Youtube,
} from "lucide-react";

const categoriesOfNft = [
  { name: "Created"},
  { name: "Owned"},
  { name: "Collection"},
];

export function ArtistProfile() {
  const [isActive, setisActive] = useState("Created");
  const { id } = useParams<{ id: string }>();
  const { getArtistById } = useArtistContext();
  const { nftCards } = useNftContext();
  const artist = getArtistById(Number(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }

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
                <h2 className="font-semibold text-lg md:text-2xl xl:text-3xl">
                  {artist.volume}K +
                </h2>
                <p className="text-sm md:text-base xl:text-xl">Volume</p>
              </div>
              <div className="text-center">
                <h2 className="font-semibold text-lg md:text-2xl xl:text-3xl">
                  {artist.nftsSold}K +
                </h2>
                <p className="text-sm md:text-base xl:text-xl">NFT Sold</p>
              </div>
              <div className="text-center">
                <h2 className="font-semibold text-lg md:text-2xl xl:text-3xl">
                  {artist.followers}K +
                </h2>
                <p className="text-sm md:text-base xl:text-xl">Followers</p>
              </div>
            </div>
            <div className="bio xl:mb-6 xl:mt-8">
              <h3 className="text-label-text my-2 mt-5 md:text-lg xl:text-2xl xl:font-bold">
                Bio
              </h3>
              <p className="text-sm md:text-base xl:text-xl  ">{artist.bio}</p>
            </div>
            <div className="mb-5">
              <h3 className="text-label-text mt-5 mb-1 xl:mb-3 md:text-lg xl:text-2xl xl:font-bold">
                Links
              </h3>
              <div className="flex flex-row text-label-text gap-2 ">
                <Globe className="size-5 md:size-6 xl:size-7" />
                <Youtube className="size-5 md:size-6 xl:size-7" />
                <Twitter className="size-5 md:size-6 xl:size-7" />
                <Instagram className="size-5 md:size-6 xl:size-7" />
                <Linkedin className="size-5 md:size-6 xl:size-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Nft cards of artist*/}
      <div>
        <div className="flex flex-row text-center justify-between py-1 md:py-5 my-5 text-label-text">
          {categoriesOfNft.map((category) => (
            <div
              key={category.name}
              className={`font-semibold text-sm xl:text-xl border-b-2 ${
                isActive === category.name
                  ? "border-label-text text-white translate-2"
                  : "border-transparent"
              }`}
              onClick={() => setisActive(category.name)}
            >
              <h3 className="px-3 py-4 md:hidden">{category.name}</h3>
              <h3 className="px-12 xl:px-18 py-4  hidden md:block ">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
        <div>
          {nftCards.map((nft) => (
            <Link to={`/nft/${nft.id}`} key={nft.id}>
              <img src={nft.image} alt={nft.name} />
              <div className="nftName">
                <h3>{nft.name}</h3>
              </div>
              <div className="logo and name">
                <img src={artist.image} alt={artist.name} />
                <h3>{artist.name}</h3>
              </div>
              <div className="price and bid">
                <div>
                  <h3>Price</h3>
                  <p>{nft.price}</p>
                </div>
                <div>
                  <h3>Highest Bid</h3>
                  <p>{nft.highest_bid}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
