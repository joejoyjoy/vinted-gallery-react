import { createContext, useState, useEffect, ReactNode } from "react";
import { constructArrayOfLikedPhoto } from "@utils/constructArrayOfLikedPhoto";
import { LikedPhoto, PhotoArr } from "@views/types";

export interface UserLikesInterface {
  userLikes: Array<LikedPhoto>;
  addOneLike: (data: PhotoArr) => void;
  isLikedPicture: (imageId: number) => boolean;
}

const defaultState: UserLikesInterface = {
  userLikes: [],
  addOneLike: () => {},
  isLikedPicture: () => false,
};

export const UserLikesContext = createContext(defaultState);

let localUserLikes: LikedPhoto[] = [];

const storedData = localStorage.getItem("userLikes");
if (storedData !== null) {
  localUserLikes = JSON.parse(storedData) as LikedPhoto[];
}

export default function UserLikesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userLikes, setUserLikes] = useState<LikedPhoto[]>(
    localUserLikes || []
  );

  const addOneLike = (data: PhotoArr) => {
    const likedPhoto = constructArrayOfLikedPhoto(data);

    try {
      const existingIndex = userLikes.findIndex(
        (liked) => liked.id === likedPhoto.id
      );

      if (existingIndex === -1) {
        setUserLikes([...userLikes, likedPhoto]);
      } else {
        const deleteUserLike = userLikes.filter(
          (liked) => liked.id !== likedPhoto.id
        );
        setUserLikes(deleteUserLike);
      }
    } catch (error) {
      console.error("addOneLike Fn():", error);
    }
  };

  const isLikedPicture = (imageId: number) => {
    try {
      const existingIndex = userLikes.findIndex(
        (liked) => liked.id === imageId
      );

      if (existingIndex === -1) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("isLikedPicture Fn():", error);
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
