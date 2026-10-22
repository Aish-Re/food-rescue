import "./RedistributionOverview.css";
import { useState } from "react";
import { ResponsiveContainer, XAxis, YAxis, LineChart, Tooltip, CartesianGrid, Line } from "recharts";

const graphData = {
    meals : [
        { day : "Mon", value : 80 },
        { day : "Tue", value : 120 },
        { day : "Wed", value : 85 },
        { day : "Thu", value : 125 },
        { day : "Fri", value : 190 },
        { day : "Sat", value : 140 },
        { day : "Sun", value : 165 }
    ],

    farmers : [
        { day : "Mon", value : 20 },
        { day : "Tue", value : 35 },
        { day : "Wed", value : 25 },
        { day : "Thu", value : 45 },
        { day : "Fri", value : 55 },
        { day : "Sat", value : 40 },
        { day : "Sun", value : 65 }
    ]
};



function RedistributionOverview() {
    const [selectedMetric, setSelectedMetric] = useState("meals");
    const activeData = graphData[selectedMetric];
    const lineColor = selectedMetric === "meals" ? "#23834D" : "#A3C91A";

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

            <div className="metric-selector">
                <button 
                    className={`meals-graph ${selectedMetric === "meals" ? "active" : ""}`}
                    onClick={() => setSelectedMetric("meals")}
                > 
                    Meals Donated 
                </button>

                <button
                    className={`farmers-graph ${selectedMetric === "farmers" ? "active" : ""}`}
                    onClick={() => setSelectedMetric("farmers")}
                >
                    Food to Farmers (kg)
                </button>
            </div>

            <div className="redistribution-graph">
                <ResponsiveContainer>
                    <LineChart  
                        data={activeData}
                        margin={{ top : 10, right : 10, bottom : 0, left : 0}}
                    >
                        <CartesianGrid
                            stroke="#E5ECE5" 
                        />

                        <XAxis 
                            dataKey = "day"
                            axisLine = {false}
                            tickLine = {false}
                            tick = {{ fill: "#718078", fontSize: 13 }}
                            tickMargin={14}
                        />

                        <YAxis
                            axisLine = {false}
                            tickLine = {false}
                            tick = {{ fill : "#718078", fontSize: 13 }} 
                            tickMargin={14}
                        />
                        
                        <Tooltip

                        />

                        <Line 
                            dataKey= "value"
                            stroke= {lineColor}
                            strokeWidth={2.5}
                            dot = {{ fill : lineColor, r : 3}}
                            activeDot = {{ r : 6}}
                            type= "monotone"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default RedistributionOverview;