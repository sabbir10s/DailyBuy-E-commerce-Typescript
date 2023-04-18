import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="container mt-2 ">
      <div className="flex items-center gap-5 w-full">
        <div className="w-full">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
