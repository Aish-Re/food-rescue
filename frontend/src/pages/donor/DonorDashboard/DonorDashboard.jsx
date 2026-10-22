import ImpactCards from "../../../components/dashboard/ImpactCards/ImpactCards";
import RedistributionOverview from "../../../components/dashboard/RedistributionOverview/RedistributionOverview";
import WelcomeBanner from "../../../components/dashboard/WelcomeBanner/WelcomeBanner";
import "./DonorDashboard.css";

function DonorDashboard() {
    return(
        <section className="donor-dashboard">
            <WelcomeBanner />
            <ImpactCards />
            <RedistributionOverview />
        </section>
    );
}

export default DonorDashboard;