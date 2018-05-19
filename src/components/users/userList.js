import React, { Component } from 'react';
import UserListItem from './userListItem';

class UserList extends Component {
	render() {
		return (
			<div className="user-list">
				<ul>
					{this.props.users.map(user => (
						<UserListItem user={user} key={`${user.name.first}-${user.name.last}`} />
					))}
				</ul>
			</div>
		);
	}
}

export default UserList;
