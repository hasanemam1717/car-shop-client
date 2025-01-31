import {
  useCurrentUser,
  useCurrentUserId,
} from "../../redux/feature/auth/authSlice";
import { useGetDetailsQuery } from "../../redux/feature/product/orderApi";
import { useAppSelector } from "../../redux/hook";

const OrderPage = () => {
  // Get the current user's email from Redux state
  const userId = useAppSelector(useCurrentUserId);
  console.log(userId);
  const user = useAppSelector(useCurrentUser);
  // console.log(user);

  // Fetch order data using the user's email
  const { data, isLoading, isError } = useGetDetailsQuery(undefined);
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

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
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
                  Quantity
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Price (USD)
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {/* Read-only quantity */}
                    <input
                      type="text"
                      value={order.quantity}
                      readOnly
                      className="w-16 text-center bg-gray-100 rounded-md p-1 cursor-not-allowed"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    ${order.price.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Price */}
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold text-gray-800">
            Total: $
            {orders
              .reduce((total, order) => total + order.price * order.quantity, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
