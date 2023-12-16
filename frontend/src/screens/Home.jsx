import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

import Header from "../components/header";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPlayCircle, IoIosSettings, IoIosExit } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./Home.css";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="toolbar">
          <div className="toolbarGroup1">
            <h3 className="optionHeader"> Menu </h3>
            <Link to={"/"} className="option">
              <HiOutlineHome /> Home
            </Link>
            <Link to={"/"} className="option">
              {" "}
              <IoIosPlayCircle /> Playlists{" "}
            </Link>
          </div>
          <div className="toolbarGroup2">
            <h3 className="optionHeader"> Other </h3>
            <Link to={"/profile"} className="option">
              {" "}
              <IoIosSettings /> Settings{" "}
            </Link>
            <Link onClick={logoutHandler} className="option">
              <IoIosExit /> Logout
            </Link>
          </div>
        </div>
        <div className="main">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="icon">
              {" "}
              <HiMagnifyingGlass size={"1.5em"} />{" "}
            </p>
            <input className="search" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
