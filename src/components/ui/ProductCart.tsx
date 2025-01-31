import { toast } from "sonner";
import { useAppSelector } from "../../redux/hook";
import { useCurrentUser } from "../../redux/feature/auth/authSlice";

const ProductCart = ({ item }) => {
  const {
    image,
    description,
    price,
    brand,
    category,
    name,
    inStock,
    quantity,
  } = item;
  const user = useAppSelector(useCurrentUser);

  const handleOrder = (id) => {
    console.log("clicked", id, "Email user", user.email, item.price);

    toast.message("Clicked Order now");
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`${name}.jpg`}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{brand}</h1>
            <h1 className="text-sm font-thin text-gray-800">{category}</h1>

            <h1 className="text-lg font-bold text-red-600">${price}</h1>
          </div>
          <div className="flex flex-col items-end">
            {inStock ? (
              <span className="px-2 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
                Available
              </span>
            ) : (
              <span className="px-2 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
                Out of stock
              </span>
            )}
            <small className="text-black">Quantity:{quantity}</small>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>
        <div className="mt-4">
          <button
            onClick={() => handleOrder(item?._id)}
            disabled={!inStock}
            className={`w-full py-2 font-semibold text-white rounded ${
              inStock
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-400 cursor-not-allowed"
            } transition-colors duration-200`}
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
