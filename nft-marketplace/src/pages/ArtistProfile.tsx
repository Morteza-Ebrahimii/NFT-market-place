import { useParams } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";
import backgroundImage from "../assets/ArtistsData/ImagePlaceHolder.png";
import { Button } from "../components/Button";
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
  const { id } = useParams<{ id: string }>();
  const { getArtistById } = useArtistContext();
  const artist = getArtistById(Number(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }
  return (
    <>
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
          <div
            className="max-w-sm  px-8 md:px-0"
          >
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
            <div className="flex flex-row gap-5 justify-center mt-4">
              <div className="text-center">
                <h2 className="font-semibold text-lg">{artist.volume}K +</h2>
                <p>Volume</p>
              </div>
              <div className="text-center">
                <h2 className="font-semibold text-lg">{artist.nftsSold}K +</h2>
                <p>NFT Sold</p>
              </div>
              <div className="text-center">
                <h2 className="font-semibold text-lg">{artist.followers}K +</h2>
                <p>Followers</p>
              </div>
            </div>
            <div className="bio">
              <h3>Bio</h3>
              <p>{artist.bio}</p>
            </div>
            <div className="link">
              <h3>Links</h3>
              <div>
                <Globe />
                <Youtube />
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
