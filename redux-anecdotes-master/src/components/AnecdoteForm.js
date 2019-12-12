import React from 'react'
import { submitNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
	const submit = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.store.dispatch(submitNew(content))
	  }

	return (
		<form onSubmit={submit}>
        	<div><input name="anecdote" /></div>
        	<button type='submit'>create</button>
		</form>
	)
}

export default AnecdoteForm