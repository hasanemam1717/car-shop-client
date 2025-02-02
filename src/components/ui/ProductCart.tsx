import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useCurrentUser } from "../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/feature/product/productCartSlice";

export type TCar = {
  _id: string;
  name: string;
  image: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
};

const ProductCart = ({ item }: { item: TCar }) => {
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    try {
      if (user) {
        toast.success(
          "If you want to add to cart right now go to wishlist page."
        );
        dispatch(
          addToCart({
            product: item._id,
            name,
            price,
            quantity: 1,
            inStock,
            image,
          })
        );
      } else {
        toast.error("You well be logged in fast.");
        navigate("/login");
      }
    } catch (err) {
      console.log(err, "Error from product cart");
      toast.error("Something went wrong");
    }
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
            onClick={() => handleAddToCart()}
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
