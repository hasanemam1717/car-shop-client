import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import AllCar from "./AllCar";
import BanndrVBg from "./Banner/BanndrVBg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DetailX | Home</title>
      </Helmet>
      <BanndrVBg></BanndrVBg>
      <SectionTitle
        mainHeading="Welcome to DetailX!"
        subHeading="Full-Service
          Detailing for Cars"
      ></SectionTitle>
      <AllCar></AllCar>
    </div>
  );
};

export default Home;
