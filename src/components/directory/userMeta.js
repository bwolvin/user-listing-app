import React from 'react';
import PropTypes from "prop-types";

const UserMeta = (props) => {
    return (
        <div className="user-meta">
            <h2 className="user-name-header">{props.name.first} {props.name.last}</h2>
            <p>{props.location.postCode} {props.location.street}</p>
            <p>{props.location.city}, {props.location.state}</p>
        </div>
    );
}

UserMeta.propTypes = {
    name: PropTypes.object,
    location: PropTypes.object
};

export default UserMeta;
