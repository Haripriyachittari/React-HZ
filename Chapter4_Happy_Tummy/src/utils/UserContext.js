import { createContext, useState } from "react";
const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  const context = {
    toggle,
    toggleFunction,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
