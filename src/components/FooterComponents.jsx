import { MdAlternateEmail } from "react-icons/md";
const FooterComponents = () => {
  return (
    <div className="p-5 max-w-7xl m-auto flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center text-center gap-5" data-aos="zoom-in"
          data-aos-duration="1300">
        <h1 className="text-4xl font-bold text-primary mb-2 md:mb-5 md:text-5xl md:max-w-2xl leading-[20-rem]">
          Tell me about your next project
        </h1>
        <div className="flex items-center justify-center gap-2 flex-col w-full  md:flex-row">
          <a
            href=""
            className="sm:w-60 flex items-center gap-1 border-2 border-primary bg-primary text-white h-12 w-full justify-center rounded-2xl hover:hovergreen"
          >
            <MdAlternateEmail /> Email Me
          </a>
          <a
            href=""
            className="sm:w-60 h-12 w-full border-2 border-primary text-primary flex items-center justify-center rounded-2xl hover:bg-primary hover:text-white duration-500 ease-in-out"
          >
            Whatsapp
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center mt-20 text-primary md:flex-row md:justify-between">
        <h1>&copy; 2025 All rights reserved.</h1>
        <div className="flex items-center gap-2 justify-center text-sm">
          <a href="">Linkedin</a>/<a href="">Dribbble</a>/
          <a href="">CodeCanyon</a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
