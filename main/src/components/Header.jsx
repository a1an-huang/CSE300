import React from "react";
import { DiRequirejs } from "react-icons/di";
import "./components.css";
const Header = () => {
    return (
        <header className="flex-row align-items-center justify-contents-center w-100 pt-5 ">
            <h1 className="text-center mb-5">Alan Huang</h1>
            {/* <img
                className="profile-img rounded-circle"
                src={require("../assets/prof.jpg")}
            ></img> */}
            <div className="container w-100">
                <div className="d-flex align-items-center justify-content-center">
                    <img
                        key="img1"
                        className="profile-img rounded-circle mb-5"
                        src={require("../assets/img.jpg")}
                    ></img>
                </div>
                <div className="mb-3">
                    <p className="p-text text-center">
                        Alan Huang is a student at Stony Brook University
                        pursuing a Bachelor of Science in Computer Science. He
                        worked in a Software Engineering role at Platinum Edge
                        Tutoring where he utilized the SCRUM methodology. His
                        primary interests are creating web applications,
                        algorithms, and competitive programming.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
