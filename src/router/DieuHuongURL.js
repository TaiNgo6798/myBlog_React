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
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/articles/:slug.:id.html" component={ArticleDetail} />
                    <Route path = "/about" component = {About}/>
                    <Route path = "/admin" component = {Admin}/>

                </div>
            
        );
    }
}

export default DieuHuongURL;