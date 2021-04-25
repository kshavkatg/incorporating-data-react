import React, {useState} from 'react'
import GitHubUser from './GitHubUser'
import {UserRepositories} from './UserRepositories'
import RepositoryReadme from './RepositoryReadme'
import SearchForm from './SearchForm'

export default function App() {
  const [login, setLogin] = useState("moonhighway")
  const [repo, setRepo] = useState("javascript-pro")

  return (
    <>
      <SearchForm setLogin={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories
          repo={repo}
          login={login}
          onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} /> 
    </>
  )
}