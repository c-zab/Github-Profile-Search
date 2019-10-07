import React from 'react';
import Repo from './Repo.jsx';

export default function RepoList({userRepos}) {
  return (
    <div className="card">
      <div className="card-header">
        User Repositories
      </div>
      <ul className="list-group list-group-flush">
      {userRepos.map(repo => {
          return (
            <Repo key={repo.id} repo={repo}></Repo>
          )
        })}
      </ul>
    </div>
  )
}
