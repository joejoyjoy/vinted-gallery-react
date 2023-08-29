import { useContext, useEffect, useState } from "react";
import { UserLikesContext } from "@context/LikesContext";
import { usePexelsPhotos } from "@hooks/usePexelsPhotos";
import ImageCard from "@components/imageCard";
import ImageLoader from "@UI/imageLoader";
import Spinner from "@UI/spinner";
import { extractDataFromUrl } from "@utils/extractDataFromUrl";
import { downloadImageFromUrl } from "@utils/downloadImageFromUrl";
import HeartSolidIcon from "@assets/svg/heart-solid.svg";
import HeartRegularIcon from "@assets/svg/heart-regular.svg";
import { PhotoArr } from "@views/types";
import "./photoModalContent.scss";

const PhotoModalContent = ({ data }: { data: PhotoArr }) => {
  const { id, url, photographer, photographer_url, src } = data;
  const { original } = src;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { userLikes, addOneLike, isLikedPicture } =
    useContext(UserLikesContext);

  const alt = extractDataFromUrl(url);

  const { pictures, hasMore, elementRef } = usePexelsPhotos(
    "getPicturesOfSameCategory",
    alt
  );

  const lowQuality = "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=20&w=30";
  const highQuality = "?auto=compress&cs=tinysrgb&dpr=1&fit=crop";

  const onLike = (data: PhotoArr) => {
    addOneLike(data);
  };

  const downloadImage = async () => {
    downloadImageFromUrl(original, alt);
  };

  useEffect(() => {
    return setIsLiked(isLikedPicture(id));
  }, [userLikes]);

  return (
    <>
      <div className="photo-modal-content-header">
        <a href={photographer_url} className="photo-modal-content-header__left">
          <p className="photo-modal-content-header__left--photographer">
            By {photographer}
          </p>
          <span className="photo-modal-content-header__left--socials">
            <p>Follow</p>
            <span>·</span>
            <p>Donate</p>
          </span>
        </a>
        <div className="photo-modal-content-header__right">
          <button
            onClick={() => onLike(data)}
            className="photo-modal-content-header__right--like"
          >
            {isLiked ? (
              <>
                <img src={HeartSolidIcon} alt="Heart solid icon" />
                <span>Unlike</span>
              </>
            ) : (
              <>
                <img src={HeartRegularIcon} alt="Heart regular icon" />
                <span>Like</span>
              </>
            )}
          </button>
          <button
            onClick={downloadImage}
            className="photo-modal-content-header__right--download"
          >
            <span>free</span> download
          </button>
        </div>
      </div>
      <div className="photo-modal-content-image">
        <div
          className={`photo-modal-content-image__wrapper blur-loader ${
            loaded ? "loaded" : "filter-blur"
          }`}
          style={{
            backgroundColor: " ##e7e7e7",
            backgroundImage: `url(${original + lowQuality})`,
          }}
        >
          {!loaded && <ImageLoader />}
          <img
            src={original + highQuality}
            alt={alt}
            className="photo-modal-content-image__wrapper--image"
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>
      </div>
      <div className="photo-modal-content-more">
        <p className="photo-modal-content-more__title">More like this</p>
        <div className="photo-modal-content-more__grid">
          {pictures.map((photo: PhotoArr) => {
            return <ImageCard key={photo.id} data={photo} />;
          })}
        </div>
        {hasMore ? (
          <div ref={elementRef} className="photo-modal-content-more__loader">
            <Spinner />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PhotoModalContent;
