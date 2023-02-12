import { Link, useRouteError } from "react-router-dom";

const Error = (props) => {
  const error = useRouteError();
  console.log(useRouteError().statusText);
  return (
    <div className="">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87"
        className="notfoundImage"
        alt="restuarnt not found"
      />
      <h1>
        {props.err}
        {" " + error.statusText}.
      </h1>
      <p>
        Uh-oh!!! Looks like the {props.err} you are looking for doesn't
        exist,Please start afresh...
      </p>
      <button className="">
        <Link to="/">GO HOME</Link>
      </button>
    </div>
  );
};
export default Error;
