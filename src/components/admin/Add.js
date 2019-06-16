import React, { Component } from 'react';
import Swal from 'sweetalert2';
const uuidv1 = require('uuid/v1');
const defaultStateValue = {
            Title: "",
            Author: "",
            PostDay: ""
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
        if (stt === "postday")
            this.setState({
                PostDay: event.target.value
            });
    }

    createArticle = () => {
        console.log(this.state.Title);
        console.log(this.state.Author);
        console.log(this.state.PostDay);
        if(this.state.Title !== "" && this.state.Author !== "" && this.state.PostDay !== "")
        {
            var article = {
                id: uuidv1(),
                Title: this.state.Title,
                Author: this.state.Author,
                PostDay: this.state.PostDay
            };
            this.props.submitAdd(article);
            
        }
        else 
        {
            Swal.fire({
                title: 'Please complete all information !',
                type: 'warning',
                
                confirmButtonColor: '#3085d6',
               
              })
        }
        this.setState(defaultStateValue)
       
    }



    showAddForm = () => {
        if (this.props.isAdd === true)
            return (
                <div className="col">
                    <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header text-center">Add new article</div>
                        <div className="card-body text-success">
                            <form>
                                <input className="form-control" name="title" type="text" placeholder="Title" onChange={(event) => { this.isChange(event, "tittle") }}  />
                                <br />
                                <input className="form-control " name="author" type="text" placeholder="Author" onChange={(event) => { this.isChange(event, "author") }} />
                                <br />
                                <input className="form-control" name="postday" type="datetimepicker" placeholder="Post-Day" onChange={(event) => { this.isChange(event, "postday") }} />
                                <br />
                                <button type="reset" className="btn btn-block btn-primary" onClick={() => this.createArticle()} >Add</button>
                                <input type="button" className="btn btn-block btn-secondary" onClick={() => { this.props.closeBtn() }} value="Close" />
                            </form>
                        </div>
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