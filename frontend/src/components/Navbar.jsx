import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
 

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[124px] h-[124px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-6">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Home" ? "text-white" : "text-dimWhite"
          } `}
          onClick={() => setActive("Home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "About" ? "text-white" : "text-dimWhite"
          }`}
          onClick={() => setActive("About")}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Contact" ? "text-white" : "text-dimWhite"
          }`}
          onClick={() => setActive("Contact")}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "SignIn" ? "text-white" : "text-dimWhite"
          }`}
          onClick={() => setActive("SignIn")}
        >
          <Link to="/signIn">signIn</Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Home" ? "text-white" : "text-dimWhite"
              } mb-4`}
              onClick={() => setActive("Home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "About" ? "text-white" : "text-dimWhite"
              }`}
              onClick={() => setActive("About")}
            >
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
