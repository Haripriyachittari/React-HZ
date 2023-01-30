import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import Restuarant from "./Pages/RestuarantPage";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import ShimmerPage from "./components/ShimmerPage";

// console.log(restarauntList.length);

const App = () => {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error err="Page" />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <ShimmerPage />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restuarant/:id",
        element: <Restuarant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
