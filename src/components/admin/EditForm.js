import React, { Component } from 'react';

class EditForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Author: "",
            PostDay: ""
        }
    }


    isChange = (event, stt) => {

        if (stt === "tittle")
        {
            this.setState({
                Title: event.target.value
            });
            
        }
         
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
        var article = {
            id: this.props.row.id,
            Title: this.state.Title,
            Author: this.state.Author,
            PostDay: this.state.PostDay
        };
        
        this.props.submitEdit(article);
    }


    showEditForm = () => {
        if (this.props.isEdit === true)
        {
            var title = this.props.row.Title;
            var author = this.props.row.Author;
            var postday = this.props.row.PostDay;

          

            return (
                <div className = "col">
                    <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header text-center">Edit article</div>
                    <div className="card-body text-success">
                        <form>
                            <input className="form-control" name="title" type="text" onChange={(event) => { this.isChange(event, "tittle") }}  placeholder = {title}/>
                            <br />
                            <input className="form-control " name="author" type="text"  onChange={(event) => { this.isChange(event, "author") }}  placeholder = {author}/>
                            <br />
                            <input className="form-control" name="postday" type="text"  onChange={(event) => { this.isChange(event, "postday") }}  placeholder = {postday}/>
                            <br />
                            <button type="reset" className="btn btn-block btn-primary" onClick={() => {this.createArticle()}} >Save</button>
                            <input type="button" className="btn btn-block btn-secondary" onClick={() => { this.props.closeBtn() }} value="Close" />
                        </form>

                    </div>
                </div>
                </div>
            )
        }
    }



    render() {
       
        return (

            <div>
                
                    {this.showEditForm()}
      
            </div>
        );
    }
}

export default EditForm;