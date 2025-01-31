import { BiUser } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";

const Dashboard = () => {
  const user = useAppSelector(useCurrentUser);
  return (
    <div>
      <h1 className="text-center container text-4xl ml-2">
        {user?.role} Dashboard
      </h1>
      <div className="flex gap-2  mx-auto">
        <div className="w-64 min-h-full bg-gray-900 p-4">
          <ul className="space-y-5">
            <NavLink
              className="flex gap-2 hover:bg-red-600 rounded-md text-xl p-1 items-center"
              to={"/dashboard/user"}
            >
              <BiUser></BiUser> User{" "}
            </NavLink>{" "}
            <NavLink
              className="flex gap-2 hover:bg-red-600 rounded-md text-xl p-1 items-center"
              to={"/dashboard/user"}
            >
              <BiUser></BiUser> User{" "}
            </NavLink>{" "}
            <NavLink
              className="flex gap-2 hover:bg-red-600 rounded-md text-xl p-1 items-center"
              to={"/dashboard/user"}
            >
              <BiUser></BiUser> User{" "}
            </NavLink>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
