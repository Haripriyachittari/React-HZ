import { BsPinterest, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-orange-400 text-white p-8 ">
      <div className="   md:flex justify-between">
        <ul className="">
          <li className="" data-testid="company">
            COMPANY
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Team</li>
          <li>Careers</li>
        </ul>
        <ul className="my-2">
          <li className="">CONTACT</li>
          <li>Help & Support</li>
          <li>Team with us</li>
          <li>Ride with us</li>
        </ul>
        <ul className="">
          <li className="">LEGAL</li>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
      <div className=" md:flex justify-between mt-4 ">
        <div>@2023Feast. All Rights Reserved.</div>
        <div className="flex gap-8 my-2 md:m-0">
          <BsFacebook size={25} />
          <BsPinterest size={25} />
          <BsInstagram size={25} />
          <BsGoogle size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
