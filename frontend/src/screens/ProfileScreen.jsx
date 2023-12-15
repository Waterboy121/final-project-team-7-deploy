import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { setCredentials } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import Header from "../components/header";
import "./Style.css";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPlayCircle, IoIosSettings, IoIosExit } from "react-icons/io";
import React from "react";

const ProfileScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setUserName(userInfo.userName);
    setEmail(userInfo.email);
  }, [userInfo.setUserName, userInfo.setEmail]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          userName,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated");
      } catch (err) {
        toast.error(err?.data.message || err);
      }
    }
  };

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
        <div className="container">
          <form className="form-profile" onSubmit={submitHandler}>
            <h2>Update Profile</h2>
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isLoading && <Loader />}
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
