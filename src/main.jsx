import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <RouterProvider router={router}>
      <Nav></Nav>
    </RouterProvider>
  </React.StrictMode>
);
