import React from "react";
import Hero from "../components/Hero";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      {userInfo ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <Hero />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
