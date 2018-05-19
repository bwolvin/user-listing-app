import React, { Component } from 'react';
import '../../css/userSearch.css'

class UserSearch extends Component {

    handleInputChange(e) {
        const searchValue = e.target.value.toLowerCase();
        this.props.onChange(searchValue)
    }

    render() {
        return (
            <header className="user-search">
                <div className="search-box">
                    <input className="search-box-input" type="text" placeholder="Type user name to filter results" onChange={(e) => {this.handleInputChange(e)}} />
                </div>
                <div className="search-result-count">{this.props.resultCount} Results</div>
            </header>
        );
    }
}

export default UserSearch;