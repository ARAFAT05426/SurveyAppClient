import { Outlet } from "react-router-dom";
import Sidebar from "../../COMPONENTS/DASHBOARD/SideBar/Sidebar";

const Dashboard = () => {
    return (
        <section>
            <Sidebar />
            <Outlet />
        </section>
    );
};

export default Dashboard;