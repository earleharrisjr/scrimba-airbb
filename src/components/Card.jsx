import React from "react";




export default function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE";
    }


    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../public/images/${props.card.coverImg}`} className="card--photo" />
            {/* above is string interpolation used with JSX. Notice how we use brackets, then the tiks, then the ${}. */}
            <div className="card--info">
                <img src="../public/images/Star.png" className="star--photo" />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p className="card--title">{props.card.title}</p>
            <p className="card--price"><span className="bold">${props.card.price}</span>/ person</p>
        </div>
    )
}