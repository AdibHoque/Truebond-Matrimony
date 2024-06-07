import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./Routes.jsx";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./AuthProvider";
import {register} from "swiper/element/bundle";
register();

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
