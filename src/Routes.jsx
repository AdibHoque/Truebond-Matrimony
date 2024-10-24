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
import Checkout from "./pages/Checkout";
import MyContactRequest from "./components/dashboard/user/MyContactRequest";
import ApprovedContactRequest from "./components/dashboard/admin/ApprovedContactRequest";
import ApprovedPremium from "./components/dashboard/admin/ApprovedPremium";
import AdminRoute from "./AdminRoute";
import GotMarriedDashboard from "./components/dashboard/user/GotMarried";
import SuccessStories from "./components/dashboard/admin/SuccessStories";
import Upgrade from "./pages/Upgrade";
import Premium from "./pages/PremiumBiodatas";

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
          fetch(
            `https://truebond-matrimony.vercel.app/biodatas?id=${params.id}`
          ),
      },
      {path: "/premium", element: <Premium></Premium>},

      {
        path: "/upgrade",
        element: (
          <PrivateRoute>
            <Upgrade></Upgrade>
          </PrivateRoute>
        ),
      },
      {
        path: "/upgrade/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
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
        path: "mycontactrequest",
        element: (
          <PrivateRoute>
            <MyContactRequest></MyContactRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "gotmarried",
        element: (
          <PrivateRoute>
            <GotMarriedDashboard></GotMarriedDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageUsers></ManageUsers>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "admindashboard",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "approvedcontactrequest",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ApprovedContactRequest></ApprovedContactRequest>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "approvedpremium",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ApprovedPremium></ApprovedPremium>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "successstories",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <SuccessStories></SuccessStories>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
