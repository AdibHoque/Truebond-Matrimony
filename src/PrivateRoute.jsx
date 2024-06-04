import {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import MySwal from "sweetalert2";
import {Spinner} from "@material-tailwind/react";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }
  if (user) return children;
  MySwal.fire({
    position: "center",
    icon: "error",
    text: "Kindly Login first to enter this page.",
    showConfirmButton: false,
    timer: 2000,
  });
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
}
