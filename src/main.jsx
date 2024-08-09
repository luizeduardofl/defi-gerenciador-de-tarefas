import React from "react";
import ReactDOM from "react-dom/client";
import PaginaInicial from "./PaginaInicial.jsx";
import PaginaPrincipal from "./PaginaPrincipal.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaSobre from "./PaginaSobre.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
  },
  {
    path: "/main",
    element: <PaginaPrincipal />,
  },
  {
    path: "/about",
    element: <PaginaSobre />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
