import { useParams, useLocation } from "react-router-dom";
import { useNftContext } from "../context/NftContext";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";

export function NftDetail() {
  const { id } = useParams<{ id: string }>();
  const { getNftById } = useNftContext();
  const nft = getNftById(Number(id));

  const location = useLocation();
  const artist = location.state?.artist;

  if (!nft || !artist) {
    return <div>NFT or Artist not found</div>;
  }

  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div>
        <div className="reletive">
          <div
            className="h-52 md:h-64 lg:h-80 bg-center bg-cover "
            style={{
              backgroundImage: `url(${nft.image})`,
            }}
          />
        </div>
        <div className="container px-8 py-6">
          <div>
            <>
              <div className="name&date">
                <h3 className="text-2xl font-semibold pb-2">{nft.name}</h3>
                <p className="text-caption text-sm font-base py-1">
                  Minted on {nft.minted_on}
                </p>
              </div>
              <div className="timer bg-background-gray px-1 py-5 mt-3 rounded-2xl">
                <div className="text-xs ml-4 mb-2">
                  <p>Action ends in:</p>
                </div>
                <div className="flex flex-row justify-evenly text-3xl font-semibold">
                  <p>{String(timeLeft.hours).padStart(2, "0")}</p>
                  <div>:</div>
                  <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
                  <div>:</div>
                  <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
                </div>
                <div className="flex flex-row justify-evenly gap-4 text-xs mt-1">
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </div>
                <div className="flex justify-center ">
                  <Button variant="default"  className="text-sm font-semibold w-5/6 mt-5 justify-center flex py-[15px] rounded-xl" >
                    Place Bid
                    </Button>
                </div>
              </div>
              <div className="createdBy my-3 text-sm">
                <h3 className="font-thin text-label-text ">Created By</h3>
                <div className="flex flex-row gap-2 mt-2">
                  <img src={artist.image} alt={artist.name} className="size-5" />
                  <p>{artist.name}</p>
                </div>
              </div>
              <div className="description flex flex-col gap-1 text-sm">
                <h3 className="text-label-text">Description</h3>
                <p>{nft.description}</p>
              </div>
              <div className="ditails text-sm  my-3 flex flex-col gap-2">
                <h3 className="text-label-text text-base">Details</h3>
                <a href={nft.websites[0]} className="flex flex-row gap-2 cursor-pointer">
                  <span className="text-label-text">
                    <Globe  className="size-5" />
                  </span>
                  <h5>View on Etherscan</h5>
                </a>
                <a href={nft.websites[0]} className="flex flex-row  gap-2 cursor-pointer">
                  <span className="text-label-text">
                    <Globe className="size-5" />
                  </span>
                  <h5>View Original</h5>
                </a>
              </div>
              <div className="tag">
                <h3 className="text-label-text mt-4 mb-2">Tags</h3>
                <div className="flex flex-col font-medium gap-4 mt-3">
                  {nft.categories.map((tag) => (
                    <div key={tag} className="bg-background-gray text-sm font-semibold py-2 px-5 w-fit rounded-2xl">{tag}</div>
                  ))}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
