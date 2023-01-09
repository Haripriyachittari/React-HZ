import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading", key: "h1" },
  "Laying the foundation"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
