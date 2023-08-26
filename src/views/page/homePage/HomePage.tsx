import { useState, useEffect, useRef } from "react";
import "./homePage.scss";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

const HomePage = () => {
  const [pictures, setPictures] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const elementRef = useRef(null);

  // const apiURL = `https://api.pexels.com/v1/curated?page=${page * 1}&per_page=40
  // `;
  const apiURL = "";

  const onIntersection = (entries: any) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  };

  const fetchMoreItems = async () => {
    const response = await fetch(apiURL, {
      headers: {
        Authorization: `${PEXELS_API_KEY}`,
      },
    });
    const data = await response.json();

    if (data.photos.length == 0) {
      setHasMore(false);
    } else {
      setPictures([...pictures, ...data.photos]);
      setPage(page + 1);
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
      {pictures.map((photo: any, index: number) => {
        return (
          <div key={index} className="card">
            <img src={photo.src.tiny} alt={photo.alt} />
          </div>
        );
      })}
      {hasMore && <div ref={elementRef}>Load More Items...</div>}
    </section>
  );
};

export default HomePage;
