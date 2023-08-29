import { useState, useContext, useEffect } from "react";
import { UserLikesContext } from "@context/LikesContext";
import { ModalContext } from "@context/ModalContext";
import { extractDataFromUrl } from "@utils/extractDataFromUrl";
import ImageLoader from "@UI/imageLoader";
import SvgHeart from "@assets/svg/heart-solid.svg";
import { PhotoArr } from "@views/types";
import "./imageCard.scss";

const ImageCard = ({ data }: { data: PhotoArr }) => {
  const { id, src, url, avg_color, photographer } = data;
  const { original } = src;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { openPhotoModal } = useContext(ModalContext);
  const { userLikes, addOneLike, isLikedPicture } =
    useContext(UserLikesContext);

  const lowQuality = "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=20&w=30";
  const highQuality = "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=340&w=525";

  const alt = extractDataFromUrl(url);

  const onLike = (data: PhotoArr) => {
    addOneLike(data);
  };

  useEffect(() => {
    return setIsLiked(isLikedPicture(id));
  }, [userLikes]);

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
        <div className="image-card-component__details--actions">
          <button
            onClick={() => onLike(data)}
            className="image-card-component__details--actions__like"
          >
            <span className="marked">{isLiked ? "Unlike" : "Favorite"}</span>
          </button>
          <button
            onClick={() => openPhotoModal(data)}
            className="image-card-component__details--actions__more"
          >
            <span className="marked">See more</span>
          </button>
        </div>
      </div>
      {isLiked ? (
        <button
          onClick={() => onLike(data)}
          className="image-card-component__isLikes"
        >
          <img src={SvgHeart} alt="SVG solid red heart" />
        </button>
      ) : null}
    </div>
  );
};

export default ImageCard;
