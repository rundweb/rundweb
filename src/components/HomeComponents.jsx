const HomeComponents = () => {
  return (
    <div className="flex flex-col gap-10 py-5 lg:py-12">
      <div
        className="p-5 max-w-7xl m-auto flex flex-col gap-5 lg:gap-8 items-center justify-center text-center text-primary"
        data-aos="zoom-in" data-aos-duration="1000"
      >
        <h1 className="text-2xl font-bold tracking-wide sm:text-4xl md:max-w-3xl lg:text-5xl">
          Boost Your Business with High-Converting Landing Pages
        </h1>
        <p className="text-base font-normal tracking-wide">
          Custom designs tailored to your goals. Start converting today!
        </p>
        <a
          href=""
          className="neomorphism h-12 flex items-center justify-center px-6 rounded-2xl font-semibold hover:hoverneo"
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
};

export default HomeComponents;
