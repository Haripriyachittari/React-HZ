/**
 * created a  server
 *HMR- Hot model replacement
 *file watching algorithm-c++
 *bundling
 * minification
 * cleaning out code
 * Development and production build
 * super fast build algorithm
 * image optimization
 *caching while development
 *compression

 * Compatible with older version of browswers
 *HTTPS on dev
 *port number
 * consistent hashing algorithm
 * Zero config
  **/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h2",
  {
    id: "title",
    className: "title",
    style: {
      backgroundColor: "gold",
      borderRadius: "2rem",
      textAlign: "center",
    },
  },
  "Namaste"
);
const para = React.createElement(
  "p",
  {
    id: "para",
    className: "para",
    style: { backgroundColor: "orange", textAlign: "center" },
  },
  "Ignited app using parcel"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "container",
  },
  [heading, para]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
