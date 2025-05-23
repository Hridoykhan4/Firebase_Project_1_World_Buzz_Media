import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../layouts/About";
import Carrier from "../layouts/Carrier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01"></Navigate>,
      },

      {
        path: "/category/:catId",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.catId}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(` https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/carrier",
    element: <Carrier></Carrier>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
