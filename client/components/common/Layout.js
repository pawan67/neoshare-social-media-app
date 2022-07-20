import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" bg_video mt-24  max-w-screen-md mx-auto px-5 my-5">
        {children}
      </div>
    </>
  );
};

export default Layout;
