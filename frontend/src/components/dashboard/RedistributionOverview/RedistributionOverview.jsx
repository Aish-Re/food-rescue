import "./RedistributionOverview.css";
import { useState } from "react";
import { ResponsiveContainer, ComposedChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Line, usePlotArea, useCartesianScale } from "recharts";

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

function CustomToolTip( {active, payload, selectedMetric, lineColor}) {
    if (!active || !payload || !payload.length) {
        return null;
    }

    const value = payload[0].value;

    return (
        <div 
            className="custom-tooltip"
            style={{backgroundColor : lineColor}}
        >
            <p>{value} { selectedMetric === "meals" ? "meals" : "kg"} </p>
        </div>
    )
}

function HoverDot ({ cx, cy, fill, payload, onActiveChange }) {
    if (cx == null || cy == null) {
        return null;
    }

    return (
        <circle 
            cx = {cx}
            cy = {cy}
            fill = {fill}
            r = {6}
            stroke= "white"
            strokeWidth={2}
            onMouseEnter={() => onActiveChange(payload)}
            onMouseLeave={() => onActiveChange(null)}
        />
    )
}

function HoverLine( {lineColor, activePoint}) {
    const plotArea = usePlotArea();
    const coordinate = useCartesianScale(
        activePoint ? {x : activePoint.day, y : activePoint.value} : {x : "", y : 0}
    );

    if (!activePoint || !plotArea || !coordinate) {
        return null;
    }

    return (
        <line 
            x1={coordinate.x}
            y1={coordinate.y}
            x2={coordinate.x}
            y2={plotArea.y + plotArea.height}
            stroke={lineColor}
            strokeWidth={3}
            pointerEvents="none"
            strokeDasharray="5 4"
        />
    )
}

function RedistributionOverview() {
    const [selectedMetric, setSelectedMetric] = useState("meals");
    const activeData = graphData[selectedMetric];
    const lineColor = selectedMetric === "meals" ? "var(--color-chart-meals)" : "var(--color-chart-farmers)";
    const [activePoint, setActivePoint] = useState(null);

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
                    <ComposedChart  
                        data={activeData}
                        margin={{ top : 20, right : 20, bottom : 5, left : 5}}
                    >

                        <defs>
                            <linearGradient id = "chartFill" x1 = "0" y1 = "0" x2 = "0" y2 = "1">
                                <stop offset = "0%" stopColor={lineColor} stopOpacity={0.47} />
                                <stop offset = "100%" stopColor={lineColor} stopOpacity={0.03} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            stroke="var(--color-border)" 
                        />

                        <XAxis 
                            dataKey = "day"
                            axisLine = {false}
                            tickLine = {false}
                            tick = {{ fill: "var(--color-text-secondary)", fontSize: 13 }}
                            tickMargin={14}
                        />

                        <YAxis
                            axisLine = {false}
                            tickLine = {false}
                            tick = {{ fill : "var(--color-text-secondary)", fontSize: 13 }} 
                            tickMargin={14}
                        />
                        
                        <Tooltip
                            content={
                                <CustomToolTip 
                                    selectedMetric={selectedMetric}
                                    lineColor={lineColor}
                                />
                            }
                            cursor={false}
                        />

                        <Area
                            dataKey= "value"
                            type= "monotone"
                            fill= "url(#chartFill)"   
                        />

                        <Line 
                            dataKey= "value"
                            stroke= {lineColor}
                            strokeWidth={2.5}
                            dot = {{ fill : lineColor, r : 3}}
                            activeDot = { (props) => (
                                <HoverDot 
                                    {...props}
                                    onActiveChange={setActivePoint}
                                />
                            )}
                            type= "monotone"
                        />

                        <HoverLine 
                            lineColor={lineColor}
                            activePoint={activePoint}
                        />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default RedistributionOverview;