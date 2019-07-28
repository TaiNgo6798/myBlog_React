import React, { Component } from 'react';
import CKE from 'ckeditor4-react';
import Swal from 'sweetalert2'


const defaultStateValue = {
    Title: "",
    Author: "",
    Content: "",
    imgLink: ""

}

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.state = defaultStateValue;

    }




    isChange = (event, stt) => {

        if (stt === "tittle") {
            this.setState({
                Title: event.target.value
            });

        }

        if (stt === "author")
            this.setState({
                Author: event.target.value
            });

        if (stt === "content") {
            this.setState({
                Content: event.editor.getData()
            })
        }
    }

    createArticle = () => {
        if (this.state.Title !== "" && this.state.Author !== "") {
            var article = {
                id: this.props.row.id,
                Title: this.state.Title,
                Author: this.state.Author,
                Content: this.state.Content,
                imgLink: this.state.imgLink
            };
            
            this.props.submitEdit(article);
            this.setState(defaultStateValue);
            this.props.closeBtn(false);

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Your article has been edited !',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else {
            Swal.fire({
                title: 'Your information may be empty, please type something !',
                type: 'warning',

                confirmButtonColor: '#3085d6',

            })
        }
        this.setState(defaultStateValue)
        

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

    componentWillMount() {
        
        this.setState({
            Title: this.props.row.Title,
            Author: this.props.row.Author,
            Content: this.props.row.Content,
            imgLink: this.props.row.imgLink

        })

    
    }
    



    render() {

        var title = this.props.row.Title;
        var author = this.props.row.Author;
        var content = this.props.row.Content;
        var imgLink = this.props.row.imgLink;

        return (
            <div className="row">
                <div className="col-4">
                    <div className="card border-success mb-3" >
                        <div className="card-header text-center">Edit article</div>
                        <div className="card-body text-success">
                            <form>
                                <input className="form-control" name="title" type="text" onChange={(event) => { this.isChange(event, "tittle") }} defaultValue={title} />
                                <br />
                                <input className="form-control " name="author" type="text" onChange={(event) => { this.isChange(event, "author") }} defaultValue={author} />
                                <br />

                                <img className="imgPreview" id="target" src={imgLink} /><br /><br />
                                <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" />

                                <br /><hr></hr>
                                <button type="reset" className="btn btn-block btn-primary" onClick={() => { this.createArticle() }} >Save</button>
                                <input type="button" className="btn btn-block btn-secondary" onClick={() => { this.props.closeBtn(false) }} value="Close" />
                            </form>

                        </div>
                    </div>

                </div>
                <div className="col-8">
                    <CKE onChange={(event) => this.isChange(event, "content")} data={content} />
                </div>
            </div>

        )
    }
}

export default EditForm;