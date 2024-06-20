import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home } from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import Search from "./pages/Search.jsx";
import SingleProduct from "./pages/product/SingleProduct.jsx";
import Recipe from "./pages/Recipe.jsx";
import Form from "./pages/Form.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Sign from "./pages/Sign.jsx";
import Profile from "./pages/Profile.jsx";
import Resource from "./pages/Resource.jsx";
import MoreAbout from "./pages/MoreAbout.jsx";
import FormResource from "./pages/FormResource.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/items/${params.id}`),
      },
      {
        path: "/recipes",
        element: <Recipe/>,
      },
      {
        path: "/resources",
        element: <FormResource />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Sign",
        element: <Sign />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/moreabout",
        element: <MoreAbout />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
