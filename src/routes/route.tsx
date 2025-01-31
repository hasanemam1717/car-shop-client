import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import MainLayout from "../components/layout/MainLayout";
import AllCar from "../pages/Home/AllCar";
import Dashboard from "../components/layout/Dashbard";
import Users from "../pages/Dashboard/Users";
import CreateCar from "../pages/Dashboard/CreateCar";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import UserDashboard from "../components/layout/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "allcar",
        element: <AllCar></AllCar>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "create-car",
        element: <CreateCar></CreateCar>,
      },
      {
        path: "user",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/dashboardUser",
    element: (
      <ProtectedRoute>
        <UserDashboard></UserDashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "create-car",
        element: <CreateCar></CreateCar>,
      },
      {
        path: "user",
        element: <Users></Users>,
      },
    ],
  },
]);

export default router;
