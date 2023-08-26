import HeartIcon from "../../../assets/svg/heart-regular.svg";
import "./navBarComponent.scss";

const NavBarComponent = () => {
  return (
    <header className="nav-bar-component">
      <nav className="nav-bar-component__nav">
        <div className="nav-bar-component__nav--wrapper">
          <div className="nav-bar-component__nav--wrapper__logo">
            <div className="nav-bar-component__nav--wrapper__logo--title">
              <h1 className="nav-bar-component__nav--wrapper__logo--title__name">
                <b>Vinted</b>Gallery
              </h1>
              <span className="nav-bar-component__nav--wrapper__logo--title__alias">
                <span>by</span>
                <h2>Joe Alt</h2>
              </span>
            </div>
            <div className="nav-bar-component__nav--wrapper__logo--credits">
              <a href="https://www.pexels.com">Photos provided by Pexels</a>
            </div>
          </div>
          <div className="nav-bar-component__nav--wrapper__actions">
            <img src={HeartIcon} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarComponent;
