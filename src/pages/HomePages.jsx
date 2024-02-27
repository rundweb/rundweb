import "./css/home.css";

const HomePages = () => {
  return (
    <div id="home" className="home">
      <div className="home-content" data-aos="zoom-in" data-aos-duration="1000">
        <div className="home-text" data-aos="fade-up" data-aos-duration="2000">
          <h1>
            we help you to grow your <span>Business</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsa veniam dicta sit ab voluptatum cum consequatur hic laboriosam
            nihil, voluptatibus doloribus. nihil, voluptatibus doloribus.
          </p>
          <div className="list-text">
            <h5>
              <i className="bx bx-check"></i> flexibel free trial
            </h5>
            <h5>
              <i className="bx bx-check"></i> cancel or switch plans
            </h5>
          </div>
          <div className="btn-home">
            <a href="" className="btn1">
              Get Started <i className="bx bxs-right-arrow-alt"></i>
            </a>
            <a href="" className="btn2">
              <i className="bx bx-play"></i> Watch Video
            </a>
          </div>
          <p>lets see my work experience :</p>
          <div className="icon-social">
            <i className="bx bxl-github"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-meta"></i>
          </div>
        </div>

        <div className="home-img">
          <div className="img-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
