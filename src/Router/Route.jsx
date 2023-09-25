import { Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { MainLayout } from "../LayOut/MainLayOut";
import { Favorites } from "../Pages/Favorites/Favorites";
import { Login } from "../Pages/Log-in/Login";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
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
