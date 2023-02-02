import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Section = ({ title, description, isVisible, setShow }) => {
  const handleShow = () => {
    setShow();
  };
  return (
    <div className="border border-orange-600 my-2 p-2 ">
      <div className="flex justify-between">
        <h1 className="Font-bold text-2xl">{title}</h1>

        {isVisible ? (
          <button onClick={handleShow} className="font-bold px-2 ">
            <MdOutlineKeyboardArrowUp size={30} />
          </button>
        ) : (
          <button onClick={handleShow} className=" font-bold px-2 ">
            <MdOutlineKeyboardArrowDown size={30} />
          </button>
        )}
      </div>
      {isVisible && <p className="my-2 font-raleway">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div className="mt-[100px] w-screen h-screen p-6">
      <h1 className="text-3xl font-bold text-orange-600">INSTAMART</h1>
      <h1 className="text-2xl mt-6 font-bold "> FAQs</h1>
      <Section
        title="About Instamart"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  "
        isVisible={visibleSection == "about"}
        setShow={() => {
          setVisibleSection(visibleSection === "about" ? "" : "about");
        }}
      />
      <Section
        title="Details of Instamart"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  "
        isVisible={visibleSection == "details"}
        setShow={() => {
          setVisibleSection(visibleSection === "details" ? "" : "details");
        }}
      />
      <Section
        title="Team of Instamart"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  "
        isVisible={visibleSection == "team"}
        setShow={() => {
          setVisibleSection(visibleSection === "team" ? "" : "team");
        }}
      />
    </div>
  );
};

export default Instamart;
