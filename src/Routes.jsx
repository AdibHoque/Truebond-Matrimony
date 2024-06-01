import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default routes;
