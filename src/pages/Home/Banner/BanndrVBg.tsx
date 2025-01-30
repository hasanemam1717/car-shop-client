import videoBg from "../../../assets/videos/7020182_Transport_Future_1920x1080.mp4";

const BanndrVBg = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black  opacity-50"></div>

      {/* Centered Content */}
      <div className="relative text-center  text-white px-4">
        <h1 className="text-4xl  font-bold leading-snug max-w-3xl">
          <span className="lg:text-9xl text-red-600">Car Detailing</span>, Shop
          & Repair
        </h1>
      </div>
    </div>
  );
};

export default BanndrVBg;
