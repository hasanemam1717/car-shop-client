import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

export default function LogIn() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "admin@example.com",
      password: "a-0001",
    },
  });
  const navigate = useNavigate();
  const [logIn, { data, error }] = useLoginMutation();

  console.log("data", data);
  console.log("error", error);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await logIn(userInfo).unwrap();
      const user = verifyToken(res.data.token) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res?.data?.token }));
      toast.success("Login successfully", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div>
      <Helmet>
        <title>DetailX | Home</title>
      </Helmet>
      <div className="min-h-screen bg-black flex items-center justify-center bg-base">
        <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="lg:text-4xl text-xl font-semibold mb-6 text-primary text-center">
            LogIn Now
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-neutral">
              Don't have an account?
              <Link to="/register" className="text-red-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
