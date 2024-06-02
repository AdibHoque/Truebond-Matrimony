import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  return (
    <>
      <div className="px-2 py-2 bg-deep-purple-300 bg-opacity-20 lg:py-4">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </>
  );
}
