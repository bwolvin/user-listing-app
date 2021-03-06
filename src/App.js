import React, { Component } from 'react';
import UserList from './components/directory/userList';
import UserSearch from './components/search/userSearch'
import { getFilteredUsersForInput } from './utils/userUtils';
import { getUserDirectoryList } from './api/requestApi';
import Spinner from 'reactjs-simple-spinner';

class App extends Component {
    constructor() {
        super();

        // Set initial state for user directory
        this.state = {
            users: [],
            filteredUsers: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            // Config setting for how many users to return
            const userListCount = 100;
            getUserDirectoryList(userListCount)
            .then(users => {
                this.setState({
                    users: users,
                    loading: false
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        });
    }

    renderUserList(){
        const { loading, users, filteredUsers } = this.state;

        // If we have matches for filtered users render those
        // otherwise render the original list of users
        const usersToRender = filteredUsers.length ? filteredUsers : users;

        if (loading) {
            return (<Spinner message="Loading..." />);
        } else {
            return (<UserList users={usersToRender} />);
        }
    }

    handleSearchChange(inputString) {
        const { users } = this.state;
        // Filter original set of users for input string 
        const filtererdUsers = getFilteredUsersForInput(users, inputString);
        let filteredUserList =  [];

        // There are filtered user results to render
        if (filtererdUsers < users) {
            filteredUserList = filtererdUsers;
        }

        this.setState({
            filteredUsers: filteredUserList
        });
    }

    getUserResultsCount() {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length ? filteredUsers.length : users.length;
    }

    render() {
        return (
            <div className="App">
                <h1>User Directory</h1>
                <div className="user-directory">
                    <UserSearch resultCount={this.getUserResultsCount()} onChange={(e) => this.handleSearchChange(e)} />
                    {this.renderUserList()}
                </div>
            </div>
        );
    }
}

export default App;
