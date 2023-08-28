import { useContext } from "react";
import { UserLikesContext } from "../../../context/LikesContext";
import { RoutingContext } from "../../../context/RoutingContext";
import { limitNumber } from "../../../utils/limitNumber";
import HeartIcon from "../../../assets/svg/heart-regular.svg";
import "./navBarComponent.scss";
import Theme from "../../UI/theme/Theme";
import { ModalContext } from "../../../context/ModalContext";

const NavBarComponent = () => {
  const { userLikes } = useContext(UserLikesContext);
  const { handleHomePageChange } = useContext(RoutingContext);
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <header className="nav-bar-component">
      <nav className="nav-bar-component__nav">
        <div className="nav-bar-component__nav--wrapper">
          <div className="nav-bar-component__nav--wrapper__logo">
            <button
              onClick={() => handleHomePageChange(true)}
              className="nav-bar-component__nav--wrapper__logo--title"
            >
              <h1 className="nav-bar-component__nav--wrapper__logo--title__name">
                <b>Vinted</b>Gallery
              </h1>
              <span className="nav-bar-component__nav--wrapper__logo--title__alias">
                <span>by</span>
                <h2>Joe Alt</h2>
              </span>
            </button>
            <div className="nav-bar-component__nav--wrapper__logo--credits">
              <a href="https://www.pexels.com">Photos provided by Pexels</a>
            </div>
          </div>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            OverFlow Hidden
          </button>
          <div className="nav-bar-component__nav--wrapper__actions">
            <span className="nav-bar-component__nav--wrapper__actions--theme">
              <span>Theme:</span>
              <Theme />
            </span>
            <button
              onClick={() => handleHomePageChange(false)}
              className="nav-bar-component__nav--wrapper__actions--liked"
            >
              <img src={HeartIcon} />
              <div className="nav-bar-component__nav--wrapper__actions--liked__number">
                <span>{limitNumber(userLikes.length)}</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarComponent;
