import React, { Component } from 'react';

import SuggestArticles from './SuggestArticles.js';
import {articleData} from './fireBase/firebaseConnect';
import htmlParser from 'react-html-parser';


class ArticleDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            articles: []
            
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
    
    render() {
        var count = 0;
        return (
            <div>
                {this.state.articles.map((v, key) => {
                  
                    if ((v.id).toString() === this.props.match.params.id) {
                        
                        return (
                         
                            <div key = {key}>
                                <div className="container">
                                    <section id="services">
                                        <div className="card-deck">
                                            <div className="card-detail" >
                                                <img className="card-img-top-detail" src={v.imgLink} alt="" />
                                                
                                                <div className="card-body">
                                                    <h1 className="card-title text-center">{v.title}</h1>
                                                    <br/><br/>
                                                    <p className="card-text">
                                                        {v.author}<br/>
                                                        {htmlParser(v.content)}
                                                       
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Other services*/}
                                        
                                        <div className = "row endArticle">
                                            <div className = "col-2"></div>
                                            <div className = "col"><hr/></div>
                                            <div className = "col-2"></div>
                                        </div>
                                        
                                        
                                        <h6>Xem thêm các bài viết khác nè</h6>
                                        <hr />
                                        <div className="row text-center" >
                                            {
                                                //do cac bai viet trong json 
                                                this.state.articles.map((v, key) => {

                                                    if (v.id.toString() !== this.props.match.params.id && count <= 3) {
                                                        count++;
                                                        return (
                                                            <SuggestArticles
                                                            key={key} 
                                                            id = {v.id}
                                                            Title = {v.title}
                                                            Quote = {v.quote}
                                                            Author = {v.author}
                                                            PostDay = {v.postDay}
                                                            Content = {v.content}
                                                            imgLink = {v.imgLink}
                                                             />
                                                        )
                                                        
                                                    }
                                                    return null;
                                                })
                                            }
                                        </div>
                                        {/*--------------*/}
                                    </section>
                                </div>

                            </div>
                        )
                    }
                  return null;  
                })}
               
            </div>
        );
    }
}

export default ArticleDetail;