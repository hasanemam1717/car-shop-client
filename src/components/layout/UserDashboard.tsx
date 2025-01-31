import { BiUser } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const UserDashboard = () => {
  const user = useAppSelector(useCurrentUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-950 text-white p-4 flex justify-between items-center">
        <Link to={"/"} className="text-2xl font-bold">
          {user?.role} Dashboard
        </Link>
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white focus:outline-none"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`bg-blue-950 text-white w-64 min-h-screen p-4 transform transition-transform duration-200 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          } lg:translate-x-0 fixed lg:relative z-50`}
        >
          <ul className="space-y-5">
            <NavLink
              className="flex gap-2 hover:bg-red-600 rounded-md text-xl p-2 items-center"
              to={"/dashboard/create-car"}
              onClick={() => setIsSidebarOpen(false)}
            >
              <IoCreateOutline /> Create Car
            </NavLink>
            <NavLink
              className="flex gap-2 hover:bg-red-600 rounded-md text-xl p-2 items-center"
              to={"/dashboard/user"}
              onClick={() => setIsSidebarOpen(false)}
            >
              <BiUser /> User
            </NavLink>
            <NavLink
              className="flex gap-2 hover:bg-red-600 rounded-md text-xl p-2 items-center"
              to={"/dashboard/user"}
              onClick={() => setIsSidebarOpen(false)}
            >
              <BiUser /> User
            </NavLink>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 text-black p-0 lg:p-4 lg:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
