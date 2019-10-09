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
      username: 'bradtraversy',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  // Get user data from Github
  getUserData() {
    const {username, perPage} = this.state;
    const {clientId, clientSecret} = this.props;

    axios.get(`http://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(resProfile => {
        // Get user repos from Github
        axios.get(`http://api.github.com/users/${username}/repos?per_page=${perPage}&client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
          .then(resRepo => {
            this.setState({
              userData: resProfile.data,
              userRepos: resRepo.data,
            })
          })
          .catch(err => {
            this.setState({
              userRepos: null,
            })
          })
      })
      .catch(err => {
        this.setState({
          userData: null,
          userRepos: null,
        })
      })
  }

  handleSearch = username => {
    this.setState({username}, () => {
      this.getUserData();
    })
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
          <div className="row pt-2">
            <div className='col-sm-12'>
              <Search handleSearch={this.handleSearch}></Search>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {(!userData || !userRepos)
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
