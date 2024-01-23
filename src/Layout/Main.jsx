import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>This is the Main Layout</h1>
      <Outlet />
    </>
  );
};

export default Main;
