import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-[100svh] pt-16">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Main;
