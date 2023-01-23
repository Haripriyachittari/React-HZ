import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Profile{props.name}
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        {" "}
        {count}
      </button>
    </div>
  );
};
export default Profile;
