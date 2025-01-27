import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        mainHeading={"This is main heading"}
        subHeading={"this is sub heading"}
      ></SectionTitle>
    </div>
  );
};

export default Home;
