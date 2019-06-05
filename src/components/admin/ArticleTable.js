import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


class ArticleTable extends Component {
    

    render() {
        
        return (

            <div>
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Tittle</th>
                            <th scope="col">Author</th>
                            <th scope="col">Post-Day</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            this.props.data.map((value, key) => {
                            var searchText;
                            
                            var valueList = [
                                value.Title,
                               
                                value.Author,
                                value.PostDay,
                                key.toString()
                            ];
                            

                            if(this.props.searchText === "")
                            {
                               searchText = value.Title;
                             
                            }
                            else 
                            {
                                searchText = this.props.searchText;
                            }
                            
                            if(valueList.includes(searchText))
                            return (
                                        <TableDataRow key = {key} No = {key} Title = {value.Title} Author = {value.Author} PostDay = {value.PostDay} id = {value.id} editArticle = {(row) => {this.props.editArticle(row)}} deleteArticle = {(articleid) => {this.props.deleteArticle(articleid)}}/>
                                )
                             return(
                                 <div>Nothing</div>
                             )
                        })
                        
                        }
                       

                    </tbody>
                </table>

            </div>


        );
    }
}

export default ArticleTable;