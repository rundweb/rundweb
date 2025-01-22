import { TfiWorld } from "react-icons/tfi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
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

  const icons = [
    { id: 1, label: TfiWorld, Text:"Hello world ! I`m From",link : "https://id.wikipedia.org/wiki/Indonesia" , project:"Indonesia" },
    { id: 2, label: HiOutlineBellAlert, Text:"Exciting News: A New Project is Here!", link : "https://rundweb.github.io/rundshop/" , project:"RundShop"},
    { id: 3, label: RiAccountPinCircleLine, Text:"My profile in CodeCanyon", link:"https://codecanyon.net/user/pn4066283", project:"Click Here" },
  ];

  const [activeIcon, setActiveIcon] = useState(null);

  // Fungsi untuk menangani klik pada ikon
  const handleIconClick = (iconId) => {
    if (activeIcon === iconId) {
      // Jika ikon yang sama diklik, tutup ikonnya
      setActiveIcon(null);
    } else {
      // Jika ikon lain diklik, aktifkan ikon yang baru
      setActiveIcon(iconId);
    }
  };

  useEffect(() => {
    // Fungsi untuk menangani klik di luar ikon
    const handleWindowClick = () => {
      setActiveIcon(null); // Tutup ikon yang aktif
    };

    // Fungsi untuk menangani scroll
    const handleWindowScroll = () => {
      setActiveIcon(null); // Tutup ikon yang aktif saat scrolling
    };

    // Tambahkan event listener untuk klik dan scroll pada window
    window.addEventListener("click", handleWindowClick);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      // Hapus event listener saat komponen tidak lagi digunakan
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div className="h-full w-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 relative z-50">
      <div className="p-7 max-w-7xl m-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-primary md:text-2xl">
            RUNDWEB
          </h1>
        </div>
        <div className="hidden sm:flex items-center text-primary gap-4">
          {menu.map((item) => (
            <a href="" key={item.name} className="font-medium tracking-wide">
              {item.name}
            </a>
          ))}
        </div>
        <div
          className="flex items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          {icons.map((icon) => (
            <div
              key={icon.id}
              onClick={(e) => {
                e.stopPropagation(); // Mencegah klik pada ikon dianggap sebagai klik window
                handleIconClick(icon.id);
              }}
              className="relative cursor-pointer neomorphism text-xl h-8 w-8 lg:h-10 lg:w-10 text-primary flex items-center justify-center bg-white-400 rounded-full "
            >
              <icon.label />
              <div
                className={`${
                  activeIcon === icon.id ? "flex" : "hidden"
                } absolute neomorphism top-10 lg:top-14 w-48 p-2 py-4 right-0 rounded-lg`}
              >
                <h1 className="fontcode text-sm text-primary">{icon.Text} <a href={icon.link} target="_blank" className="underline underline-offset-2">{icon.project}</a></h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
