import { useState } from "react";
import portfolio1 from "../assets/images/rundpay.jpg";
import portfolio2 from "../assets/images/rundmost.jpg";
import portfolio3 from "../assets/images/rundshop.jpg";
import { HiClipboardList } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";
import { MdNewLabel } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
const PortfolioComponents = () => {
  const items = [
    {
      id: 1,
      name: "RundPay, By RundWeb",
      sale: 23,
      stars: 4.7,
      price:"$12 - $20",
      image: portfolio1,
      category: ["Bestsellers", "Popular", "Recommendation"],
      link : "https://rundweb.github.io/Rundpay/"
    },
    {
      id: 2,
      name: "RundMost, By RundWeb",
      sale: 27,
      stars: 4.8,
      price:"$12 - $20",
      image: portfolio2,
      category: ["Popular", "Recommendation"],
      link : "https://rundweb.github.io/rundmost/"
    },
    {
      id: 3,
      name: "RundShop, By RundWeb",
      sale: 17,
      stars: 5.0,
      price:"$20 - $34",
      image: portfolio3,
      category: ["Bestsellers", "Recommendation","New"],
      link : "https://rundweb.github.io/rundshop/"
    }
  ];

  const [filterCategory, setFilterCategory] = useState("");
  const isMatchingCategory = (item) => {
    if (filterCategory === "") return true;
    return item.category.some((cat) => cat === filterCategory);
  };
  const filteredItems = items.filter(isMatchingCategory);

  return (
    <div className="flex flex-col p-5 max-w-7xl m-auto gap-5 mb-10">
      <h1 className="text-xl sm:text-2xl font-semibold text-primary">
        Explore Our Success Stories
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <button
          className="neomorphism h-10 px-4 text-base font-normal text-primary rounded-3xl flex items-center gap-2"
          onClick={() => setFilterCategory("")}
        >
          <HiClipboardList className="text-xl" /> All
        </button>
        <button
          className="neomorphism h-10 px-4 text-base font-normal text-primary rounded-3xl flex items-center gap-2"
          onClick={() => setFilterCategory("Bestsellers")}
        >
          <RiMedalFill className="text-xl" /> Bestsellers
        </button>
        <button
          className="neomorphism h-10 px-4 text-base font-normal text-primary rounded-3xl flex items-center gap-2"
          onClick={() => setFilterCategory("Popular")}
        >
          <FaFire className="text-xl" /> Popular
        </button>
        <button
          className="neomorphism h-10 px-4 text-base font-normal text-primary rounded-3xl flex items-center gap-2"
          onClick={() => setFilterCategory("Recommendation")}
        >
          <AiFillLike className="text-xl" /> Recommendation
        </button>
        <button
          className="neomorphism h-10 px-4 text-base font-normal text-primary rounded-3xl flex items-center gap-2"
          onClick={() => setFilterCategory("New")}
        >
          <MdNewLabel className="text-xl" /> New
        </button>
      </div>

      <div className="flex flex-wrap gap-5 justify-around mt-5 lg:gap-10">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="neomorphism rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="flex items-center justify-center absolute w-full h-full top-0 left-0 group-hover:bg-slate-700 group-hover:bg-opacity-50">
                  <a href={item.link} target="blank" className="hidden group-hover:flex items-center font-medium gap-2 bg-white py-3 px-7 rounded-xl text-primary"><FaArrowRight /> Live Priview</a>
              </div>
              <div className="">
                <img src={item.image} alt="" className="h-56 w-[340px] object-cover object-top"/>
              </div>
              <div className="p-6 flex flex-col gap-2 text-primary">
                <h1 className="font-semibold tracking-wide">{item.name}</h1>
                <div className="flex items-center text-sm gap-2 my-2">
                  <h2>Over {item.sale} Sales</h2>
                  <h2 className="flex items-center neomorphism py-1 px-3 rounded-2xl gap-1"><IoStar className="text-yellow-400"/> {item.stars}</h2>
                </div>
                <h3 className="text-sm">Start from <span className="font-semibold">{item.price}</span></h3>
              </div>
            </div>
          ))
        ) : (
          <p className="font-semibold text-primary">Tidak ada item yang cocok.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioComponents;
