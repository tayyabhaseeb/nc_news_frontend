import React from "react";
import { FaAlignJustify } from "react-icons/fa6";

function NavIcon({ setShow }) {
  return (
    <div className="text-center">
      <FaAlignJustify
        onClick={() => setShow(true)}
        className="text-[rgb(235,27,36)] text-2xl md:text-4xl"
      />
    </div>
  );
}

export default NavIcon;
