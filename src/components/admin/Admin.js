import React, { Component } from 'react';
import ArticleTable from './ArticleTable';
import Add from './Add';
import Search from './Search';
import dl from '../accountList.json';
import EditForm from './EditForm';
class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdd: false,
            searchText: "",
            articles: dl,
            isEdit: false,
            editArticle: ""
        }
    }
    changeisAdd = () => {
        this.setState({
            isAdd: !this.state.isAdd,
            isEdit: false
        });
    }

    changeisEdit = (isEdit) => {
        if(isEdit === true)
        this.setState({
            isEdit: true,
            isAdd: false

        });
        else 
        if(isEdit === false)
        this.setState({
            isEdit: false
        });

    }

    searchClick = (searchText) => {
        this.setState({
            searchText: searchText
        });

    }

    editArticle = (row) => {
        this.changeisEdit(true);
        this.setState({
            editArticle: row
        }
        );
      
        
    }

    submitAdd = (article) => {

        var newArticles = this.state.articles;
        newArticles.push(article);
        this.setState({
            articles: newArticles
        });

    }

    submitDelete = (articleid) => {
        var newArticles = this.state.articles;
        
        newArticles.forEach((value,key) => {
            if(value.id === articleid)
            {
                newArticles.splice(key,1);
            }
        });

        

        this.setState({
            articles: newArticles
        });
    }

    submitEdit = (article) => {

        var newArticles = this.state.articles;
       
        newArticles.forEach((value,key) => {
            if(value.id === article.id)
            {
               
                if(article.Title !== "")
                    value.Title = article.Title;
                if(article.Author !== "")
                    value.Author = article.Author;
                if(article.PostDay !== "")
                    value.PostDay = article.PostDay;
            }
        }
        );

        this.setState({
            articles: newArticles
        });
        
    
        
    }

    render() {
        return (
            <div>
                <section>
                    <h1 className="text-center">Articles</h1>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Search isAdd={this.state.isAdd} changeAddStatus={() => this.changeisAdd()} search={(searchText) => this.searchClick(searchText)} />

                            </div>
                            <div className="col-12">
                                <br />
                            </div>
                            <div className="col">
                                <ArticleTable searchText={this.state.searchText} data={this.state.articles} editArticle={(row) => { this.editArticle(row) }} deleteArticle = {(articleid) => {this.submitDelete(articleid)}}/>
                            </div>
                         
                                <Add submitAdd={(article) => this.submitAdd(article)} isAdd={this.state.isAdd} closeBtn={() => this.changeisAdd()} />
                                <EditForm submitEdit={(article) => this.submitEdit(article)} isEdit={this.state.isEdit} closeBtn={() => this.changeisEdit(false)} row = {this.state.editArticle}/>

                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Admin;