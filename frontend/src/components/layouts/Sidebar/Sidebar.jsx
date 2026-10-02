import "./Sidebar.css"
import { LayoutDashboard, PlusCircle, Package, BarChart3} from "lucide-react";
import foodRescueLogo from "../../../assets/logo.png";

const sidebarMenus = [
    {
        name : "Dashboard",
        icon : LayoutDashboard
    },
    
    {
        name : "Create Donation",
        icon : PlusCircle
    },

    {
        name : "My Donations",
        icon : Package
    },

    {
        name : "Impact",
        icon : BarChart3
    }
]

function Sidebar(){
    return(
        <section className = "sidebar">
            <div className = "website-logo">
                <img src={foodRescueLogo} />
            </div>

            <div className="sidebar-menus">
                {sidebarMenus.map((sidebarMenu,key) => {
                    const Icon = sidebarMenu.icon;
                    return (
                        <div key={key}>
                            <Icon /> 
                            {sidebarMenu.name}
                        </div>
                    );
                })}
            </div>

        </section>
    );  
}

export default Sidebar;