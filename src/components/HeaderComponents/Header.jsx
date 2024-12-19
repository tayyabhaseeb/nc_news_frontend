import React from "react";
import Drawer from "./Drawer";
import Avatar from "./Avatar";

function Header() {
  return (
    <div className="  flex items-center justify-between p-6 md:p-10">
      <Drawer />
      <h1 className="text-2xl font-bold text-[rgba(235,27,36)] md:text-5xl">
        Northcoders News
      </h1>
      <Avatar />
    </div>
  );
}

export default Header;
