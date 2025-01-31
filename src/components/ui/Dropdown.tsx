import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut, useCurrentUser } from "../../redux/feature/auth/authSlice";
import { FaRegUser } from "react-icons/fa6";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="inline-flex gap-3 items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
      >
        <span className="hidden lg:flex">
          <FaRegUser />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 sm:w-56"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            {/* Dashboard Button */}
            <Link to={"#"}>
              {user?.role === "admin" ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-indigo-600 hover:text-white transition duration-200 ease-in-out"
                    role="menuitem"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboardUser"
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-indigo-600 hover:text-white transition duration-200 ease-in-out"
                    role="menuitem"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-red-600 hover:text-white transition duration-200 ease-in-out"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
