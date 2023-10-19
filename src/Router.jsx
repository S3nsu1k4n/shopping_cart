import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/shop",
      element: <Shopping />,
    },
  ]);


  return <RouterProvider router={router} />;
}

export default Router;