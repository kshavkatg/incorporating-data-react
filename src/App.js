import React, {useState} from 'react'
import GitHubUser from './GitHubUser'
import {UserRepositories} from './UserRepositories'
import RepositoryReadme from './RepositoryReadme'
import SearchForm from './SearchForm'

export default function App() {
  const [login, setLogin] = useState()
  const [repo, setRepo] = useState()

  return (
    <>
      <SearchForm setLogin={setLogin} value={login} />
      {login && <GitHubUser login={login} />}
      {login && <UserRepositories
          repo={repo}
          login={login}
          onSelect={setRepo}
      />}
      {login && repo && <RepositoryReadme login={login} repo={repo} />} 
    </>
  )
}