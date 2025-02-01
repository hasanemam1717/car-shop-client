import { Helmet } from "react-helmet-async";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/feature/auth/authApi";
import { toast } from "sonner";

export default function Register() {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [registration, { data }] = useRegisterMutation();
  console.log(registration);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        address: data.address,
        password: data.password,
      };
      console.log(userInfo);
      registration(userInfo);
      toast.success("Registration is successfully.");

      reset();

      navigate("/login");
    } catch (err) {
      console.log(err, "register");
    }
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-base">
      <Helmet>
        <title>DetailX | Register</title>
      </Helmet>
      <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="lg:text-4xl text-xl font-semibold mb-6 text-primary text-center">
          Register Now
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-y-4 flex-col">
            <label htmlFor="name" className="text-xl ">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="write your name"
              className="p-1 border-gray-100 text-black bg-white rounded-xs "
            />
          </div>
          <div className="flex space-y-4 flex-col">
            <label htmlFor="email" className="text-xl ">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="write your email"
              className="p-1 border-gray-100 text-black bg-white rounded-xs "
            />
          </div>
          <div className="flex space-y-4 flex-col">
            <label htmlFor="email" className="text-xl ">
              Phone
            </label>
            <input
              type="text"
              {...register("phone")}
              placeholder="write your phone number"
              className="p-1 border-gray-100 text-black bg-white rounded-xs "
            />
          </div>{" "}
          <div className="flex space-y-4 flex-col">
            <label htmlFor="email" className="text-xl ">
              City
            </label>
            <input
              type="text"
              {...register("city")}
              placeholder="write your city"
              className="p-1 border-gray-100 text-black bg-white rounded-xs "
            />
          </div>{" "}
          <div className="flex space-y-4 flex-col">
            <label htmlFor="email" className="text-xl ">
              Address
            </label>
            <input
              type="text"
              {...register("address")}
              placeholder="write your address"
              className="p-1 border-gray-100 text-black bg-white rounded-xs "
            />
          </div>
          <div className="flex space-y-4 flex-col">
            <label htmlFor="password" className="text-xl ">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="write your password."
              className="p-1 border-gray-100 text-black bg-white rounded-xs "
            />
            <button
              type="submit"
              className="w-full  text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral">
            Did you have an account?
            <Link to="/login" className="text-red-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
