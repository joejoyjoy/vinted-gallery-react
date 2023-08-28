import { LikedPhoto, PhotoArr } from "../views/types";

export const constructArrayOfLikedPhoto = (data: PhotoArr): LikedPhoto => {
  const newArray = {
    id: data.id,
    url: data.url,
    photographer: data.photographer,
    photographer_url: data.photographer_url,
    avg_color: data.avg_color,
    src: {
      original: data.src.original,
    },
  };

  return newArray;
};
