import ToTop from "@assets/svg/arrow-up-solid.svg";
import useScrollPosition from "@hooks/useScrollPosition";
import "./backToTop.scss";

const BackToTop = () => {
  const { needsButton } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className={`back-to-top ${needsButton ? "" : "collapse"}`}>
      <button onClick={scrollToTop} className="back-to-top__button">
        <img src={ToTop} alt="Back to top of page icon" />
      </button>
    </section>
  );
};

export default BackToTop;
