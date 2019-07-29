import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import animateScrollTo from 'animated-scroll-to';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
        }
    }
    
    isChange = (event)=> {
        var ten = event.target.name
        var giatri = event.target.value
        this.setState({
            [ten]: giatri
        })
        
    }

    submitForm = (event)=> {
        //event.preventDefault(); ngan khong cho chuyen trang
        this.setState({
            isRedirect: true
        });
    }

    componentWillMount() {
        animateScrollTo(0);
    }
    

    render() {
        if(this.state.isRedirect){
            
            return <Redirect to = "/home"/>; 
        }
      
        return (
            <div>
                <div className="container">
                    <section id="contact">
                        <div className="container">
                            <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                            <hr className="star-dark mb-5" />
                            <div className="row" style={{ margin: '40px 92px 93px' }}>
                                <div className="col-lg-8 mx-auto">
                                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                    {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                                    <form name="sentMessage" id="contactForm" >
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Name</label>
                                                <input name = "fName" onChange = {(event)=> {this.isChange(event)}} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Email Address</label>
                                                <input name = "fEmail" onChange = {(event)=> {this.isChange(event)}} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Phone Number</label>
                                                <input name = "fPhone" onChange = {(event)=> {this.isChange(event)}} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Message</label>
                                                <textarea name = "fMess" onChange = {(event)=> {this.isChange(event)}} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false" defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />
                                        <div id="success" />
                                        <div className="form-group">
                                            <button type="submit" onClick = {(event)=> {this.submitForm(event)}} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        );
    }
}

export default Contact;