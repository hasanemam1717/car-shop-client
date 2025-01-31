import SearchCars from "../components/form/SearchCars";
import Loading from "../components/products/Loading";
import ProductCart from "../components/ui/ProductCart";
import { useGetAllCarQuery } from "../redux/feature/product/productApi";
import { Select } from "antd";
import { CiFilter } from "react-icons/ci";

const Products = () => {
  const { data, isLoading } = useGetAllCarQuery(undefined);

  // Placeholder handlers for search, sort, and filters
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="my-8 text-3xl text-center font-bold text-white">
        All Cars
      </h1>

      {/* Search and Sort Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
        <SearchCars handleSearch={handleSearch} />
        <div className="w-full lg:w-auto">
          <Select
            defaultValue="Low"
            style={{ width: "100%", maxWidth: "250px" }}
            onChange={handleSort}
            options={[
              {
                label: <span>Price</span>,
                title: "price",
                options: [
                  { label: <span>Low to High</span>, value: "asc" },
                  { label: <span>High to Low</span>, value: "desc" },
                ],
              },
            ]}
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filter Sidebar */}
        <div className="lg:col-span-2 col-span-12">
          <div className="bg-gray-900 s text-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-6">
              <CiFilter size={24} className="text-white" />
              <h1 className="font-semibold text-lg">Filter</h1>
            </div>
            <div className="space-y-4">
              <Select
                placeholder="Brand"
                style={{ width: "100%" }}
                onChange={handleBrand}
                options={[
                  {
                    label: <span>Brand</span>,
                    title: "Brand",
                    options: [
                      { label: <span>Brand 1</span>, value: "brand1" },
                      { label: <span>Brand 2</span>, value: "brand2" },
                    ],
                  },
                ]}
              />
              <Select
                placeholder="Category"
                style={{ width: "100%" }}
                onChange={handleCategory}
                options={[
                  {
                    label: <span>Category</span>,
                    title: "Category",
                    options: [
                      { label: <span>Category 1</span>, value: "category1" },
                      { label: <span>Category 2</span>, value: "category2" },
                    ],
                  },
                ]}
              />
              <button className="w-full bg-red-600 text-white rounded-md py-2 hover:bg-red-700 transition-colors duration-200">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-10 col-span-12">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {data?.response.length === 0 ? (
                <div className="text-center text-3xl text-red-600 py-10">
                  No cars available for sale... 🚕
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data?.response.map((item: any) => (
                    <ProductCart key={item._id} item={item} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
