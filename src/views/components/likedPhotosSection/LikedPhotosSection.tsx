import { useContext } from "react";
import { UserLikesContext } from "../../../context/LikesContext";
import ImageCard from "../imageCard/ImageCard";
import ChevronLeft from "../../../assets/svg/chevron-left-solid.svg";
import "./likedPhotosSection.scss";
import { RoutingContext } from "../../../context/RoutingContext";

const LikedPhotosSection = () => {
  const { userLikes } = useContext(UserLikesContext);
  const { handleHomePageChange } = useContext(RoutingContext);

  return (
    <>
      <div className="liked-photo-section-head">
        <h2 className="liked-photo-section-head__title">Your Liked Photos:</h2>
        <button onClick={() => handleHomePageChange(true)} className="liked-photo-section-head__action">
          <img src={ChevronLeft} alt="Chevron Left Back Arrow" />
          Back
        </button>
      </div>
      <div className="liked-photo-section-grid">
        {userLikes.map((photo) => {
          return <ImageCard key={photo.id} data={photo} />;
        })}
      </div>
    </>
  );
};

export default LikedPhotosSection;
