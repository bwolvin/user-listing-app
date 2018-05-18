import React, { Component } from 'react';
import '../css/userListItem.css'

class UserListItem extends Component {

  render() {
    const userDetails = this.props.user;
    return (
        <div className="user-list-item">
            <div className="user-image">
                <img src={userDetails.picture.large} />
            </div>
            <div className="user-meta">
                <h2 className="user-name-header">{userDetails.name.first} {userDetails.name.last}</h2>
                <div className="user-address">
                    <p>{userDetails.location.postCode} {userDetails.location.street}</p>
                    <p>{userDetails.location.city}, {userDetails.location.state}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default UserListItem;
