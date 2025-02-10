import { useParams, useLocation} from "react-router-dom";
import { useNftContext } from "../context/NftContext";
// import { useArtistContext } from "../context/ArtistContext";
import { Globe } from "lucide-react";

export function NftDetail() {
  const { id } = useParams<{ id: string }>();
  const { getNftById } = useNftContext();
  const nft = getNftById(Number(id));

  const location = useLocation();
  const artist = location.state?.artist;

  if (!nft || !artist) {
    return <div>NFT or Artist not found</div>;
  }

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
        <div className="container mx-auto py-8">
          <div>
            <>
              <div className="name&date">
                <h3>{nft.name}</h3>
                <p>{nft.minted_on}</p>
              </div>
              <div className="timer">
                <div>
                  <p>Action ends in:</p>
                </div>
                <div>
                  <p>00 :</p>
                  <p> 00 :</p>
                  <p> 00</p>
                </div>
              </div>
              <div className="createdBy">
                <h3>Created By</h3>
                <div>
                  <img src={artist.image} alt={artist.name} />
                  <p>{artist.name}</p>
                </div>
              </div>
              <div className="description">
                <h3>Description</h3>
                <p>{nft.description}</p>
              </div>
              <div className="ditails">
                <h3>Details</h3>
                <div>
                  <span>
                    <Globe />
                  </span>
                  <h5>View on Etherscan</h5>
                </div>
                <div>
                  <span>
                    <Globe />
                  </span>
                  <h5>View Original</h5>
                </div>
              </div>
              <div className="tag">
                <h3>Tags</h3>
                <div>
                  {nft.categories.map((tag) => (
                    <span key={tag}>{tag}</span>
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
