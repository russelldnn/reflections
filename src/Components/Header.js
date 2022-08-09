import React from "react";
import Navbar from "./Navbar";

export default function Header(props) {
    const {setCurrentPage} = props;
    return (
        <div className="container">
            <div href="/#home" className="brand" onClick={() => {
                setCurrentPage("Home");
            }}>
                Reflections
            </div>
            <div>
                <Navbar setCurrentPage={props.setCurrentPage}></Navbar>
            </div>

        </div>
    );
}