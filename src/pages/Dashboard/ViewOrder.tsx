import { useGetOrdersQuery } from "../../redux/feature/product/orderApi";

export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Product {
  product: string;
  quantity: number;
  _id: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  userId: string;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function ViewOrder() {
  const { isLoading, data } = useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  const orderData: Order[] = data?.data;

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      {orderData?.map((order) => (
        <div
          key={order.userId}
          className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Information</h3>
              <p className="text-white">
                <span className="font-semibold">User ID:</span> {order.userId}
              </p>
              <p className="text-white">
                <span className="font-semibold">Order Date:</span>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>
              <p className="text-white">
                <span className="font-semibold">Last Updated:</span>{" "}
                {new Date(order.updatedAt).toLocaleString()}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <p className="text-white">
                <span className="font-semibold">Total Price:</span> $
                {order.totalPrice.toFixed(2)}
              </p>
              <p className="text-white">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {order.status}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {/* {order.products.map((product, i) => (
                <li key={i} className="text-white">
                  <span className="font-semibold">Product ID:</span>{" "}
                  {product.product},{" "}
                  <span className="font-semibold">Quantity:</span>{" "}
                  {product.quantity}
                </li>
              ))} */}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Transaction Details</h3>
            <p className="text-white">
              <span className="font-semibold">Transaction ID:</span>{" "}
              {order.transaction.id}
            </p>
            <p className="text-white">
              <span className="font-semibold">Payment Method:</span>{" "}
              {order.transaction.method}
            </p>
            <p className="text-white">
              <span className="font-semibold">Transaction Date:</span>{" "}
              {order.transaction.date_time}
            </p>
            <p className="text-white">
              <span className="font-semibold">Transaction Status:</span>{" "}
              {order.transaction.bank_status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
