import ContentComponents from "./components/ContentComponents";
import FaqsComponents from "./components/FaqsComponents";
import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";
import PortfolioComponents from "./components/PortfolioComponents";


const App = () => {
  return (
    <div className="bg-white">
      <NavbarComponents />
      <HomeComponents/>
      <ContentComponents/>
      <PortfolioComponents/>
      <FaqsComponents/>
    </div>
  );
};

export default App;
