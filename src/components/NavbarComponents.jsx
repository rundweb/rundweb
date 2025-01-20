import { TfiWorld } from "react-icons/tfi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { RiAccountPinCircleLine } from "react-icons/ri";
const NavbarComponents = () => {
  const menu = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Portfolio",
      link: "",
    },
    {
      name: "Testimonial",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
  ];
  return (
    <div className="h-full w-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70">
      <div className="p-7 max-w-7xl m-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-primary md:text-2xl">RUNDWEB</h1>
        </div>
        <div className="hidden sm:flex items-center text-primary gap-4">
          {menu.map((item) => (
            <a href="" key={item.name} className="font-medium tracking-wide">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div
            className="neomorphism text-lg lg:text-xl h-8 w-8 lg:h-10 lg:w-10 text-primary flex items-center justify-center bg-white-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 border border-gray-100"
          >
            <TfiWorld />
          </div>
          <div
            className="neomorphism text-lg lg:text-xl h-8 w-8 lg:h-10 lg:w-10 text-primary flex items-center justify-center bg-white-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 border border-gray-100"
          >
            <HiOutlineBellAlert />
          </div>
          <div
            className="neomorphism text-lg lg:text-xl h-8 w-8 lg:h-10 lg:w-10 text-primary flex items-center justify-center bg-white-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 border border-gray-100"
          >
            <RiAccountPinCircleLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
