import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../components/Profile";
import ProfileClass from "../components/ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor");
  }

  componentDidMount() {}
  render() {
    //console.log("parent render");
    return (
      <div>
        <Outlet />
        About Page
        <ProfileClass />
      </div>
    );
  }
}
export default About;
