import React, { Component } from 'react';
import ArticleTable from './ArticleTable';
import Add from './Add';
import Search from './Search';
import EditForm from './EditForm';
import { articleData } from '../fireBase/firebaseConnect';


class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdd: false,
            searchText: "",
            articles: [],
            isEdit: false,
            editArticle: ""
        }
    }


    componentWillMount() {
        articleData.on('value', (articles) => {
            var arrayData1 = [];
            articles.forEach(element => {
                const key = element.key
                const title = element.val().title;
                const quote = element.val().quote;
                const author = element.val().author;
                const postDay = element.val().postDay;
                const content = element.val().content;
                const imgLink = element.val().imgLink;

                console.log(element.val());

                arrayData1.push({
                    id: key,
                    title: title,
                    quote: quote,
                    author: author,
                    postDay: postDay,
                    content: content,
                    imgLink: imgLink

                });
            }
            )
           
            this.setState({
                articles: arrayData1
            })
        });
    }

    getData = () => {
        if(this.state.articles)
     
            return(
                
                <ArticleTable 
                searchText={this.state.searchText} 
                data={this.state.articles} 
                editArticle={(row) => { this.editArticle(row) }} 
                deleteArticle={(articleid) => { this.submitDelete(articleid) }}/>
            )
        
      
    }


    changeisAdd = () => {
        this.setState({
            isAdd: !this.state.isAdd,
            isEdit: false
        });
    }

    changeisEdit = (isEdit) => {
        if (isEdit === true)
            this.setState({
                isEdit: true,
                isAdd: false

            });
        else
            if (isEdit === false)
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

       articleData.push(article);

    }

    submitDelete = (articleid) => {
        articleData.child(articleid).remove();
    }

    submitEdit = (article) => {

        var newArticles = this.state.articles;

        newArticles.forEach((value, key) => {
            if (value.id === article.id) {

                if (article.Title !== "")
                    value.Title = article.Title;
                if (article.Author !== "")
                    value.Author = article.Author;
                if (article.PostDay !== "")
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
                            <div className = "col-12">
                            <Add submitAdd={(article) => this.submitAdd(article)} isAdd={this.state.isAdd} closeBtn={() => this.changeisAdd()} />
                            <EditForm submitEdit={(article) => this.submitEdit(article)} isEdit={this.state.isEdit} closeBtn={() => this.changeisEdit(false)} row={this.state.editArticle} />

                            </div>
                            
                            <div className="col-12">
                                {this.getData()}
                            </div>

                        </div>

                    </div>
                </section>

            </div>
        );
    }
}

export default Admin;