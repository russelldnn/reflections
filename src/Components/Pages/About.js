import React from "react";
import image13 from "../../assets/images/image13.jpg";

export default function About() {
    return (
        <div>
            <h1> About us</h1>
            <div className="imageDiv">
                <img src={image13} alt="pool" className="aboutPicture"/>
            </div>
            <div className="AboutDiv">
                <p>
                    About us
                </p>
            </div>
        </div>
    );
}