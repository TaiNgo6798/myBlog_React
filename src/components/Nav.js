import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class nav extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
                    <div className="container">
                        <NavLink className="navbar-brand " to="/home">LiChan</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item normal">

                                    <NavLink to="/home" >HOME</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about">About me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin">Admin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default nav;