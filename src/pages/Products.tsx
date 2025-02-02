import { useState } from "react";
import { Select, Pagination } from "antd";
import { CiFilter, CiSearch } from "react-icons/ci";
import Loading from "../components/products/Loading";
import ProductCart from "../components/ui/ProductCart";
import { useGetAllCarQuery } from "../redux/feature/product/productApi";
import { useForm } from "react-hook-form";

const Products = () => {
  const { register, handleSubmit } = useForm();
  const [filters, setFilters] = useState<Record<string, unknown>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);

  // Construct query parameters for the API call
  const queryParams = {
    ...filters,
    searchTerm,
    sortBy,
    sortOrder,
    page,
    limit,
  };

  // Fetch data using the Redux query hook
  const { data, isLoading, isError } = useGetAllCarQuery(queryParams, {
    refetchOnMountOrArgChange: true,
  });
  // console.log(data?.response);

  // Handle search form submission
  const onSubmit = (data: { search: string }) => {
    handleSearch(data.search);
  };

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1); // Reset to the first page when searching
  };

  // Handle sorting
  const handleSort = (value: string) => {
    setSortBy("price"); // Assuming sorting is by price
    setSortOrder(value);
    setPage(1); // Reset to the first page when sorting
  };

  // Handle brand filter
  const handleBrand = (value: string) => {
    setFilters((prev) => ({ ...prev, brand: value }));
    setPage(1); // Reset to the first page when filtering
  };

  // Handle category filter
  const handleCategory = (value: string) => {
    setFilters((prev) => ({ ...prev, category: value }));
    setPage(1); // Reset to the first page when filtering
  };

  // Reset filters
  const handleReset = () => {
    setFilters({});
    setSearchTerm("");
    setSortBy("");
    setSortOrder("");
    setPage(1); // Reset to the first page when resetting
  };

  // Handle pagination change
  const handlePageChange = (newPage: number, newLimit?: number) => {
    setPage(newPage);
    if (newLimit) setLimit(newLimit);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="my-8 text-3xl text-center font-bold text-white">
        All Cars
      </h1>

      {/* Search and Sort Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
        <div className="w-full lg:w-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full max-w-md">
              <input
                type="text"
                {...register("search")}
                placeholder="Search by name, brand, or category"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="p-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors duration-200"
              >
                <CiSearch size={20} />
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-auto">
          <Select
            defaultValue="Low to High"
            style={{ width: "100%", maxWidth: "250px" }}
            onChange={handleSort}
            options={[
              { label: "Low to High", value: "asc" },
              { label: "High to Low", value: "desc" },
            ]}
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filter Sidebar */}
        <div className="lg:col-span-2 col-span-12">
          <div className="bg-gray-900 text-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-6">
              <CiFilter size={24} className="text-white" />
              <h1 className="font-semibold text-lg">Filter</h1>
            </div>
            <div className="flex flex-col gap-5">
              <Select
                placeholder="Brand"
                style={{ width: "100%" }}
                onChange={handleBrand}
                options={[
                  { label: "Ford", value: "Ford" },
                  { label: "Toyota", value: "Toyota" },
                  { label: "Honda", value: "Honda" },
                  { label: "BMW", value: "BMW" },
                  { label: "Tesla", value: "Tesla" },
                  { label: "Mercedes-Benz", value: "Mercedes-Benz" },
                ]}
              />
              <Select
                placeholder="Category"
                style={{ width: "100%" }}
                onChange={handleCategory}
                options={[
                  { label: "Sedan", value: "Sedan" },
                  { label: "SUV", value: "SUV" },
                  { label: "Convertible", value: "Convertible" },
                  { label: "Truck", value: "Truck" },
                  { label: "Coupe", value: "Coupe" },
                ]}
              />
              <button
                onClick={handleReset}
                className="w-full bg-red-600 text-white rounded-md py-2 hover:bg-red-700 transition-colors duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-10 col-span-12">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <div className="text-center text-3xl text-red-600 py-10">
              Failed to fetch cars. Please try again later.
            </div>
          ) : data?.response.length === 0 ? (
            <div className="text-center text-3xl text-red-600 py-10">
              No cars available for sale... 🚕
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.response.map((car: any) => (
                  <ProductCart key={car._id} item={car} />
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <Pagination
                  current={page}
                  pageSize={limit}
                  total={data?.response?.length || 0}
                  onChange={handlePageChange}
                  showSizeChanger
                  onShowSizeChange={(current, size) =>
                    handlePageChange(1, size)
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
