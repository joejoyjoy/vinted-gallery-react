import { useContext} from "react";
import { RoutingContext } from "@context/RoutingContext";
import AllPhotosSection from "@components/allPhotosSection";
import LikedPhotosSection from "@components/likedPhotosSection";
import "./homePage.scss";

const HomePage = () => {
  const { homePageQuery } = useContext(RoutingContext);

  return (
    <section className="main-content">
      {homePageQuery ? <AllPhotosSection /> : <LikedPhotosSection />}
    </section>
  );
};

export default HomePage;
