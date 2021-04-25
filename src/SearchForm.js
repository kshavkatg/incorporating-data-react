import React from 'react'
import {useInput} from './hooks'

export default function SearchForm({setLogin = f => f}) {
  const [textProps, resetText] = useInput("")

  const submit = e => {
    e.preventDefault()
    setLogin(textProps.value)
    resetText()
  }

  return (
    <form onSubmit={submit}>
      <input 
        {...textProps}
        type="text"
        placeholder="github login"
        required
      />
      <button>SEARCH</button>
    </form>
  )
}
