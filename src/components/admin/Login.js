import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {


    responseFacebook = (response) => {
        this.props.getUIL(response);
        if(response)
        {
            this.props.login();
        }
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="1114149645444945"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook} />
            </div>
        )
    }
}
