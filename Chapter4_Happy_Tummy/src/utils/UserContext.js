import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "HP",
    email: "hpvarma09@gmail.com",
  },
});
export default UserContext;
