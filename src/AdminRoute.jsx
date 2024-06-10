import {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import {Spinner} from "@material-tailwind/react";
import {useQuery} from "@tanstack/react-query";

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default function AdminRoute({children}) {
  const {user, loading} = useContext(AuthContext);
  const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://truebond-matrimony.vercel.app/users?email=${user.email}`
      );
      return res.json();
    },
  });
  if (isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }
  if (isAdmin.role == "admin") return children;

  return <Navigate to="/" replace></Navigate>;
}
