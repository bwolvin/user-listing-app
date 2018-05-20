import React, { Component } from 'react';

class UserPicture extends Component {
    render() {
        const userDetailAltText = `${this.props.userDetails.name.first}-${this.props.userDetails.name.last}`;
        return (
            <div className="user-image">
                <img src={this.props.userDetails.picture} alt={userDetailAltText} />
            </div>
        );
    }
}

export default UserPicture;
