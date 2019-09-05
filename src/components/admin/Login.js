import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {Data} from '../fireBase/firebaseConnect';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            users: [],
            username: "",
            password: ""
        }
    }

    componentWillMount() {

        var data = Data.ref('user');
        data.on('value', (articles) => {
            var arrayData1 = [];
            articles.forEach(element => {
                const key = element.key
                const username = element.val().username;
                const password = element.val().password;
                
    
                arrayData1.push({
                    username: username,
                    password: password
                });
            }
            )
           
            this.setState({
                users: arrayData1
            })
        });
    }
    
    login = () => {
        var a = this.state.users.filter(x => x.username == this.state.username && x.password == this.state.password);
        if(a.length > 0)
        {
            let user = {
                name: this.state.username,
                picture: {
                    data:{
                        url: "https://uybor.uz/borless/avtobor/img/user-images/no-avatar.png"
                    }
                }
            }
            this.props.getUIL(user);
            this.props.login();
        }
    }


    onChangeLogin = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        });
        
    }

    responseFacebook = (response) => {
        
        this.props.getUIL(response);
        if (response) {
            this.props.login();
        }
    }




    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">LogIn</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputEmail" className="form-control" placeholder="Email address" name="username" required autoFocus onChange={(e) => this.onChangeLogin(e)}/>
                                       
                                    </div>
                                    
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={(e) => this.onChangeLogin(e)}/>
                                    </div>
                                   
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={() => this.login()}>Login</button>
                                    
                        
                                    <hr className="my-4" />
                                    <div className = "fb-btn">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <FacebookLogin
                                        appId="1114149645444945"
                                        autoLoad={false}
                                        fields="name,email,picture,id"
                                        callback={this.responseFacebook} 
                                        cssClass = "btn "
                                        />
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        )
    }
}
