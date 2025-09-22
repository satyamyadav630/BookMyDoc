import React, { useContext, useState } from "react";
// import { assets } from '../assets/assets'
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState(true);
  const { token, setToken } = useContext(AppContext)


const logout =()=>{
  setToken(false)
  localStorage.removeItem('token')
}








  return (
    <div className="flex h-20 items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* <img className=' h-16 w-24 cursor-pointer object-contain' src={assets.logo}/> */}
      {/* logo */}
      <h1 className="text-2xl md:text-3xl font-bold">
        <span className="text-orange-500 font-sans">Book</span>

        <span className="text-orange-500 font-sans">My</span>
        <span className="text-green-500 font-serif ">Doc</span>
      </h1>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 ">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-orange-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 ">ALL DOCTOR</li>
          <hr className="border-none outline-none h-0.5  bg-orange-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/ai">
          <li className="py-1">ASK AI</li>
          <hr className="border-none outline-none h-0.5  bg-orange-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 ">ABOUT</li>
          <hr className="border-none outline-none h-0.5  bg-orange-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 ">CONTACT</li>
          <hr className="border-none outline-none h-0.5  bg-orange-500 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative ">
            <img
              className="w-8 rounded-full "
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  {" "}
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        {/* mobile menu   */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0  bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36 h-20" src={assets.logo} alt="" />
            <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
              className={({ isActive }) =>
                `px-4 rounded inline-block ${isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/doctors"
              className={({ isActive }) =>
                `px-4 rounded inline-block ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              All DOCTORS
            </NavLink>

            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
              className={({ isActive }) =>
                `px-4 rounded inline-block ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
              className={({ isActive }) =>
                `px-4 rounded inline-block ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              CONTACT
            </NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
