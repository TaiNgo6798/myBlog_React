import React, { Component } from 'react';

import SuggestArticlesList from './SuggestArticles';
import {articleData} from './fireBase/firebaseConnect';



class Home extends Component {

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
            
            const author = element.val().author;
            const postDay = element.val().postDay;
            const content = element.val().content;
            const imgLink = element.val().imgLink;

           

            arrayData1.push({
                id: key,
                title: title,
                
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
    return (

      <div>
        <section name = "head">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <img src="img/profile.png" className="rounded-circle" alt="" />
                <br />
                <br />
                <h1 className = "tieude-welcome">
                  <span >CHÀO MỪNG CÁC BẠN ĐẾN VỚI BLOG CỦA MÌNH !</span>
                </h1>
                
              </div>
            </div>
            <h5>Các bài viết mới</h5><hr></hr>
            <div className="row text-center">
              {

                this.state.articles.map((v, key) => {

                  return (
                    <SuggestArticlesList 
                    key={key} 
                    id = {v.id}
                    Title = {v.title} 
                    Author = {v.author}
                    PostDay = {v.postDay}
                    Content = {v.content}
                    imgLink = {v.imgLink}
                     />

                  )
                })
              }
            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default Home;