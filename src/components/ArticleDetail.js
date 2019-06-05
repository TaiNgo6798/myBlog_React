import React, { Component } from 'react';
import dl from './dulieu.json';
import SuggestArticles from './SuggestArticles.js';


class ArticleDetail extends Component {
    render() {
        var count = 0;
        return (
            <div>
                {dl.map((value, key) => {
                  
                    if ((value.id).toString() === this.props.match.params.id) {
                        
                        return (
                         
                            <div key = {key}>
                                <div className="container">
                                    <section id="services">
                                        <div className="card-deck">
                                            <div className="card-detail" >
                                                <img className="card-img-top-detail" src={value.anh} alt="" />
                                                <div className="card-body">
                                                    <h4 className="card-title text-center">{value.tieude}</h4>
                                                    <p className="card-text">
                                                        {value.noidung}
                                                       
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Other services*/}
                                        <hr />
                                        <div className="row text-center" >
                                            {
                                                //do cac bai viet trong json 
                                                dl.map((value, key) => {

                                                    if (value.id.toString() !== this.props.match.params.id && count <= 3) {
                                                        count++;
                                                        return (
                                                            <SuggestArticles key={key} articleId={value.id} linkanh={value.anh} tieude={value.tieude} trichdan={value.trichdan} />
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