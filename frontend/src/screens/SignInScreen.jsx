import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSigninMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import "./Style.css";
import Header from "../components/header";

import React from "react";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signin, { isLoading }] = useSigninMutation();

  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await signin({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data.message || err.error);
    }
  };
  return (
    <div>
      <Header />
      <form className="form-signin" onSubmit={submitHandler}>
        <h2>Sign In</h2>
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
          required
        />
        {isLoading && <Loader />}
        <button type="submit">Sign In</button>
        <div className="con">
          <p className="text">Don't Have An Account?</p>{" "}
          <Link className="link" to={"/signup"}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInScreen;
