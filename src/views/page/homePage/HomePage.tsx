import { useState, useEffect, useRef } from "react";
import "./homePage.scss";
import { dummyJSON } from "../../../constants";
import Spinner from "../../UI/spinner/Spinner";
import ImageCard from "../../components/imageCard/ImageCard";
import { PhotoArr } from "../../types";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

interface PexelsResponse {
  photos: PhotoArr[];
}

const HomePage = () => {
  const [pictures, setPictures] = useState<PhotoArr[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pagination, setPagination] = useState<number>(1);

  const elementRef = useRef<HTMLDivElement | null>(null);

  const apiURL = `https://api.pexels.com/v1/curated?orientation=landscape&page=${
    pagination * 1
  }&per_page=40
  `;
  // const apiURL = "";

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchPicturesFromApi();
    }
  };

  const fetchPicturesFromApi = async () => {
    const response = await fetch(apiURL, {
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

  return (
    <section className="main-content">
      <div className="main-content__grid">
        {pictures.map((photo: PhotoArr) => {
          return <ImageCard key={photo.id} data={photo} />;
        })}
      </div>
      {hasMore && (
        <div ref={elementRef} className="main-content__loader">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default HomePage;
