import React, { Component } from 'react';
import {  Route } from "react-router-dom";
import Home from '../components/Home';
import Contact from '../components/Contact';
import ArticleDetail from '../components/ArticleDetail';
import About from '../components/About';
import Admin from '../components/admin/Admin';

class DieuHuongURL extends Component {
    render() {
        return (
        
                <div>
                    <Route path="" exact component={Home} />
                    <Route path="/myBlog_React/" exact component={Home} />
                    <Route path="/myBlog_React/home" exact component={Home} />
                    <Route path="/myBlog_React/contact" component={Contact} />
                    <Route path="/myBlog_React/articles/:slug.:id.html" component={ArticleDetail} />
                    <Route path = "/myBlog_React/about" component = {About}/>
                    <Route path = "/myBlog_React/admin" render={() => <Admin  userName = {this.props.userName} getUIL={(url) => this.props.getUIL(url)} login = {() => this.props.login()} loggedIn = {this.props.loggedIn}/>}/>
                </div>
            
        );
    }
}

export default DieuHuongURL;