import { createContext, useState, ReactNode, useEffect } from "react";

export interface ModalInterface {
  isModalOpen: boolean;
  setIsModalOpen: (boolean: boolean) => void;
}

const defaultState = {
  isModalOpen: true,
  setIsModalOpen: () => {},
} as ModalInterface;

export const ModalContext = createContext(defaultState);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
