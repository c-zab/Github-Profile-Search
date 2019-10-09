import React from 'react'
import RepoList from './RepoList.jsx'

const isAvailable = (value) => (value === null) ? <span className="text-danger">Not Available</span> : value

const Profile = ({userData, userRepos}) => (
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
                    <li className="list-group-item"><strong>Username:</strong> {isAvailable(userData.login)}</li>
                    <li className="list-group-item"><strong>Location:</strong> {isAvailable(userData.location)}</li>
                    <li className="list-group-item"><strong>Email Address:</strong> {isAvailable(userData.email)}</li>
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

export default Profile;
