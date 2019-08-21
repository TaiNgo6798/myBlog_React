import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userImgLink: "",
        userName: "Hai dụ",
        loggedIn: false
    }
}

  getUIL = (response) => {
    this.setState({
      userImgLink: response.picture.data.url,
      userName: response.name,
      loggedIn:true
    })
 
    
  }
  login = () => {
    this.setState({
        loggedIn: true
    })
}


  render() {

   
    return (
      <Router>
        <div >
          <Nav userImgLink = {this.state.userImgLink} userName = {this.state.userName}/>
          <DieuHuongURL userName = {this.state.userName} getUIL = {(url) => {this.getUIL(url)}} loggedIn = {this.state.loggedIn} login = {() => this.login()}/>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
