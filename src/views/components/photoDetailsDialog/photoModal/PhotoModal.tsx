import { useContext, useEffect } from "react";
import { ModalContext } from "../../../../context/ModalContext";
import PhotoModalContent from "./photoModalContent";
import Xmark from "../../../../assets/svg/xmark-solid.svg";
import "./photoModal.scss";

const PhotoModal = () => {
  const { isModalOpen, userSelectedPhoto, closePhotoModal } =
    useContext(ModalContext);

  const handleParentClick = (event: Event) => {
    if (event.target === event.currentTarget) {
      closePhotoModal();
    }
  };

  useEffect(() => {
    const closeModalDiv = document.getElementById("closeModal");

    if (closeModalDiv) {
      closeModalDiv.addEventListener("click", handleParentClick);

      return () => {
        closeModalDiv.removeEventListener("click", handleParentClick);
      };
    }
  }, []);

  return (
    <section
      className={isModalOpen ? "photo-modal photo-modal--open" : "photo-modal"}
      role="dialog"
      tabIndex={-1}
    >
      <div id="closeModal" className="photo-modal__padding">
        <div className="photo-modal__padding--wrapper">
          <button
            onClick={closePhotoModal}
            className="photo-modal__padding--wrapper__close"
          >
            <img src={Xmark} alt="Close icons X mark" />
          </button>
          {userSelectedPhoto !== undefined ? (
            <PhotoModalContent data={userSelectedPhoto} />
          ) : (
            <div className="photo-modal__padding--wrapper__no-data">
              No image selected
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoModal;
