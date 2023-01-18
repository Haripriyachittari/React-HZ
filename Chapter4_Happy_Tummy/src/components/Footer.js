import { BsPinterest, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerSectionOne">
        <ul className="footerlist">
          <li className="heading">COMPANY</li>
          <li>About</li>
          <li>Contact</li>
          <li>Team</li>
          <li>Careers</li>
        </ul>
        <ul className="footerlist">
          <li className="heading">CONTACT</li>
          <li>Help & Support</li>
          <li>Team with us</li>
          <li>Ride with us</li>
        </ul>
        <ul className="footerlist">
          <li className="heading">LEGAL</li>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
      <div className="footerSectionTwo">
        <div>@2023Feast. All Rights Reserved.</div>
        <div className="socials">
          <BsFacebook size={30} />
          <BsPinterest size={30} />
          <BsInstagram size={30} />
          <BsGoogle size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
