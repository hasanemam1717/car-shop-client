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
import OrderPage from "../components/products/OrderPage";
import CheckoutPage from "../pages/Dashboard/ViewOrder";
import WishlistPage from "../pages/shared/Wishlist";
import VerifyOrder from "../pages/VerifyOrder";
import ViewOrder from "../pages/Dashboard/ViewOrder";
import TotalRevenuePage from "../pages/Dashboard/TotalRevenue";

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
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <WishlistPage></WishlistPage>
          </ProtectedRoute>
        ),
      },
      {
        path: "verify-order",
        element: (
          <ProtectedRoute>
            {" "}
            <VerifyOrder></VerifyOrder>
          </ProtectedRoute>
        ),
      },
      {
        path: "view-order",
        element: (
          <ProtectedRoute>
            <ViewOrder></ViewOrder>
          </ProtectedRoute>
        ),
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
        path: "orders",
        element: <TotalRevenuePage></TotalRevenuePage>,
      },
      {
        path: "user",
        element: <Users></Users>,
      },
      {
        path: "checkout",
        element: <CheckoutPage></CheckoutPage>,
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
        path: "my-order",
        element: <OrderPage></OrderPage>,
      },
      {
        path: "checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
    ],
  },
]);

export default router;
