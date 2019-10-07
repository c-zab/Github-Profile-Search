import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            My App
          </div>
        </div>
      </div>
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
