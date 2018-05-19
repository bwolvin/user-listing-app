import React, { Component } from 'react';
import UserList from './components/users/userList';
import UserSearch from './components/users/userSearch'
import { getRelevantUserDataList, getFilteredResultsForUsers } from './utils/userUtils';
import { getInitialUserListData } from './api/requestApi';
import Spinner from 'reactjs-simple-spinner';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            filteredUsers: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            const userListCount = 100;
            getInitialUserListData(userListCount)
            .then(res => {
                // Slim down the user list data to only get relevant data that is needed for the app
                const relevantUserDataList = getRelevantUserDataList(res.data.results);

                this.setState({
                    users: relevantUserDataList,
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

        // If we have matches for filtered users display them otherwise
        // display the initial list of all the users
        const usersToDisplay = filteredUsers.length ? filteredUsers : users;

        if (loading) {
            return (<Spinner message="Loading..." />)
        } else {
            // Render user list when we have initial users back from request api
            return (<UserList users={usersToDisplay} />)
        }
    }

    handleSearchChange(searchString) {
        const filtererdResults = getFilteredResultsForUsers(this.state.users, searchString);
        let filteredUserList =  [];

        // There are filtered user results to display
        if (filtererdResults < this.state.users) {
            filteredUserList = filtererdResults;
        }

        this.setState({
            filteredUsers: filteredUserList
        });
    }

    render() {
        const { users, filteredUsers } = this.state;
        const resultCount = filteredUsers.length ? filteredUsers.length : users.length;
        
        return (
            <div className="App">
                <h1>User Directory</h1>
                <UserSearch resultCount={resultCount} onChange={(e) => this.handleSearchChange(e)} />
                {this.renderUserList()}
            </div>
        );
    }
}

export default App;
