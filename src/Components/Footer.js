import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div
            className="d-flex justify-content-center text-white text-center"
            style={{ height: "10rem", backgroundColor: "#31353D" }}
        >
            <div className="col-3 pt-4">
                <h2>THIS IS FOOTER</h2>
                <h4>Thank you</h4>
            </div>
        </div>
    );
};

export default Footer;
