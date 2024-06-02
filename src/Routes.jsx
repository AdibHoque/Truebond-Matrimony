import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";

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
    ],
  },
]);

export default routes;
