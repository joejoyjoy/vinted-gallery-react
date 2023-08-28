import { useContext } from "react";
import { UserLikesContext } from "../../../context/LikesContext";
import ImageCard from "../imageCard/ImageCard";
import "./likedPhotosSection.scss";

const LikedPhotosSection = () => {
  const { userLikes } = useContext(UserLikesContext);

  return (
    <div className="liked-photo-section-grid">
      {userLikes.map((photo) => {
        return <ImageCard key={photo.id} data={photo} />;
      })}
    </div>
  );
};

export default LikedPhotosSection;
