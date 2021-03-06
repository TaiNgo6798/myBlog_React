import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


class ArticleTable extends Component {
    
    

    render() {
        
        return (

 
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
                            
                            this.props.data.map((v, key) => {
                            var searchText;
                            var valueList = [
                                v.id,
                                v.title,
                                
                                v.author,
                                v.postDay,
                                v.content,
                                v.imgLink,
                                key
                            ];

                            valueList = [...valueList].join('-');
                            

                            if(this.props.searchText === "")
                            {
                               searchText = v.title;
                             
                            }
                            else 
                            {
                                searchText = this.props.searchText;
                                
                            }
                            
                            if(valueList.indexOf(searchText) !== -1)

                            return (
                                        <TableDataRow key = {key} 
                                        No = {key} 
                                        Title = {v.title} 
                                        
                                        Author = {v.author} 
                                        PostDay = {v.postDay} 
                                        Content = {v.content}
                                        imgLink = {v.imgLink}
                                        id = {v.id} 
                                        
                                        editArticle = {(row) => {this.props.editArticle(row)}} 
                                        deleteArticle = {(articleid) => {this.props.deleteArticle(articleid)}}/>
                                )
                             return(
                                 <div></div>
                             )
                        })
                        
                        }
                       

                    </tbody>
                </table>

            


        );
    }
}

export default ArticleTable;