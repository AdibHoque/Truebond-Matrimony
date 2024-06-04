import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer";

export default function Root() {
  return (
    <>
      <div className="px-2 py-2 lg:py-4 bg-blue-gray-400 bg-opacity-20">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
