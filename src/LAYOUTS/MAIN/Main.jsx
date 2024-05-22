import { Outlet } from "react-router-dom";
import Navbar from "../../COMPONENTS/NAVBAR/Navbar";
import Footer from "../../COMPONENTS/SECTIONS/FOOTER/Footer";

const Main = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-navMinus">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
