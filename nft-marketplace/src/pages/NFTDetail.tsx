import { useParams } from "react-router-dom";
import backgroundImage from "../assets/Nft`s details/ImagePlaceHolder.png";
import { useNftContext } from "../context/NftContext";


export function NftDetail(){

    const {id} = useParams<{id: string}>();
    const {getNftById} = useNftContext();
    const nft = getNftById(Number(id));

  return (
    <section>
      <div>
        <div className="reletive">
          <div
            className="h-52 md:h-64 lg:h-80 bg-center bg-cover "
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        </div>
        <div className="container mx-auto py-8">
            <div>
                {nft ? (
                    <>
                        <div className="name&date">{nft.name}</div>
                        <div className="timer"></div>
                        <div className="createdBy"></div>
                        <div className="description"></div>
                        <div className="ditails"></div>
                        <div className="tag"></div>
                    </>
                ) : (
                    <div>NFT not found</div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
