import { usePexelsPhotos } from "@hooks/usePexelsPhotos";
import ImageCard from "../imageCard";
import Spinner from "@UI/spinner";
import { PhotoArr } from "@views/types";
import "./allPhotosSection.scss";

const AllPhotosSection = () => {
  const { pictures, hasMore, elementRef } = usePexelsPhotos();

  return (
    <>
      <div className="all-photos-section-grid">
        {pictures.map((photo: PhotoArr) => {
          return <ImageCard key={photo.id} data={photo} />;
        })}
      </div>
      {hasMore ? (
        <div ref={elementRef} className="all-photos-section-loader">
          <Spinner />
        </div>
      ) : null}
    </>
  );
};

export default AllPhotosSection;
