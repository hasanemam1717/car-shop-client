import SearchCars from "../components/form/SearchCars";
import Loading from "../components/products/Loading";
import ProductCart from "../components/ui/ProductCart";
import { useGetAllCarQuery } from "../redux/feature/product/productApi";
import { Select } from "antd";
import { CiFilter } from "react-icons/ci";

const Products = () => {
  const { data, isLoading } = useGetAllCarQuery(undefined);
  console.log(data, "data from products");
  const handleSearch = (data: string) => {
    console.log(data);
  };
  const handleSort = (value: string) => {
    console.log(`${value}`);
  };
  const handleBrand = (value: string) => {
    console.log(`${value}`);
  };
  const handleCategory = (value: string) => {
    console.log(`${value}`);
  };
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-3xl text-center">All cars</h1>
      <div className="lg:flex w-full  justify-between items-center  ">
        <SearchCars handleSearch={handleSearch}></SearchCars>
        <div>
          {/* Sorting by price */}
          <Select
            defaultValue="Low"
            style={{ width: 250 }}
            onChange={handleSort}
            options={[
              {
                label: <span>Price</span>,
                title: "price",
                options: [
                  { label: <span>Low</span>, value: "desc" },
                  { label: <span>High</span>, value: "asc" },
                ],
              },
            ]}
          />
        </div>
      </div>
      {/* content */}

      <div className="grid grid-cols-12 gap-2 ">
        <div className="lg:col-span-2 col-span-12 ">
          {/* search by brand and category */}
          <div>
            <div className="h-ful min-h-full bg-gray-900 ">
              <div className="flex gap-2 items-center mt-5 p-1 lg:p-5 ">
                <CiFilter size={24} />
                <h1 className="font-semibold">Filter</h1>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {/* sort by brand */}
                <Select
                  placeholder="Brand"
                  style={{ width: 250 }}
                  onChange={handleCategory}
                  options={[
                    {
                      label: <span>Brand</span>,
                      title: "Brand",
                      options: [
                        { label: <span>Low</span>, value: "desc" },
                        { label: <span>High</span>, value: "asc" },
                      ],
                    },
                  ]}
                />{" "}
                <Select
                  placeholder="Category"
                  style={{ width: 250 }}
                  onChange={handleCategory}
                  options={[
                    {
                      label: <span>Category</span>,
                      title: "Category",
                      options: [
                        { label: <span>Low</span>, value: "desc" },
                        { label: <span>High</span>, value: "asc" },
                      ],
                    },
                  ]}
                />
                <button className="w-full bg-red-600 rounded-sm p-1">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <div>
            {isLoading ? (
              <Loading></Loading>
            ) : (
              <>
                {data?.response.length === 0 ? (
                  <div className="text-center text-3xl items-center  text-red-600">
                    No car available for sale...🚕
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 justify-between">
                    {data?.response.map((item: any) => (
                      <ProductCart key={item._id} item={item}></ProductCart>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
