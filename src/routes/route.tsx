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
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "user",
        element: <Users></Users>,
      },
    ],
  },
]);

export default router;
