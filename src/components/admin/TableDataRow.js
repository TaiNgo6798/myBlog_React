import React, { Component } from 'react';
import Swal from 'sweetalert2';



class TableDataRow extends Component {



    delete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

               
                        this.props.deleteArticle(id);
                        Swal.fire(
                            {
                                position: 'top-end',
                                type: 'success',
                                title: 'Your article has been deleted !',
                                showConfirmButton: false,
                                timer: 1000
                            }
                        )


            }
        });


    }

    showTitle = (str) => {
        if (str.length > 40) {
            return str.substr(0, 40) + "...";
        }
        return str;
    }

    editClick = (row) => {
            this.props.editArticle(row);
   
    }

    render() {
        var row = {
            id: this.props.id,
            Title: this.props.Title,
            Author: this.props.Author,
            PostDay: this.props.PostDay,
            Content: this.props.Content,
            imgLink: this.props.imgLink
        };



        return (

            <tr>
                <th scope="row">{this.props.No}</th>
                <td>{this.showTitle(this.props.Title)}</td>
                <td>{this.props.Author}</td>
                <td>{this.props.PostDay}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning" name={"id"} onClick={() => { this.editClick(row) }}>Edit</button>
                        <button type="button" className="btn btn-danger" name={"deleteRow"} onClick={() => { this.delete(this.props.id) }}>Delete</button>
                    </div>
                </td>
            </tr>

        );
    }
}

export default TableDataRow;