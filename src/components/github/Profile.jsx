import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RepoList from './RepoList.jsx'

export default class Profile extends Component {

  render() {
    const {userData, userRepos} = this.props;
    return (
      <div className="card">
        <div className="card-header">
          {userData.name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-sm-4">
                <img src={userData.avatar_url} className='thumbnail' alt="profile" style={{width: '100%'}}/>
              </div>
              <div className="col-sm-8">
                <div className="row pb-1">
                    <div className="col">
                      <span className='badge badge-primary'>{userData.public_repos} Repos</span>
                      <span className='badge badge-success'>{userData.public_gists} Public Gist</span>
                      <span className='badge badge-info'>{userData.followers} Followers</span>
                      <span className='badge badge-danger'>{userData.following} Following</span>
                    </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <div className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Username:</strong> {userData.login}</li>
                        <li className="list-group-item"><strong>Location:</strong> {userData.location}</li>
                        <li className="list-group-item"><strong>Email Address:</strong> {(userData.email=== null) ? <span className="text-danger">Not Found</span> : userData.email}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                  <a className='btn btn-primary' href={userData.html_url}>Visit Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <RepoList userRepos={userRepos}></RepoList>
      </div>
    )
  }
}
