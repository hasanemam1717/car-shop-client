import { useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useVerifyOrderQuery } from "../redux/feature/product/orderApi";

export default function VerifyOrder() {
  const [searchParams] = useSearchParams();
  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData = data?.data?.[0];

  useEffect(() => {
    document.title = "Order Verification";
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Order Verification
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Order Details */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Order Details
          </h2>
          <p>
            <strong>Order ID:</strong> {orderData?.order_id}
          </p>
          <p>
            <strong>Amount:</strong> {orderData?.currency}{" "}
            {orderData?.amount?.toFixed(2)}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded text-white ${
                orderData?.bank_status === "Success"
                  ? "bg-green-500"
                  : "bg-red-600"
              }`}
            >
              {orderData?.bank_status}
            </span>
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(orderData?.date_time)?.toLocaleString()}
          </p>
        </div>

        {/* Payment Information */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Payment Information
          </h2>
          <p>
            <strong>Method:</strong> {orderData?.method}
          </p>
          <p>
            <strong>Transaction ID:</strong> {orderData?.bank_trx_id}
          </p>
          <p>
            <strong>Invoice No:</strong> {orderData?.invoice_no}
          </p>
          <p>
            <strong>SP Code:</strong> {orderData?.sp_code}
          </p>
          <p>
            <strong>SP Message:</strong> {orderData?.sp_message}
          </p>
        </div>

        {/* Customer Information */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Customer Information
          </h2>
          <p>
            <strong>Name:</strong> {orderData?.name}
          </p>
          <p>
            <strong>Email:</strong> {orderData?.email}
          </p>
          <p>
            <strong>Phone:</strong> {orderData?.phone_no}
          </p>
          <p>
            <strong>Address:</strong> {orderData?.address}
          </p>
          <p>
            <strong>City:</strong> {orderData?.city}
          </p>
        </div>

        {/* Verification Status */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Verification Status
          </h2>
          <div className="flex items-center gap-2 text-lg">
            {orderData?.is_verify === 1 ? (
              <span className="text-green-600 font-bold">✔ Verified</span>
            ) : (
              <span className="text-yellow-600 font-bold">⚠ Not Verified</span>
            )}
          </div>
          <div className="mt-4">
            <Link to="/view-order">
              <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all">
                View Orders
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
