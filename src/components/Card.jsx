import React from "react";




export default function Card(props) {


    return (
        <div className="card">
            <img src={`../public/images/${props.image}`} className="card--photo" />
            {/* above is string interpolation used with JSX. Notice how we use brackets, then the tiks, then the ${}. */}
            <div className="card--info">
                <img src="../public/images/Star.png" className="star--photo" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="card--price">{props.price}</span>/ person</p>
        </div>
    )
}