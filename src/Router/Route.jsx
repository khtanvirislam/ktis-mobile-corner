import { Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";

import { Favorites } from "../Pages/Favorites/Favorites";
import { Login } from "../Pages/Log-in/Login";
import { MainLayout } from "../LayOut/MainLayOut/MainLayOut";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
import { Phone } from "../Pages/Phone/Phone";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
      },
    ],
  },
]);

export default myCreatedRoute;
