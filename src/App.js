import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
