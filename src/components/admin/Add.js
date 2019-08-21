import React, { Component } from 'react';
import Swal from 'sweetalert2';
import CKE from 'ckeditor4-react'



const defaultStateValue = {
    Title: "",
    Author: "",
    PostDay: "",
    Content: "",
    imgLink: "img/default.jpg"
}

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = defaultStateValue;
    }




    isChange = (event, stt) => {

        if (stt === "tittle")
            this.setState({
                Title: event.target.value
            });
        if (stt === "author")
            this.setState({
                Author: event.target.value
            });
        if (stt === "content")
            this.setState({
                Content: event.editor.getData()
            })
    }

    createArticle = () => {


        if (this.state.Title !== "" && this.state.Author !== "") {
            Swal.fire({
                title: 'Enter password to delete !',
                input: 'password',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                  maxlength: 100,
                  autocapitalize: 'off',
                  autocorrect: 'off'}
            }).then((kq) => {
                if (kq.value === 'theancac') {
                    var article = {
                
                        title: this.state.Title,
                        author: this.state.Author,
                        postDay: new Date().toLocaleString(),
                        content: this.state.Content,
                        imgLink: this.state.imgLink
                    };
                    
                    this.props.submitAdd(article);
                    console.log(this.state.imgLink);
                    this.setState(defaultStateValue)
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Your article has been added !',
                        showConfirmButton: false,
                        timer: 1500
                      })
        
                    
                }
                else 
                {
                    Swal.fire({
                        title: 'Wrong password !',
                        type: 'error'
                    })
                }
                
            })
            
           
        }
        else {
            Swal.fire({
                title: 'Please complete all information !',
                type: 'warning',

                confirmButtonColor: '#3085d6',

            })
        }
       

    }

    
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ imgLink: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
            
        }
    }


    showAddForm = () => {
        if (this.props.isAdd === true)
            return (
                <div className="row">
                    <div className="col-4">
                        <div className="card border addCard" >
                            <div className="card-header text-center">Add new article</div>
                            <div className="card-body text-success">
                                <form>
                                    <input className="form-control" name="title" type="text" placeholder="Title" onChange={(event) => { this.isChange(event, "tittle") }} />
                                    <br />
                                    <input className="form-control " name="author" type="text" placeholder="Author" onChange={(event) => { this.isChange(event, "author") }} />
                                    <br />

                                    <img className="imgPreview" id="target" src={this.state.imgLink} /><br /><br />
                                    <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" />
                                    <br />

                                </form>
                                <hr/>
                                <button type="reset" className="btn btn-block btn-primary" onClick={() => this.createArticle()} >Add</button>
                                <input type="button" className="btn btn-block btn-secondary" onClick={() => { this.props.closeBtn() }} value="Close" />
                            </div>
                        </div>

                    </div>
                    <div className = "col-8">
                        <CKE  onChange = {(event) => this.isChange(event,"content")} 
                        config={ {
                        height: '33rem'
                        } }  />
                    </div>
                </div>

            )
    }



    render() {
        return (

            <div>
                {this.showAddForm()}
            </div>
        );
    }
}

export default Add;