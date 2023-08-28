import NavBarComponent from "../components/header";
import ModalBackdrop from "../components/photoDetailsDialog/modalBackdrop/ModalBackdrop";
import PhotoModal from "../components/photoDetailsDialog/photoModal/PhotoModal";
import HomePage from "../page";
import BackToTop from "../UI/backToTop/BackToTop";
import "./siteLayout.scss";

const SiteLayout = () => {
  return (
    <>
      <div className="site-layout">
        <NavBarComponent />
        <main className="site-layout__responsive">
          <div className="site-layout__responsive--wrapper">
            <HomePage />
          </div>
        </main>
        <BackToTop />
      </div>
      <PhotoModal />
      <ModalBackdrop />
    </>
  );
};

export default SiteLayout;
