import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    //create state here whenenver class is rendered constructor is called;
    this.state = {
      userInfo: {
        name: "harish",
        location: "Siruguppa",
      },
    };
    console.log("component initiiated");
  }
  componentDidMount() {
    this.setState({
      userInfo: {
        name: "Hp",
        location: "Hyderabad",
      },
    });
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("Component updated");
  }
  componentWillUnmount() {
    console.log("component unmounted");
    clearInterval(this.timer);
  }

  render() {
    console.log("component rendered");
    return (
      <div>
        <h1>{this.state.userInfo.name}</h1>
      </div>
    );
  }
}

export default ProfileClass;
