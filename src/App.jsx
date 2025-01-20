import ContentComponents from "./components/ContentComponents";
import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";


const App = () => {
  return (
    <div className="bg-white">
      <NavbarComponents />
      <HomeComponents/>
      <ContentComponents/>
    </div>
  );
};

export default App;
