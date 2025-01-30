import { Helmet } from "react-helmet-async";
import { useGetAllCarQuery } from "../../redux/feature/product/productApi";
import Products from "../Products";

const AllCar = () => {
  const { data } = useGetAllCarQuery(undefined);
  console.log(data?.response, "Data from AllProduct page");
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
