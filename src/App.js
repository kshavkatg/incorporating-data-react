import React, {useState, useEffect} from 'react'
import GitHubUser from './GitHubUser'
import {UserRepositories} from './UserRepositories'
import RepositoryReadme from './RepositoryReadme'
import SearchForm from './SearchForm'
import { GraphQLClient } from 'graphql-request'

const query = `
  query findRepos($login: String!) {
    user(login: $login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first: 100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`
const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      Authorization: "token ___"
    }
  }
)

client
  .request(query, {login: "moontahoe"})
  .then(result => JSON.stringify(result, null, 2))
  .then(console.log)
  .catch(console.error)



export default function App() {
  const [login, setLogin] = useState()
  const [userData, setUserData] = useState()
  const [repository, setRepository] = useState()

  useEffect(() => {
    client
      .request(query, {login})
      .then(({user}) => user)
      .then(setUserData)
      .catch(console.error)
  }, [client, query, login])

 if(!userData) return <p>Loading...</p>

  return (
    <>
      <SearchForm setLogin={setLogin} value={login} />
      {login && <GitHubUser data={userData} />}
      {login && <UserRepositories
          allRepositories={userData.repositories}
          repo={repository}
          login={userData.login}
          onSelect={setRepository}
      />}
      {login && repository && <RepositoryReadme login={login} repo={repository} />} 
    </>
  )
}