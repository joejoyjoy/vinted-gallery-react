import { createContext, useState, ReactNode, useEffect } from "react";
import { PhotoArr } from "../views/types";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // make false!
  const [userSelectedPhoto, setUserSelectedPhoto] = useState<
    PhotoArr | undefined
  >({
    id: 18112362,
    url: "https://www.pexels.com/photo/city-france-street-rooftop-18112362/",
    photographer: "Niklas Jeromin",
    photographer_url: "https://www.pexels.com/@njeromin",
    avg_color: "#7E7E80",
    src: {
      original:
        "https://images.pexels.com/photos/18112362/pexels-photo-18112362.jpeg",
    },
  });

  const openPhotoModal = (data: PhotoArr) => {
    setUserSelectedPhoto(data);
    setIsModalOpen(true);
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
