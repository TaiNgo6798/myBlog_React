import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright © Your Website 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href = "https://twitter.com/">
                    <i className="fa fa-twitter" />
                    </a>
                      
                    
                  </li>
                  <li className="list-inline-item">
                    <a href = "https://www.facebook.com/taingo6798">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    
                  </li>
                  <li className="list-inline-item">
                    <a href = "https://www.instagram.com/taingo_6798/">
                    <i className="fa fa-instagram" />
                    </a>
                    
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a className = "a-footer" href="https://www.google.com/">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a className = "a-footer" href="https://www.google.com/">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;