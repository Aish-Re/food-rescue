import DonorDashboard from "../../../pages/donor/DonorDashboard/DonorDashboard";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./DashboardLayout.css";

function DashboardLayout() {
    return(
        <section className="dashboard-layout">
            <Sidebar />
            
            <div className="dashboard-main">
                <Topbar />
                <DonorDashboard />
            </div>
        </section>
    );
}

export default DashboardLayout;