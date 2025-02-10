import { Link } from "react-router-dom";

export function CardsNft({
  nft,
  showAll,
  artist,
}: {
  nft: any;
  showAll: boolean;
  artist: any;
}) {
  return (
    <div
      key={nft.id}
      className={`flex flex-col bg-primary-background rounded-2xl xl:rounded-3xl md:max-w-96 transition-all duration-500 ${
        showAll
          ? "transition-all duration-500 opacity-100 transform scale-90 "
          : " transform scale-95"
      }`}
    >
      <Link to={`/nft/${nft.id}`} state={{ artist }} key={nft.id}>
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full max-h-52 md:max-h-full object-cover rounded-t-2xl"
        />
        <div className="p-4 md:py-4 md:px-6 xl:py-6 xl:px-8">
          <div>
            <h3 className="text-lg font-semibold md:text-2xl xl:text-3xl ">
              {nft.name}
            </h3>
          </div>
          <div className="flex flex-row gap-2 items-center mt-1 md:mt-2 mb-3">
            <img
              className="size-5 md:size-6 xl:size-7"
              src={artist.image}
              alt={artist.name}
            />
            <h3 className="text-lg changing-font ">{artist.name}</h3>
          </div>
          <div className="flex flex-row justify-between mt-4 md:mt-5">
            <div className="text-xs">
              <h3 className="text-label-text mb-1 md:mb-0 xl:mb-1 md:text-sm">
                Price
              </h3>
              <p className="md:text-lg xl:text-xl">{nft.price} ETH</p>
            </div>
            <div className="text-xs flex flex-col items-center">
              <h3 className="text-label-text  mb-1 md:mb-0 xl:mb-1 md:text-sm">
                Highest Bid
              </h3>
              <p className="md:text-lg xl:text-xl">{nft.highest_bid} wETH</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
