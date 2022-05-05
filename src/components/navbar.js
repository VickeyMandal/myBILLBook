import React from "react";
import LOGO from "../assests/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="h-16 w-full bg-white">
        <div className="flex flex-row pt-3">
          <a className="ml-16">
            <img className="h-8 pt1" src={LOGO} alt="Logo" />
          </a>
          <div className="flex flex-row space-x-10 absolute right-16 font-semibold font-sans text-md pt-2">
            <ul className="hover:text-billOrange">Why Use My BillBook</ul>

            <ul className="hover:text-billOrange">Who Is It For?</ul>

            <ul className="hover:text-billOrange">Online Store</ul>

            <ul className="hover:text-billOrange">Pricing</ul>

            <ul className="hover:text-billOrange">FAQs</ul>

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
