import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from './Navbar.jsx'
import Search from './github/Search.jsx'
import Profile from './github/Profile.jsx'
import Error from './Error.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'c-zab',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  // Get user data from Github
  getUserData = async (username = this.state.username) => {
    console.log("TCL: App -> getUserData -> username", username)
    const {perPage} = this.state;
    const {clientId, clientSecret} = this.props;
    try {
      let user = await axios.get(`http://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`);
      let repos = await axios.get(`http://api.github.com/users/${username}/repos?per_page=${perPage}&client_id=${clientId}&client_secret=${clientSecret}&sort=created`);
      let userData = user.data;
      let userRepos = repos.data;
      this.setState({userData, userRepos, username})
    } catch (error) {
      this.setState({userData: null, userRepos: null, username})
    }
  }

  handleSearch = username => {
    this.getUserData(username);
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const {userData, userRepos, username} = this.state;
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <div className="row my-3">
            <div className='col-sm-12'>
              <Search handleSearch={this.handleSearch}></Search>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-12">
              {(!userData)
                ? <Error username={username}></Error>
                : <Profile userData={userData} userRepos={userRepos}></Profile>
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string,
}

App.defaultProps = {
  clientId: 'Iv1.b98e86a18cea30bf',
  clientSecret: '786e25f00c9eed550d2415cce0e36868cb45f423',
}

export default App;
