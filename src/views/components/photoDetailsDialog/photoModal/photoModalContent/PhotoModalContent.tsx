import { useContext, useEffect, useState } from "react";
import { UserLikesContext } from "../../../../../context/LikesContext";
import { extractDataFromUrl } from "../../../../../utils/extractDataFromUrl";
import { downloadImageFromUrl } from "../../../../../utils/downloadImageFromUrl";
import HeartSolidIcon from "../../../../../assets/svg/heart-solid.svg";
import HeartRegularIcon from "../../../../../assets/svg/heart-regular.svg";
import { PhotoArr } from "../../../../types";
import "./photoModalContent.scss";

const PhotoModalContent = ({ data }: { data: PhotoArr }) => {
  const { id, url, photographer, photographer_url, src } = data;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { userLikes, addOneLike, isLikedPicture } =
    useContext(UserLikesContext);

  const alt = extractDataFromUrl(url);

  const onLike = (data: PhotoArr) => {
    addOneLike(data);
  };

  const downloadImage = async () => {
    downloadImageFromUrl(src.original, alt);
  };

  useEffect(() => {
    return setIsLiked(isLikedPicture(id));
  }, [userLikes]);

  return (
    <>
      <div className="photo-modal-content-header">
        <a href={photographer_url} className="photo-modal-content-header__left">
          <p className="photo-modal-content-header__left--photographer">
            Photo by {photographer} on Pexels
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
                Unlike
              </>
            ) : (
              <>
                <img src={HeartRegularIcon} alt="Heart regular icon" />
                Like
              </>
            )}
          </button>
          <button
            onClick={downloadImage}
            className="photo-modal-content-header__right--download"
          >
            Free download
          </button>
        </div>
      </div>
      <div className="photo-modal-content-image">
        <img src={src.original} alt={alt} />
      </div>
      <div className="photo-modal-content-more">
        <p>More like this</p>
      </div>
      OKEY ther sdifi fiefi f isfhi ef hifsi h<br />
      Nice work
    </>
  );
};

export default PhotoModalContent;
