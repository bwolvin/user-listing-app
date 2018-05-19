import React, { Component } from 'react';

class UserMeta extends Component {
    render() {
        return (
            <div className="user-meta">
                <h2 className="user-name-header">{this.props.userDetails.name.first} {this.props.userDetails.name.last}</h2>
                <p>{this.props.userDetails.location.postCode} {this.props.userDetails.location.street}</p>
                <p>{this.props.userDetails.location.city}, {this.props.userDetails.location.state}</p>
            </div>
        );
    }
}

export default UserMeta;
