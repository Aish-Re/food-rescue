import "./ImpactCard.css";

function ImpactCard({ label, stats, change, icon, color }) {
    const Icon = icon;

    return (
        <div className="impact-card">
            <div className={`impact-card-icon ${color}`}>
                <Icon />
            </div>

            <div className="impact-card-details">
                <h2 className="impact-stats">{stats}</h2>
                <p className="impact-label">{label}</p>
                <p className="impact-change"> ↑ {change}</p>
            </div>
        </div>
    );
}

export default ImpactCard;