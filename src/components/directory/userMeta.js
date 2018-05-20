import React, { Component } from 'react';

class UserMeta extends Component {
    render() {
        return (
            <div className="user-meta">
                <h2 className="user-name-header">{this.props.name.first} {this.props.name.last}</h2>
                <p>{this.props.location.postCode} {this.props.location.street}</p>
                <p>{this.props.location.city}, {this.props.location.state}</p>
            </div>
        );
    }
}

export default UserMeta;
