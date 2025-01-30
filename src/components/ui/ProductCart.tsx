import { Button } from "antd";

const ProductCart = ({ item }) => {
  const { image, description, price, brand, category, name, inStock } = item;
  console.log(inStock);
  const handleOrder = () => {
    console.log("clicked");
  };
  return (
    <div className="lg:w-[360px] w-full hover:border-1 hover:border-b-gray-200  rounded-sm  ">
      <div className="w-full p-1 lg:p-5 ">
        <img
          src={image}
          className="w-full h-[350px]  items-center object-cover  "
          alt={`${name}.jpg`}
        />
      </div>
      <hr className="text-gray-200 " />
      <div className=" items-center gap-1 flex justify-between mt-1  ml-4">
        <div>
          <h1 className="font-semibold text-2xl ">{brand}</h1>
          <h1 className="text-xl text-red-600">${price}</h1>
          <h1 className="font-thin">{description}</h1>
        </div>
        <div>
          <div className="mr-5 flex flex-col items-center gap-2">
            {inStock ? (
              <h1
                className=" text-green-600 right-0 p-1 rounded-sm "
                style={{ border: "1px solid white" }}
              >
                Available
              </h1>
            ) : (
              <h1
                className=" text-red-600 right-0 p-1 rounded-sm "
                style={{ border: "1px solid white" }}
              >
                {" "}
                Out of stock{" "}
              </h1>
            )}
            <Button
              htmlType="submit"
              onClick={() => handleOrder()}
              style={{ background: "red", color: "white" }}
            >
              Order now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
