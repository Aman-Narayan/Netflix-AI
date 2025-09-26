import React from "react";
import { LogoURl } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between">
      <img src={LogoURl} alt="LogoImage" className="w-44 px-8 py-2  z-10" />
    </div>
  );
};

export default Header;
