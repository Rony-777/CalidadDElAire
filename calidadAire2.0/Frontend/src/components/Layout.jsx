import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Children } from "react";

const Layout = ({children}) => {
  return (
    <div >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
