import { useContext } from "react";
import { UserLikesContext } from "@context/LikesContext";
import { RoutingContext } from "@context/RoutingContext";
import ImageCard from "../imageCard";
import ChevronLeft from "@assets/svg/chevron-left-solid.svg";
import Empty from "@assets/svg/empty.svg"
import "./likedPhotosSection.scss";

const LikedPhotosSection = () => {
  const { userLikes } = useContext(UserLikesContext);
  const { handleHomePageChange } = useContext(RoutingContext);

  return (
    <>
      <div className="liked-photo-section-head">
        <h2 className="liked-photo-section-head__title">Your Liked Photos:</h2>
        <button
          onClick={() => handleHomePageChange(true)}
          className="liked-photo-section-head__action"
        >
          <img src={ChevronLeft} alt="Chevron Left Back Arrow" />
          Back
        </button>
      </div>
      {userLikes.length !== 0 ? (
        <div className="liked-photo-section-grid">
          {userLikes.map((photo) => {
            return <ImageCard key={photo.id} data={photo} />;
          })}
        </div>
      ) : (
        <div className="liked-photo-section-no-data">
          <img src={Empty} alt="Empty icons" />
          No photos liked yet
        </div>
      )}
    </>
  );
};

export default LikedPhotosSection;
