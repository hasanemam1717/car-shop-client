import { Helmet } from "react-helmet-async";
import ProductCart from "../../components/ui/ProductCart";
import { useGetAllCarQuery } from "../../redux/feature/product/productApi";

const AllCar = () => {
  const { data } = useGetAllCarQuery(undefined);
  console.log(data?.response, "Data from AllProduct page");
  return (
    <div>
      <Helmet>
        <title>DetailX | Menu</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {data?.response.map((item: any) => (
          <ProductCart key={item._id} item={item}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default AllCar;
