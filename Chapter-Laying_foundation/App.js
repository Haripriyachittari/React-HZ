import React from "react";
import ReactDOM from "react-dom/client";

// console.log(heading);

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">LOGO</h1>
      <div className="right">
        <input className="input" type="text" />
        <h1>Haripriya</h1>
        <img
          className="image"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="pi"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
