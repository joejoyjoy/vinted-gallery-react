import { useState } from "react";
import ImageLoader from "../../UI/imageLoader/ImageLoader";
import { extractDataFromUrl } from "../../../utils/extractDataFromUrl";
import { PhotoArr } from "../../types";
import "./imageCard.scss";

const ImageCard = ({ data }: { data: PhotoArr }) => {
  const { id, src, url, avg_color, photographer } = data;
  const { original } = src;
  const [loaded, setLoaded] = useState(false);

  const lowQuality = "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=20&w=30";
  const highQuality = "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=340&w=525";

  const alt = extractDataFromUrl(url);

  return (
    <div
      className={`image-card-component blur-loader ${
        loaded ? "loaded" : "filter-blur"
      }`}
      style={{
        backgroundImage: `url(${original + lowQuality})`,
        backgroundColor: avg_color,
      }}
    >
      {!loaded && <ImageLoader />}
      <img
        src={original + highQuality}
        alt={alt}
        className="image-card-component__image"
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <div className="image-card-component__details">
        <p className="image-card-component__details--title">{alt}</p>
        <p className="image-card-component__details--author">{photographer}</p>
        <button className="image-card-component__details--button">Favorite</button>
      </div>
    </div>
  );
};

export default ImageCard;
