import { createContext, useState, useEffect, ReactNode } from "react";

export interface UserLikesInterface {
  userLikes: Array<number>;
  addOneLike: (imageId: number) => void;
  isLikedPicture: (imageId: number) => boolean;
}

const defaultState: UserLikesInterface = {
  userLikes: [],
  addOneLike: () => {},
  isLikedPicture: () => false,
};

export const UserLikesContext = createContext(defaultState);

let localUserLikes: number[] = [];

const storedData = localStorage.getItem("userLikes");
if (storedData !== null) {
  localUserLikes = JSON.parse(storedData) as number[];
}

export default function UserLikesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userLikes, setUserLikes] = useState<number[]>(localUserLikes || []);

  const addOneLike = (imageId: number) => {
    if (imageId.toString().length >= 8) {
      const existingIndex = userLikes.findIndex(
        (likedId) => likedId === imageId
      );

      if (existingIndex === -1) {
        setUserLikes([...userLikes, imageId]);
      } else {
        const newUserLikes = userLikes.filter((likedId) => likedId !== imageId);
        setUserLikes(newUserLikes);
      }
    } else {
      console.error("No such image ID recognized");
    }
  };

  const isLikedPicture = (imageId: number) => {
    if (imageId.toString().length >= 8) {
      const existingIndex = userLikes.findIndex(
        (likedId) => likedId === imageId
      );

      if (existingIndex === -1) {
        return false;
      } else {
        return true;
      }
    } else {
      console.error("No such image ID recognized");
    }
    return false;
  };

  useEffect(() => {
    localStorage.setItem("userLikes", JSON.stringify(userLikes));

    if (userLikes.length === 0) {
      localStorage.removeItem("userLikes");
    }
  }, [userLikes]);

  return (
    <UserLikesContext.Provider
      value={{ userLikes, addOneLike, isLikedPicture }}
    >
      {children}
    </UserLikesContext.Provider>
  );
}
