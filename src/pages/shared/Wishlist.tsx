import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  clearCart,
  removeFromCart,
  selectCurrentProducts,
} from "../../redux/feature/product/productCartSlice";
import { useCreateOrderMutation } from "../../redux/feature/product/orderApi";
import { toast } from "sonner";
import { useCurrentUser } from "../../redux/feature/auth/authSlice";
import { useEffect } from "react";

const WishlistPage = () => {
  const item = useAppSelector(selectCurrentProducts);
  const { role } = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const wishlistItems = item;

  // Calculate total quantity and total price
  const totalQuantity = wishlistItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = wishlistItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  console.log(role);

  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();

  // Handle remove item from wishlist
  const handleRemoveItem = (product: string) => {
    dispatch(removeFromCart(product));
  };

  // Handle add to cart
  const handleAddToCart = async () => {
    if (role === "admin") {
      toast.error("Admin can not order car.");
      return;
    }
    const cartInfo = {
      products: item,
    };
    await createOrder(cartInfo);
    dispatch(clearCart());
  };

  // Use useEffect to handle side effects of the mutation
  useEffect(() => {
    const toastId = "product";

    if (isLoading) {
      toast.loading("Processing ...", { id: toastId });
    }

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) {
      toast.error(JSON.stringify(error), { id: toastId });
    }
  }, [isLoading, isSuccess, isError, data, error]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.product}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <div className="grid grid-cols-2 gap-1">
                <h2 className="text-xl font-semibold mb-2">Name:{item.name}</h2>
                <p className="text-white mb-1">
                  <span className="font-medium">Price:</span> $
                  {item.price.toFixed(2)}
                </p>
                <p className="text-white mb-1">
                  <span className="font-medium">Quantity:</span> {item.quantity}
                </p>
                <p className="text-white mb-4">
                  <span className="font-medium">In Stock:</span>{" "}
                  {item.inStock ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-600">No</span>
                  )}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleAddToCart()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveItem(item.product)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Quantity and Total Price Section */}
      <div className="mt-8 p-6 bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Wishlist Summary</h2>
        <div className="space-y-2">
          <p className="text-white">
            <span className="font-medium">Total Quantity:</span> {totalQuantity}
          </p>
          <p className="text-white">
            <span className="font-medium ">Total Price: </span>
            {totalPrice.toFixed(2)} BDT
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
