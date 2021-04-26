import React, {useState} from 'react'
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
      Authorization: "token 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"
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