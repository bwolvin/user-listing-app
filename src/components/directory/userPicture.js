import React, { Component } from 'react';

class UserPicture extends Component {
    render() {
        return (
            <div className="user-image">
                <img src={this.props.imgSrc} alt={this.props.altText} />
            </div>
        );
    }
}

export default UserPicture;
