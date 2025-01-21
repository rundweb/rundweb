import ContentComponents from "./components/ContentComponents";
import FaqsComponents from "./components/FaqsComponents";
import FooterComponents from "./components/FooterComponents";
import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";
import PortfolioComponents from "./components/PortfolioComponents";
// import TestimonialComponents from "./components/TestimonialComponents";

const App = () => {
  return (
    <div className="bg-white overflow-hidden">
      <NavbarComponents />
      <HomeComponents/>
      <ContentComponents/>
      <PortfolioComponents/>
      <FaqsComponents/>
      {/* <TestimonialComponents/> */}
      <FooterComponents/>
    </div>
  );
};

export default App;
