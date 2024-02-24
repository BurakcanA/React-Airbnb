import React, { PureComponent } from "react";
import picture from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src={picture}></img>
            <div className="card--stats">
                <img className="card--star" src={star} height={15}></img>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136 </span>/ person</p>
        </div>
    )
}