import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    constructor(props){
        super(props);
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }
    onHandleSubmit(event){
        event.preventDefault();
        this.props.searchData(this.refs.search.value);
    }
    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.onHandleSubmit}>
                    <div style={{float:'right',width:500}} className="row col s6">
                        <div className="input-field">
                            <i className="material-icons prefix">edit</i>
                            <input id="icon_prefix" ref="search" type="text" className="validate" />
                            <label>Search Name</label>
                        </div>
                            <button className="btn waves-effect waves-light search-btn" type="submit" name="action">Search
                             <i className="material-icons right">search</i>
                            </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;