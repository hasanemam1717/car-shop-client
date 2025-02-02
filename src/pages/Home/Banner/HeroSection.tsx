import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/young-bearded-man-with-white-t-shirt_273609-7190.jpg?t=st=1738326789~exp=1738330389~hmac=6cf3aa78d70c20345d2408e3264e77e06260b8c35e2d7b6e7af82ed3fb4c879d&w=1380')`, // Replace with your background image URL
      }}
    >
      {/* Overlay with blur and opacity */}
      <div className="absolute inset-0 bg-gray-950 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-red-600">AutoWorld</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your Ultimate Destination for Luxury and Performance Cars
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            <Link to={"/allCar"}> Explore Our Collection</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
