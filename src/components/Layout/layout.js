import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <React.Fragment>
      <NavigationBar />
      <div className={isDesktop ? "layout-desktop" : "layout-mobile"}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
