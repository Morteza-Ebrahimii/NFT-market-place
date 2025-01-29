import { useParams } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";
import backgroundImage from "../assets/ArtistsData/ImagePlaceHolder.png";
import { Button } from "../components/Button";

export function ArtistProfile() {
  const { id } = useParams<{ id: string }>();
  const { getArtistById } = useArtistContext();
  const artist = getArtistById(Number(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }
  // { console.log(artist.hashaddress);}
  return (
    <div>
      <div
        className="h-64 lg:h-80 bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div>
        <img src={artist.image} alt={artist.name} className="" />
        <div>
          {artist.name}
          <div>
            <Button variant="outline">{artist.hashaddress}</Button>
            <Button variant="outline">
              <span>+</span>
              Follw
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
          <h3>Link</h3>
          <div>
            {/* links */}
          </div>
        </div>
      </div>
    </div>
  );
}
