import { Outlet } from "react-router-dom";
import Navbar from "../../COMPONENTS/NAVBAR/Navbar";

const Main = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Main;
