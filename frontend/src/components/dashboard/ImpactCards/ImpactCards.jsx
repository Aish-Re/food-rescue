import { Utensils, UsersRound, Leaf, Recycle } from "lucide-react";
import "./ImpactCards.css";
import ImpactCard from "./ImpactCard";

const impactData = [
    {
        label : "Meals Donated",
        stats : "1,248",
        change : "12% this month",
        icon : Utensils,
        color : "green"
    },

    {
        label : "People Served",
        stats : "986",
        change : "18% this month",
        icon : UsersRound,
        color : "orange"
    },

    {
        label : "Food Rescued",
        stats : "324 kg",
        change : "14% this month",
        icon : Leaf,
        color : "purple"
    },

    {
        label : "Success Rate",
        stats : "94%",
        change : "6% this month",
        icon : Recycle,
        color : "blue"
    }
]

function ImpactCards() {
    return (
        <div className="impact-cards">
            {impactData.map((item) => (
                <ImpactCard
                    key = {item.label}
                    label = {item.label}
                    stats = {item.stats}
                    change = {item.change}
                    icon = {item.icon}                                
                    color = {item.color}
                />
            ))}
        </div>
    );
}

export default ImpactCards;