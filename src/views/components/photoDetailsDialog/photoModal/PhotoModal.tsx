import { useContext } from "react";
import { ModalContext } from "../../../../context/ModalContext";
import Xmark from "../../../../assets/svg/xmark-solid.svg";
import "./photoModal.scss";

const PhotoModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <section
      className={isModalOpen ? "photo-modal photo-modal--open" : "photo-modal"}
      role="dialog"
      tabIndex={-1}
    >
      <div className="photo-modal__wrapper">
        <button
          onClick={() => setIsModalOpen(false)}
          className="photo-modal__wrapper--close"
        >
          <img src={Xmark} alt="Close icons X mark" />
        </button>
        OKEY ther sdifi fiefi f isfhi ef hifsi h<br />
        Nice work
      </div>
    </section>
  );
};

export default PhotoModal;
