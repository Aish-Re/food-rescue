import "./ImpactStory.css"

function ImpactStory() {
    return (
        <section className="impact-story">
            <div className="impact-story-image"></div>

            <div className="impact-story-card">
                <div className="impact-story-label">
                    
                    <p>THE IMPACT WE CREATE</p>
                </div>

                <blockquote className="impact-story-quote">
                    <h2>
                        "Food that might have gone to waste
                        can become a meal, a resource,
                        and a reason to hope."
                    </h2>
                </blockquote>

                <div className="impact-story-tagline">
                    <span aria-hidden="true"></span>
                    <p>Less waste. More impact.</p>
                </div>
            </div>
        </section>
    );
}

export default ImpactStory;