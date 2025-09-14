import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import useOnlineStatus from "./useOnlineStatus";
import { faInfoCircle, faPhone, faShoppingCart, faSignInAlt, faSignOutAlt, faCircle, faHome, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Header = () => {
  const totalitems = useSelector((state) => state.cart?.items || []); // Redux selector
  const [loginBtn, setLoginBtn] = useState("SignIn");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for mobile menu
  const online = useOnlineStatus(); // Online status hook

  return (
    <div className="bg-white shadow-lg mb-24 fixed h-20 top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 61 61" height="49" width="49">
            {/* Logo SVG */}
            <g clipPath="url(#a)">
              <path fill="#FF5200" d="M.32 30.5c0-12.966 0-19.446..."></path>
            </g>
          </svg>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Grocery />
          <button>
            Online Status:{" "}
            {online ? (
              <FontAwesomeIcon icon={faCircle} className="text-green-700" />
            ) : (
              <FontAwesomeIcon icon={faCircle} className="text-red-700" />
            )}
          </button>
          <button className="text-gray-700 hover:text-[#FF5200] transition duration-200">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </button>
          <button className="text-gray-700 hover:text-[#FF5200] transition duration-200">
            <Link to="/About">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </Link>
          </button>
          <button className="text-gray-700 hover:text-[#FF5200] transition duration-200">
            <Link to="/ContactUs">
              <FontAwesomeIcon icon={faPhone} /> Contact Us
            </Link>
          </button>
          <button className="text-gray-700 hover:text-[#FF5200] transition duration-200">
            <Link to="/MyCart">
              <FontAwesomeIcon icon={faShoppingCart} /> My Cart -{totalitems.length}
            </Link>
          </button>
          <button
            onClick={() => setLoginBtn(loginBtn === "SignIn" ? "SignOut" : "SignIn")}
            className="text-white bg-yellow-600 hover:bg-[#FF5200] px-4 py-2 rounded-lg transition duration-300"
          >
            <Link to="/SignInSignUp">
              <FontAwesomeIcon icon={loginBtn === "SignIn" ? faSignInAlt : faSignOutAlt} />{" "}
              {loginBtn}
            </Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yellow-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 absolute top-16 left-0 w-full">
          <button className="w-full text-gray-700 hover:text-yellow-600">Home</button>
          <button className="w-full text-gray-700 hover:text-yellow-600">About Us</button>
          <button className="w-full text-gray-700 hover:text-yellow-600">Contact Us</button>
          <button className="w-full text-gray-700 hover:text-yellow-600">My Cart</button>
          <button
            onClick={() => setLoginBtn(loginBtn === "SignIn" ? "SignOut" : "SignIn")}
            className="w-full text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg"
          >
            {loginBtn}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
