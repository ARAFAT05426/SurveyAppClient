import { Outlet } from "react-router-dom";
import Footer from "../../COMPONENTS/SECTIONS/FOOTER/Footer";
import Navbar from "../../COMPONENTS/NAVBAR/Navbar";

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
