import { useGetRevenuesQuery } from "../../redux/feature/product/orderApi";

const TotalRevenuePage = () => {
  // Calculate total revenue
  const revenue = useGetRevenuesQuery(undefined);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
        <p className="text-4xl font-bold text-red-600">
          ${revenue.data?.data} BDT
        </p>
      </div>
    </div>
  );
};

export default TotalRevenuePage;
