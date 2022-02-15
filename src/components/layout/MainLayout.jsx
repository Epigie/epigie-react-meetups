import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
