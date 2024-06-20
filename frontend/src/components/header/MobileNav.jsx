import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ProfileImg from "../../assets/boy.png";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNav = ({ menuItems }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    navigate("/profile");
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div className="h-16 flex justify-between items-center px-6">
        <a href="/">
          <h1 className="logo text-3xl font-bold text-[#2A3342]">FOODIFY</h1>
        </a>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-1/2 h-auto z-10 bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link to={menu} className="font-medium capitalize text-secondary" onClick={toggleMenu}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center gap-4 py-4 font-medium border-t">
            {user ? (
              <>
                <li>
                  <img
                    src={user.profileImage || ProfileImg}
                    alt="avatar"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={handleProfileClick}
                  />
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-secondary px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-secondary px-4 py-2 rounded" onClick={toggleMenu}>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/sign" className="text-secondary px-4 py-2 rounded" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
