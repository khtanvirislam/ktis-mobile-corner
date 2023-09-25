import { Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";

import { Favorites } from "../Pages/Favorites/Favorites";
import { Login } from "../Pages/Log-in/Login";
import { MainLayout } from "../LayOut/MainLayOut/MainLayOut";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
    ],
  },
]);

export default myCreatedRoute;
