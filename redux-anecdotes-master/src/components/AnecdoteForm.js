import React from 'react'
import { submitNew } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const submit = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.store.dispatch(submitNew(content))
		props.store.dispatch(notificationChange(`${content} added`))
	  }

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={submit}>
				<div><input name="anecdote" /></div>
				<button type='submit'>create</button>
			</form>
		</div>
	)
}

export default AnecdoteForm