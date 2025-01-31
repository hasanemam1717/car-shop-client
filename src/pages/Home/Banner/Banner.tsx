// import { Banner } from "react-responsive-Banner";
// import "react-responsive-Banner/lib/styles/Banner.min.css";
// import img1 from "../../../assets/images/Adobe Express - file.png";
// import img2 from "../../../assets/images/mechanic-changing-tires-car-service_1303-26889.avif";
// import img3 from "../../../assets/images/view-3d-car_23-2150998589.jpg";

// const Banner = () => {
//   return (
//     <Banner className="w-full" autoPlay={true} infiniteLoop={true}>
//       <div>
//         <img className="w-full object-cover" src={img1} />
//       </div>
//       <div>
//         <img src={img2} />
//       </div>
//       <div>
//         <img src={img3} />
//       </div>
//     </Banner>
//   );
// };

// export default Banner;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const images = [
  "https://img.freepik.com/free-photo/back-side-view-metallic-silver-coupe-road_114579-4049.jpg?t=st=1738334637~exp=1738338237~hmac=b90b83cab1a7d7c77e0953a3db1eaa79615368b980b838979dc10beb060bef25&w=1380",
  "https://img.freepik.com/free-photo/sliver-metallic-color-sport-car-driving-with-high-speed-road_114579-4029.jpg?t=st=1738334711~exp=1738338311~hmac=18d16fd16a8aac0a113e54c2a00361eb6e6800b573d7bf5cd15c97e7fff147d7&w=740",
  "https://img.freepik.com/free-photo/white-sport-car-with-black-autotuning-driving-road_114579-4071.jpg?t=st=1738334746~exp=1738338346~hmac=75c514024b06ddf56f9767eb3943538d76db0deda5845b7c9153b57d56aae5b2&w=1380",
  "https://img.freepik.com/free-photo/closeup-shot-retro-car-with-only-back-wheels-ground-street-night_181624-32812.jpg?t=st=1738334819~exp=1738338419~hmac=e80a066afd9fefc5794a1220e5a13fb09f692572a3e3c0037ea2382a3d6591ca&w=1380",
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play function
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 2000); // Change every 3 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [currentIndex, isHovered]);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrapper */}
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="min-w-full object-cover h-[250px] sm:h-[400px]"
          />
        ))}
      </motion.div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-950 text-white p-2 rounded-full hover:bg-black"
      >
        <BiChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-950 text-white p-2 rounded-full "
      >
        <BiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
