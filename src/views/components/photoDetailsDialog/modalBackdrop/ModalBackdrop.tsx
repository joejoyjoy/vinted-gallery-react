import { useContext } from "react";
import { ModalContext } from "../../../../context/ModalContext";
import "./modalBackdrop.scss";

const ModalBackdrop = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <div
      onClick={() => setIsModalOpen(!isModalOpen)}
      className={
        isModalOpen ? "modal-backdrop modal-backdrop--open" : "modal-backdrop"
      }
    />
  );
};

export default ModalBackdrop;
