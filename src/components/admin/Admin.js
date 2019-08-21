import React, { Component } from 'react';
import ArticleTable from './ArticleTable';
import Add from './Add';
import Search from './Search';
import EditForm from './EditForm';
import { articleData } from '../fireBase/firebaseConnect';
import animateScrollTo from 'animated-scroll-to';

import Login from './Login';

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
        animateScrollTo(0);
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
        if (this.state.articles)

            return (

                <ArticleTable
                    searchText={this.state.searchText}
                    data={this.state.articles}
                    editArticle={(row) => { this.editArticle(row) }}
                    deleteArticle={(articleid) => { this.submitDelete(articleid) }}
                    changeisEdit={(isEdit) => this.changeisEdit(isEdit)} />
            )


    }




    changeisAdd = () => {
        animateScrollTo(0);
        this.setState({
            isAdd: !this.state.isAdd,
            isEdit: false
        });
    }

    changeisEdit = (isEdit) => {
        animateScrollTo(0);
        if (isEdit === true) {
            this.setState({
                isEdit: true,
                isAdd: false

            });


        }
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
        // recieve edit-article from TableDataRow then set it to state for Editform

        this.changeisEdit(true);
        this.setState({
            editArticle: row
        }
        );
    }

    submitAdd = (article) => {

        articleData.push(article);
        this.setState({
            isAdd: false
        })

    }

    submitDelete = (articleid) => {
        articleData.child(articleid).remove();
    }

    submitEdit = (article) => {

        articleData.child(article.id).update({
            title: article.Title,
            author: article.Author,
            content: article.Content,
            imgLink: article.imgLink
        });

    }

    showEditForm = () => {
        if (this.state.isEdit === true)
            return (
                <EditForm
                    submitEdit={(article) => this.submitEdit(article)}
                    row={this.state.editArticle}
                    closeBtn={(isEdit) => this.changeisEdit(isEdit)} />

            )
    }




    renderAdminContent = () => {

        if (!this.props.loggedIn)
            return (<Login getUIL = {(url) => this.props.getUIL(url)} login = {() => this.props.login()}/>)
        else
        return (
            <div>
                <h1 className="text-center">Articles</h1>

                <div className="row">
                    <div className="col-12">
                        <Search isAdd={this.state.isAdd} changeAddStatus={() => this.changeisAdd()} search={(searchText) => this.searchClick(searchText)} />
                    </div>
                    <div className="col-12">
                        <br />
                    </div>
                    <div className="col-12">
                        <Add userName = {this.props.userName} submitAdd={(article) => this.submitAdd(article)} isAdd={this.state.isAdd} closeBtn={() => this.changeisAdd()} />
                        {this.showEditForm()}
                    </div>
                </div>
                {this.getData()}
            </div>
        )


    }

    render() {
        return (

            <section>
                <div className="container">

                    {this.renderAdminContent()}

                </div>
            </section>


        );
    }
}

export default Admin;