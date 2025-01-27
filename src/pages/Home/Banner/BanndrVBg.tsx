import videoBg from "../../../assets/videos/7020182_Transport_Future_1920x1080.mp4";

const BanndrVBg = () => {
  return (
    <div>
      <video
        className="w-full object-cover m-0 p-0 "
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default BanndrVBg;
