import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};
  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-base">
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
          </div>{" "}
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
