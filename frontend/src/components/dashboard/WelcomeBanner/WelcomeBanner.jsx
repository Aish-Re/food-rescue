import { Plus } from "lucide-react";
import "./WelcomeBanner.css"

function WelcomeBanner() {
    return(
        <div className="welcome-banner">
            <div className="greetings">
                <h1>Good morning, ABC Restaurant</h1>
                <p>Every meal shared makes a difference. Here's your impact on reducing food waste and bringing surplus food to communities that need it.</p>
            </div>

            <div className="create-donation">
                <button><Plus />Create Donation</button>
            </div>
        </div>
    );
}

export default WelcomeBanner;