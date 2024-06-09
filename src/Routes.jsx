import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import Biodatas from "./pages/Biodatas";
import Dashboard from "./pages/Dashboard";
import UserHome from "./components/dashboard/user/UserHome";
import PrivateRoute from "./PrivateRoute";
import BiodataDetails from "./pages/BiodataDetails";
import Favorites from "./components/dashboard/user/Favorites";
import EditBiodata from "./components/dashboard/user/EditBiodata";
import ViewBiodata from "./components/dashboard/user/ViewBiodata";
import ManageUsers from "./components/dashboard/admin/ManageUsers";
import AdminDashboard from "./components/dashboard/admin/AdmnDashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/biodata/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails></BiodataDetails>
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:5000/biodatas?id=${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <PrivateRoute>
            <Favorites></Favorites>
          </PrivateRoute>
        ),
      },
      {
        path: "editbiodata",
        element: (
          <PrivateRoute>
            <EditBiodata></EditBiodata>
          </PrivateRoute>
        ),
      },
      {
        path: "viewbiodata",
        element: (
          <PrivateRoute>
            <ViewBiodata></ViewBiodata>
          </PrivateRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <PrivateRoute>
            <ManageUsers></ManageUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "admindashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
