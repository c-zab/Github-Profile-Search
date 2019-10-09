import React, {useState} from 'react'

const Search = ({handleSearch}) => {
  const [username, setUsername] = useState('')

  const handleChange = event => {
    setUsername(event.target.value)
  }

  const handleSubmit = event => {
    if(username !== '') {
      handleSearch(username);
    } else {
      alert('Please insert a username')
    }
    event.preventDefault();
  }

  return (
    <form className='d-flex justify-content-center form-inline' onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="font-weight-bold" htmlFor='username'>Search Github Users: </label>
        <div className="col-auto">
          <input
            type="text"
            className="form-control mb-2"
            id="username"
            name='username'
            placeholder="Github Username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search;
