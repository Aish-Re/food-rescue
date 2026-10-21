import { MessageSquare, Bell, Settings, ChevronDown } from "lucide-react";
import "./Topbar.css";

function Topbar() {
    return(
        <section className="topbar">
            <div className="topbar-actions">
                <button className="topbar-icon-button" aria-label="Messages"> 
                    <MessageSquare size={20}/>
                </button>
                
                <button className="topbar-icon-button" aria-label="Notifications"> 
                    <Bell size={20}/>
                </button>

                <button className="topbar-icon-button" aria-label="Settings"> 
                    <Settings size={20}/>
                </button>
            </div>

            <div className="topbar-profile">
                <div className="profile-avatar">A</div>
                <div className="topbar-details">
                    <h3>ABC Restaurant</h3>
                    <p>Donor</p>
                </div>
                <button className="topbar-icon-button" aria-label="Messages"> 
                    <ChevronDown size={20}/>
                </button>
            </div>
        </section>
    );
}

export default Topbar;