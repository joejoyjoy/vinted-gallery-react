import { useEffect, useRef, useState } from "react";
import { PhotoArr } from "@views/types";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

interface PexelsResponse {
  photos: PhotoArr[];
}

export const usePexelsPhotos = (use?: string, category?: string) => {
  const [pictures, setPictures] = useState<PhotoArr[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pagination, setPagination] = useState<number>(1);

  const elementRef = useRef<HTMLDivElement | null>(null);

  const UriGetAllPictures = `https://api.pexels.com/v1/curated?orientation=landscape&page=${
    pagination * 1
  }&per_page=40
  `;

  const UriGetSearchedPhotos = `https://api.pexels.com/v1/search?query=${category}&page=${
    pagination * 1
  }&per_page=40
  `;

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchPicturesFromApi();
    }
  };

  const fetchPicturesFromApi = async () => {
    let apiUrl;

    if (use === "getPicturesOfSameCategory") {
      apiUrl = UriGetSearchedPhotos;
    } else {
      apiUrl = UriGetAllPictures;
    }

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `${PEXELS_API_KEY}`,
        },
      });
      const data: PexelsResponse = await response.json();

      if (data.photos.length == 0) {
        setHasMore(false);
      } else {
        setPictures([...pictures, ...data.photos]);
        setPagination(pagination + 1);
      }
    } catch (error) {
      console.error(`Error fetching images from Pexels API:`, error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pictures]);

  return {
    pictures,
    hasMore,
    elementRef,
  };
};
