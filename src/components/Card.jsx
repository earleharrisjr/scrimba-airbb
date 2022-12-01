import React from "react";


export default function Card() {
    return (
        <div className="card--component">
            <img src="../public/katie-zaferes.png" className="card--photo" />
            <div className="card--info">
                <img src="../public/Star.png" className="star--photo" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>
    )
}