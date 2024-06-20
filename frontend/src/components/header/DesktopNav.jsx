import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ProfileImg from "../../assets/boy.png";
import ThemeToggle from "../../context/ThemeToggle";



const DesktopNav = ({ menuItems, Logo }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <h1 className="logo text-3xl xl:text-4xl  font-bold text-[#2A3342]">FOODIFY</h1>
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className="font-medium capitalize text-secondary">
              {menu}
            </Link>
          </li>
        ))}
      </ul>
     
        
      <ul className="flex items-center gap-4 font-medium">
        {user ? (
          <>
            <li>
              <img
                src={user.profileImage || ProfileImg} // Use user's profile image if available
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={handleProfileClick}
              />
            </li>
            <li>
              <button
                onClick={logout}
                className="text-secondary px-4 py-2 rounded"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="text-secondary px-4 py-2 rounded">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/Sign" className="text-secondary px-4 py-2 rounded">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopNav;
