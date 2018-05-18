import React, { Component } from 'react';
import UserSearch from './userSearch'
import UserListItem from './userListItem';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.initialUsers
    };
  }

  renderUserListItems(){
    if (this.props.loading) {
        return (
            <div>LOADING</div>
        )
    } else if (this.state.users && this.state.users.length) {
        return this.state.users.map((user) => {
            return (<UserListItem user={user} key={`${user.name.first}-${user.name.last}`} />)
        });
    }
  }

  render() {

    return (
        <div className="user-list">
            <UserSearch resultCount={this.state.users.length} />
            {this.renderUserListItems()}
        </div>
    );
  }
}

export default UserList;
