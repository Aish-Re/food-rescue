import "./ActiveRedistributions.css";

function ActiveRedistributions() {
    return (
        <section className="active-redistributions">
            <div className="active-redistributions-header">
                <h2>Active Redistributions</h2>
                <button>View All</button>
            </div>

            <div className="active-redistributions-table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food Item</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>Recipent</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </section>
    );
}

export default ActiveRedistributions;