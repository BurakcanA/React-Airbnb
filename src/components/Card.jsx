import React, { PureComponent } from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {/* {`../images/${props.img}`} ES6 */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`/public/assets/${props.img}`}></img>
            <div className="card--stats">
                <img className="card--star" src="/public/assets/star.png" height={15}></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}