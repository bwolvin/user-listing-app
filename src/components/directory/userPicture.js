import React from 'react';
import PropTypes from "prop-types";

const UserPicture = (props) => {

    return (
        <div className="user-image">
            <img src={props.imgSrc} alt={props.altText} />
        </div>
    );
}

UserPicture.propTypes = {
    imgSrc: PropTypes.string,
    altText: PropTypes.string
};

export default UserPicture;
