import { Helmet } from "react-helmet-async";
import Products from "../Products";

const AllCar = () => {
  return (
    <div>
      <Helmet>
        <title>DetailX | Menu</title>
      </Helmet>
      <Products></Products>
    </div>
  );
};

export default AllCar;
