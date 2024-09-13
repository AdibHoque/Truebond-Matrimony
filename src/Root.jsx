import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer";
import {ScrollRestoration} from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="px-2 py-2 lg:py-4 bg-[#eee5f8]">
        <Navbar></Navbar>
      </div>
      <ScrollRestoration />
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}
