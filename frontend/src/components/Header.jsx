import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import "./Header.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <Link to={"/"} className="nav-link">
        <div className="navbar-left">
          <img src="/potsifyLogo.svg" alt="Logo" className="logo" />
          <span className="brand-text">Potsify</span>
        </div>
      </Link>
      {userInfo ? (
        <>
          <div className="username">{userInfo.userName}</div>
        </>
      ) : (
        <>
          <div className="navbar-right">
            <Link to={"/signin"} className="nav-link1">
              Sign In
            </Link>
            <Link to={"/signup"} className="nav-link1">
              Sign Up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
