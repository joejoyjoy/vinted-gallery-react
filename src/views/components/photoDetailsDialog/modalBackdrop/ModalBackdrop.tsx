import { useContext } from "react";
import { ModalContext } from "@context/ModalContext";
import "./modalBackdrop.scss";

const ModalBackdrop = () => {
  const { isModalOpen, closePhotoModal } = useContext(ModalContext);

  return (
    <div
      onClick={closePhotoModal}
      className={
        isModalOpen ? "modal-backdrop modal-backdrop--open" : "modal-backdrop"
      }
    />
  );
};

export default ModalBackdrop;
