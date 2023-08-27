import ChevronLeft from "../../../assets/svg/chevron-left-solid.svg";
import './likesPage.scss'

const LikesPage = () => {
  return (
    <section className="likes-page">
      <button className="likes-page__nav">
        <img src={ChevronLeft} alt="Chevron left arrow icon" />
        Back Home
      </button>
      <div className="likes-page__grid">
        Hello
      </div>
    </section>
  );
};

export default LikesPage;
