import { Outlet } from "react-router-dom";
import Footer from "../../COMPONENTS/SECTIONS/Footer/Footer";
import Navbar from "../../COMPONENTS/NavBar/Navbar";

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
