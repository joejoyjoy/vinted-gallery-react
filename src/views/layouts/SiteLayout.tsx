import NavBarComponent from "../components/header";
import HomePage from "../page";
import "./siteLayout.scss";

const SiteLayout = () => {
  return (
    <div className="site-layout">
      <NavBarComponent />
      <main className="site-layout__responsive">
        <div className="site-layout__responsive--wrapper">
          <HomePage />
        </div>
      </main>
    </div>
  );
};

export default SiteLayout;
