import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import Restuarant from "./Pages/RestuarantPage";
import Cart from "./Pages/Cart";
import { UserContextProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./Pages/About"));

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <UserContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </UserContextProvider>
      </Provider>
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
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
