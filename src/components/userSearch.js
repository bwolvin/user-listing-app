import React, { Component } from 'react';
import '../css/userSearch.css'

class UserSearch extends Component {

  render() {
    return (
        <header>
            <div className="search-box">
                <input type="text" placeholder="Type user name to filter results" />
            </div>
            <div className="result-count">{this.props.resultCount} Results</div>
        </header>
    );
  }
}

export default UserSearch;