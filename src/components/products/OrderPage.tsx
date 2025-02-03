import { useCurrentUser } from "../../redux/feature/auth/authSlice";
import { useGetOrdersQuery } from "../../redux/feature/product/orderApi";
import { useAppSelector } from "../../redux/hook";
import { user } from "../layout/Dashbard";

const OrderPage = () => {
  // Get the current user's email from Redux state
  const { email } = useAppSelector(useCurrentUser) as user;
  // Fetch order data using the user's email
  const { data, isLoading, isError } = useGetOrdersQuery(undefined);
  // console.log(data?.data);

  // Display loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold">Loading orders...</p>
      </div>
    );
  }

  // Display error state
  if (isError) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold text-red-600">
          Failed to fetch orders. Please try again later.
        </p>
      </div>
    );
  }

  // Use fetched order data or fallback to an empty array
  const orders = data?.data || [];
  // console.log(orders);

  return (
    <div className="min-h-screen bg-gray-100  sm:p-0 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-0 lg:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          My Orders
        </h1>

        {/* Order Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Payment Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Total Price (BDT)
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-700">{email}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {/* Read-only quantity */}
                    <input
                      type="text"
                      value={order.status}
                      readOnly
                      className="w-16 text-center bg-gray-100 rounded-md p-1 cursor-not-allowed"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    ${order.totalPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
