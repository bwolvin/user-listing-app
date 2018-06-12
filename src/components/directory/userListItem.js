import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserPicture from './userPicture';
import UserMeta from './userMeta';
import '../../css/directory/userListItem.css';

class UserListItem extends Component {
    render() {
        const userDetails = this.props.user;
        const pictureAltText = `${userDetails.name.first}-${userDetails.name.last}`;
        return (
            <li className="user-list-item">
                <UserPicture imgSrc={userDetails.picture} altText={pictureAltText} />
                <UserMeta name={userDetails.name} location={userDetails.location} />
            </li>
        );
    }
}

UserListItem.propTypes = {
    user: PropTypes.object
};

export default UserListItem;
