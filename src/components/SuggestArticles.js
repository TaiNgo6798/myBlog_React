import React, { Component } from 'react';
import { Link } from "react-router-dom";
import htmlParser from 'react-html-parser';


class SuggestArticlesList extends Component {


    chuyendoiURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        return (
            <div className="col-lg-3">
                <div className="card">
                    <Link to={"/articles/" + this.chuyendoiURL(this.props.Title) + "." + this.props.id + ".html"}>
                        <img className="card-img-top" src={this.props.imgLink} alt="a"/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">
                            <p>
                                <b>
                                {this.props.Title}
                                </b>
                            </p>
                        </h5>
                        <p className="card-text">{htmlParser(this.props.Quote)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuggestArticlesList;