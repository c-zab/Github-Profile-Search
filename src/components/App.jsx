import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from './Navbar.jsx'
import Profile from './github/Profile.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'bradtraversy',
      userData: [],
      userRepos: [],
      perPage: 5,
    }
  }

  // Get user data from Github
  getUserData() {
    const {username} = this.state;
    const {clientId, clientSecret} = this.props;
    axios.get(`http://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(res => {
      console.log("TCL: App -> getUserData -> res", res.data)
        this.setState({userData: res.data})
      })
      .catch(err => {
        this.setState({username: null})
        console.log('Ops!', err);
      })
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const {userData} = this.state;
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <div className="row pt-3">
            <div className="col-sm-12">
              <Profile userData={userData}></Profile>
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
