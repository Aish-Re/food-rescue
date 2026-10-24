import ActiveRedistributions from "../../../components/dashboard/ActiveRedistributions/ActiveRedistributions";
import ImpactCards from "../../../components/dashboard/ImpactCards/ImpactCards";
import RecentActivity from "../../../components/dashboard/RecentActivity/RecentActivity";
import RedistributionOverview from "../../../components/dashboard/RedistributionOverview/RedistributionOverview";
import WelcomeBanner from "../../../components/dashboard/WelcomeBanner/WelcomeBanner";
import "./DonorDashboard.css";

function DonorDashboard() {
    return(
        <section className="donor-dashboard">
            <WelcomeBanner />
            <ImpactCards />
            
            <div className="dashboard-middle-row">
                <RedistributionOverview />
                <RecentActivity />
            </div>

            <div className="dashboard-last-row">
                <ActiveRedistributions />
            </div>
        </section>
    );
}

export default DonorDashboard;