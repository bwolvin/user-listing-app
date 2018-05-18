import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/userList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialUsers: [],
      loading: false
    };
  }

  componentDidMount() {
    const requestUserListUrl = `https://randomuser.me/api/?results=100`;

    this.setState({ loading: true }, () => {
      axios.get(requestUserListUrl)
        .then(res => {
          const results = res.data.results;

          // create an array of users only with relevant data
          const relevantUserData = results.map(item => {
            return {
              location: item.location,
              name: item.name,
              picture: item.picture
            };
          });

          this.setState({
            initialUsers: relevantUserData,
            loading: false
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }

  renderUserList(){
    if (!this.state.initialUsers || !this.state.initialUsers.length) return;
    return (<UserList initialUsers={this.state.initialUsers} loading={this.state.loading}/>)
  }

  render() {
    const { loading, initialUsers } = this.state;

    return (
      <div className="App">

        <h1>User Directory</h1>

        {this.renderUserList()}

      </div>
    );
  }
}

export default App;
