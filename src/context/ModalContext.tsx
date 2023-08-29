import { createContext, useState, ReactNode, useEffect } from "react";
import { PhotoArr } from "@views/types";

export interface ModalInterface {
  isModalOpen: boolean;
  userSelectedPhoto: PhotoArr | undefined;
  openPhotoModal: (data: PhotoArr) => void;
  closePhotoModal: () => void;
}

const defaultState = {
  isModalOpen: true,
  userSelectedPhoto: undefined,
  openPhotoModal: () => {},
  closePhotoModal: () => {},
} as ModalInterface;

export const ModalContext = createContext(defaultState);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userSelectedPhoto, setUserSelectedPhoto] = useState<
    PhotoArr | undefined
  >(undefined);

  const openPhotoModal = (data: PhotoArr) => {
    if (userSelectedPhoto !== undefined) {
      closePhotoModal();
      setTimeout(() => {
        setUserSelectedPhoto(data);
        setIsModalOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 300);
    } else {
      setUserSelectedPhoto(data);
      setIsModalOpen(true);
    }
  };

  const closePhotoModal = () => {
    setUserSelectedPhoto(undefined);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        userSelectedPhoto,
        openPhotoModal,
        closePhotoModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
