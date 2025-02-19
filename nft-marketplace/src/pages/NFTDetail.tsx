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
        <div>
          <div
            className="h-80 md:h-96 lg:h-screen bg-center bg-cover "
            style={{
              backgroundImage: `url(${nft.image})`,
            }}
          />
        </div>
        <div className=" px-8 py-6 flex  justify-evenly xl:justify-around">
          <div className="max-w-xs md:max-w-sm xl:max-w-xl">
            <>
              <div className="name&date">
                <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold pb-2 xl:pt-2">
                  {nft.name}
                </h3>
                <p className="text-caption text-sm md:text-base xl:text-xl  py-1">
                  Minted on {nft.minted_on}
                </p>
              </div>
              <div>
                <div className="timer bg-background-gray px-1 py-5 mt-3 rounded-2xl md:hidden">
                  <div className="text-xs ml-4 mb-2">
                    <p className="changing-font">Action ends in:</p>
                  </div>
                  <div className="flex flex-row justify-evenly text-3xl font-semibold changing-font">
                    <p>{String(timeLeft.hours).padStart(2, "0")}</p>
                    <div>:</div>
                    <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
                    <div>:</div>
                    <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
                  </div>
                  <div className="flex flex-row justify-evenly gap-4 text-xs mt-1 changing-font">
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                  </div>
                  <div className="flex justify-center ">
                    <Button
                      variant="default"
                      className="text-sm font-semibold w-5/6 mt-5 justify-center flex py-[15px] rounded-xl"
                    >
                      Place Bid
                    </Button>
                  </div>
                </div>
              </div>

              <div className="createdBy my-3 xl:my-6 text-sm">
                <h3 className="font-thin xl:font-semibold md:text-base xl:text-xl  text-label-text changing-font">Created By</h3>
                <div className="flex flex-row gap-2 xl:gap-3 mt-2 xl:mt-3">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="size-5 xl:size-6"
                  />
                  <p className="md:text-base xl:text-xl xl:font-semibold">{artist.name}</p>
                </div>
              </div>
              <div className="description flex flex-col gap-1 xl:gap-3 xl:mt-5 text-sm">
                <h3 className="text-label-text xl:font-semibold md:text-base  xl:text-xl changing-font">Description</h3>
                <p className="md:text-base lg:text-lg xl:text-2xl">{nft.description}</p>
              </div>
              <div className="ditails text-sm  my-3 xl:my-6  flex flex-col gap-2 xl:gap-4">
                <h3 className="text-label-text xl:font-semibold text-sm md:text-base xl:text-xl changing-font">Details</h3>
                <a
                  href={nft.websites[0]}
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <span className="text-label-text">
                    <Globe className="size-5 md:size-6 xl:size-7" />
                  </span>
                  <h5 className="md:text-base xl:text-xl">View on Etherscan</h5>
                </a>
                <a
                  href={nft.websites[0]}
                  className="flex flex-row  gap-2 cursor-pointer"
                >
                  <span className="text-label-text">
                    <Globe className="size-5 md:size-6 xl:size-7" />
                  </span>
                  <h5 className="md:text-base  xl:text-xl">View Original</h5>
                </a>
              </div>
              <div className="xl:mt-10">
                <h3 className="text-label-text mt-4 mb-2 changing-font md:text-base xl:text-xl xl:font-semibold">Tags</h3>
                <div className="flex flex-col xl:flex-row font-medium gap-4 mt-3">
                  {nft.categories.map((tag) => (
                    <div
                      key={tag}
                      className="bg-background-gray text-sm md:text-base font-semibold py-2 md:py-3 xl:my-2 px-5 md:px-6 xl:px-6 w-fit rounded-2xl"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </>
          </div>
          {/* in md size the counter should be here */}
          <div className="timer bg-background-gray px-1 py-6 px-7  mt-3 rounded-2xl hidden md:block h-min ">
            <div className="changing-font text-xs md:text-sm mb-2">
              <p>Action ends in:</p>
            </div>
            <div className="changing-font flex flex-row justify-evenly text-3xl md:text-4xl md:gap-4 font-semibold">
              <p>{String(timeLeft.hours).padStart(2, "0")}</p>
              <div>:</div>
              <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
              <div>:</div>
              <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
            </div>
            <div className="changing-font flex flex-row justify-evenly md:justify-between gap-4 text-xs md:text-sm mt-1">
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
            <div className="flex justify-center ">
              <Button
                variant="default"
                className="text-sm md:text-base font-semibold w-5/6 md:w-full mt-5 md:mt-6 justify-center flex py-[15px] md:py-[18px] md:rounded-2xl rounded-xl"
              >
                Place Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
