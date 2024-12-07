import { Outlet } from "react-router-dom";
import "./Styles/index.css";
import Navbar from "./Components/Navbar.jsx";

function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Index;
