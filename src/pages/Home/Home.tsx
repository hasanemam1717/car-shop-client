import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import BanndrVBg from "./Banner/BanndrVBg";
import ProductCart from "../../components/ui/ProductCart";
import { useGetAllCarQuery } from "../../redux/feature/product/productApi";
import Testimonials from "./Banner/Review";
import HeroSection from "./Banner/HeroSection";
import Banner from "./Banner/Banner";

const Home = () => {
  const { data } = useGetAllCarQuery({});
  // console.log(data?.response, "Data from AllProduct page");
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
      <div className="grid container mx-auto grid-cols-1 lg:grid-cols-4 gap-10">
        {data?.response.map((item: any) => (
          <ProductCart key={item._id} item={item}></ProductCart>
        ))}
      </div>
      <SectionTitle
        mainHeading="Client Reviews"
        subHeading="   What Our Customers Say"
      ></SectionTitle>
      <Testimonials></Testimonials>
      <HeroSection></HeroSection>
      <Banner></Banner>
    </div>
  );
};

export default Home;
