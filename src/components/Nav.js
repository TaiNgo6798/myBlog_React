import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class nav extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg fixed-top bg-dark" id="mainNav">
                    <div className="container">
                        <NavLink className="navbar-brand " to="/myBlog_React/home">TaiNgo</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item normal">
                                    <NavLink to="/myBlog_React/home" >HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/myBlog_React/about">About me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/myBlog_React/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/myBlog_React/admin">Admin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className = "User text-center">
                      <img src={this.props.userImgLink} style={{borderRadius: '50%'}} />
                        <br></br>Hi {this.props.userName}!
                    </div>
                </nav>
 
        );
    }
}

export default nav;