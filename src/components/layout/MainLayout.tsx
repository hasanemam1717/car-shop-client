import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
