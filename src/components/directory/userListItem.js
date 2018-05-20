import React, { Component } from 'react';
import UserPicture from './userPicture';
import UserMeta from './userMeta';
import '../../css/directory/userListItem.css';

class UserListItem extends Component {
    render() {
        const userDetails = this.props.user;
        return (
            <li className="user-list-item">
                <UserPicture userDetails={userDetails} />
                <UserMeta userDetails={userDetails} />
            </li>
        );
    }
}

export default UserListItem;
