import ContentComponents from "./components/ContentComponents";
import FaqsComponents from "./components/FaqsComponents";
import FooterComponents from "./components/FooterComponents";
import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";
import PortfolioComponents from "./components/PortfolioComponents";
// import TestimonialComponents from "./components/TestimonialComponents";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
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
