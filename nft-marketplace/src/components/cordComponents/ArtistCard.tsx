import { Link } from "react-router-dom";

type Artist = {
  id: number;
  name: string;
  change: number;
  balence: string;
  nftsSold: number;
  volume: number;
  image: string;
  bio: string;
  hashaddress: string;
  followers: number;
};

export function ArtistCard({ artists }: { artists: Artist[] }) {
  return (
    <ul className="flex flex-col gap-4 md:gap-5 mt-4">
      {artists.map((artist, index) => (
        <li key={index} className="flex flex-col gap-1">
          <Link
            to={`/rankings/${artist.id}`}
            className="flex flex-row justify-between items-center w-full bg-background-gray py-3 md:py-4  px-2 xl:px-4 rounded-3xl md:rounded-2xl "
          >
            <div className="flex flex-row items-center gap-2 xl:gap-4">
              <div className="change-numbers-font text-label-text text-[10px] md:text-base md:mx-2 xl:mr-4 xl:ml-1 xl:bg-primary-background rounded-full xl:py-1 px-2 xl:px-3 ">
                {artist.id}
              </div>
              <div>
                <img
                  className="size-5 md:size-6 xl:size-14"
                  src={artist.image}
                  alt={`${artist.id}`}
                />
              </div>
              <div className="text-sm md:text-xl md:font-semibold xl:font-bold ">
                {artist.name}
              </div>
            </div>
            <div className="flex flex-row items-center md:justify-between  xl:justify-around md:w-1/3 xl:w-3/5 ">
              <div
                className={`change-numbers-font hidden md:block md:text-base ${
                  artist.balence === "negetive"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {artist.balence === "negetive" ? "-" : "+"}
                {artist.change}%
              </div>
              <div className="change-numbers-font hidden xl:block text-base">
                {artist.nftsSold}
              </div>
              <div className="text-[11px] font-thin change-numbers-font md:text-base mr-4 md:mr-10 xl:mr-0 ">
                {artist.volume} ETH
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
