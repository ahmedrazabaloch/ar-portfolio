import CustomButton from "./CustomButton";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-heading">HEY, I'M AHMED RAZA</h1>
        <p className="home-paragraph">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product.
        </p>
        <CustomButton value="Projects" className={"home-button"} />
      </div>
    </div>
  );
};

export default HomePage;
