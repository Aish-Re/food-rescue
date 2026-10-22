import "./RedistributionOverview.css";

function RedistributionOverview() {
    return (
        <section className="redistribution-overview">
            <div className="redistribution-header">
                <h2>Redistribution Overview</h2>

                <div className="redistribution-category">
                    <button>Weekly</button>
                    <button>Monthly</button>
                    <button>Yearly</button>
                </div>
            </div>

            <div className="redistribution-graph">
                
            </div>
        </section>
    );
}

export default RedistributionOverview;