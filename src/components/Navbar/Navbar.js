import React from "react";
import { Link } from "react-router-dom";
import payload from "../../utils/payload";
import "./Navbar.scss";

function Navbar() {
    const user = payload();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Super e-market
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="csollapse navbar-collapse" id="navbarNav">
            {//console.log(user)
            }
            {user ? (
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/user">
                    My account, {user.role} !
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/logout">
                    Logout
                </Link>
                </li>
            </ul>
            ) : (
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/signup">
                    Signup
                </Link>
                </li>
            </ul>
            )}
        </div>
        </nav>
    );
}

export default Navbar;