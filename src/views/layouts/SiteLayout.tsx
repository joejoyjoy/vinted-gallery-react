import { Suspense, useContext } from "react";
import { RoutingContext } from "../../context/RoutingContext";
import NavBarComponent from "../components/header";
import HomePage from "../page/homePage";
import LikesPage from "../page/likesPage/LikesPage";
import "./siteLayout.scss";

const SiteLayout = () => {
  const { homePageQuery, isLoading } = useContext(RoutingContext);

  return (
    <div className="site-layout">
      <NavBarComponent />
      <main className="site-layout__responsive">
        <div className="site-layout__responsive--wrapper">
          {isLoading ? (
            <span />
          ) : (
            <Suspense fallback={<></>}>
              {homePageQuery ? <HomePage /> : <LikesPage />}
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
};

export default SiteLayout;
