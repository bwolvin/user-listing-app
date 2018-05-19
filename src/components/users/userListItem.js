import React, { Component } from 'react';
import UserImage from './userImage';
import UserMeta from './userMeta';
import '../../css/userListItem.css';

class UserListItem extends Component {
    render() {
        const userDetails = this.props.user;
        return (
            <li className="user-list-item">
                <UserImage userDetails={userDetails} />
                <UserMeta userDetails={userDetails} />
            </li>
        );
    }
}

export default UserListItem;
