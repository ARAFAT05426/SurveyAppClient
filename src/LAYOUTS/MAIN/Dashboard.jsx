import { Outlet } from "react-router-dom";
import Sidebar from "../../COMPONENTS/DASHBOARD/SideBar/Sidebar";

const Dashboard = () => {
  return (
    <section className="flex gap-3 lg:gap-10">
      <Sidebar />
      <div className="flex-1 py-10 lg:py-20">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
