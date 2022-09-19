import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar nav-expand-lg bg-light navbar-collapse">
            <ul className="flex-row navbar-nav me-auto mb-2 mb-lg-0 col align-items-center justify-content-center gap-5">
                <li className="nav-item">
                    {" "}
                    <Link style={{ color: "black" }} className="nav-link">
                        About me
                    </Link>
                </li>
                <li className="nav-item">
                    {" "}
                    <Link style={{ color: "black" }} className="nav-link">
                        Skills
                    </Link>
                </li>
                <li className="nav-item">
                    {" "}
                    <Link style={{ color: "black" }} className="nav-link">
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    {" "}
                    <Link style={{ color: "black" }} className="nav-link">
                        Contact me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
