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
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="mt-[100px] text-4xl  font-bold border-b-4 font-poppins border-orange-600 ">
          ABOUT US
        </h1>
        <img
          src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=2000"
          alt="vector art of a delivery boy"
          className="w-full md:w-[50%]"
        />
        <div>
          <p className="font-raleway">
            Launched in 2010, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
          <p className="font-raleway">
            Launched in 2010, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
          <div className="flex flex-col md:flex-row justify-between bg-amber-500 text-white">
            <div className="text-3xl font-bold p-2">No Minimum Order</div>
            <div className="text-3xl font-bold p-2">
              Delicious Food and Beverages
            </div>
            <div className="text-3xl font-bold p-2">
              Lightning-Fast Delivery
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
