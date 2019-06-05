import React, { Component } from 'react';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempText: ""
        }
    }


    showAddorCloseButton = () => {

        return (
            <button type="button" className="btn btn-block btn-outline-primary nutadd" onClick={() => this.props.changeAddStatus()}>Add article</button>
        );

    }

    isChange = (event) => {
        this.setState({
            tempText: event.target.value
        }
        );

    }

    _handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            this.props.search(this.state.tempText);
        }

    }


    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="btn-group" >
                        <input className="form-control" type="text" placeholder="Search" id="searchBox" onChange={(event) => { this.isChange(event) }} onKeyDown={this._handleKeyDown} />
                        <button type="button" className="btn btn-primary" id="searchBtn" onClick={() => { this.props.search(this.state.tempText) }} >Search</button>
                    </div>
                </div>

                <br/>
                <div className = "col-12">
                <div className="btn-group">
                        {this.showAddorCloseButton()}
                    </div>
                </div>
 
            </div>
        );
    }
}

export default Search;