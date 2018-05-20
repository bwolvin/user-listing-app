import React, { Component } from 'react';

class UserMeta extends Component {
    render() {
        const userDetails = this.props.userDetails;
        return (
            <div className="user-meta">
                <h2 className="user-name-header">{userDetails.name.first} {userDetails.name.last}</h2>
                <p>{userDetails.location.postCode} {userDetails.location.street}</p>
                <p>{userDetails.location.city}, {userDetails.location.state}</p>
            </div>
        );
    }
}

export default UserMeta;
