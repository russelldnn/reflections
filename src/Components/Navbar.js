import React from "react";

export default function Navbar(props) {
    const {setCurrentPage} = props;

    return (
        <div>
            <div className="navbarDiv" href="#about" onClick={() => {
                setCurrentPage("About");
            }}>
                About us
            </div>
        </div>
    );
}