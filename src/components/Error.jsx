import React from 'react'

function Error({username}) {
  return (
    <div className="card">
      <div className="card-body">
        Error trying to fetch the data for <strong className='text-danger'>{username}</strong>. Try with a valid GitHub user such as <strong>c-zab</strong>
      </div>
    </div>
  )
}

export default Error;
