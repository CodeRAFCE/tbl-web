import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/root-layout/RootLayout";
import { Home } from "../pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { element: <Home />, index: true },
    ],
  },
];

const Routes = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Routes;