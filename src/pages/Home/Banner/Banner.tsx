import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/images/Adobe Express - file.png";
import img2 from "../../../assets/images/mechanic-changing-tires-car-service_1303-26889.avif";
import img3 from "../../../assets/images/view-3d-car_23-2150998589.jpg";

const Banner = () => {
  return (
    <Carousel className="w-full" autoPlay={true} infiniteLoop={true}>
      <div>
        <img className="w-full object-cover" src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Banner;
