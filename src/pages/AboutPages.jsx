import "./css/about.css";

// import about1 from "../assets/about1.jpg";
// import about2 from "../assets/about2.jpg";
// import about3 from "../assets/about3.jpg";

const AboutPages = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-title">
          <p>
            <span>||</span> BEST WORK ABOUT US
          </p>
          <div className="about-text">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              sequi aliquam. Natus culpa facilis sed.
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste
              atque necessitatibus illo accusamus maxime. Lorem ipsum dolor sit
              amet.
            </h3>
          </div>
        </div>
        <div className="about-list">
          <div className="about-link">
            <p>Special Project</p>
            <h1>the best website made by us</h1>
            <a href="">Order Now</a>
          </div>
          <div className="about-link">
            <h1>the best aplication web made by us</h1>
            <a href="">Order Now</a>
          </div>
          <div className="about-link">
            <h1>the best design made by us</h1>
            <a href="">Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPages;
