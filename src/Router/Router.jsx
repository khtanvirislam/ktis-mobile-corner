import { Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { MainLayout } from "../LayOut/MainLayOut";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainLayout></MainLayout>
        <Outlet></Outlet>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default myCreatedRoute;
