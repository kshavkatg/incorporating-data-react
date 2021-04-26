import React from 'react'
import Fetch from './Fetch'
import RepoMenu from './RepoMenu'

export function UserRepositories({ allRepositories, repo, onSelect = f => f }) {
  return (
    <RepoMenu
      repositories={allRepositories}
      selected={repo}
      onSelect={onSelect}
    />
  );
}

