import React, { Component } from 'react';
import dl from './dulieu.json';
import SuggestArticlesList from './SuggestArticles';

class Home extends Component {

  render() {
    return (

      <div>
        <section >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <img src="img/profile.png" className="rounded-circle" alt="" />
                <br />
                <br />
                <h3>
                  <span >CHÀO MỪNG CÁC BẠN ĐẾN VỚI BLOG CỦA TRANG !</span>
                </h3>
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="row text-center">
              {

                dl.map((value, key) => {

                  return (
                    <SuggestArticlesList key={key} articleId={value.id} linkanh={value.anh} tieude={value.tieude} trichdan={value.trichdan} />

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