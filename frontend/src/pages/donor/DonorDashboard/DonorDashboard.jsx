import ImpactCards from "../../../components/dashboard/ImpactCards/ImpactCards";
import WelcomeBanner from "../../../components/dashboard/WelcomeBanner/WelcomeBanner";
import "./DonorDashboard.css";

function DonorDashboard() {
    return(
        <section className="donor-dashboard">
            <WelcomeBanner />
            <ImpactCards />
        </section>
    );
}

export default DonorDashboard;