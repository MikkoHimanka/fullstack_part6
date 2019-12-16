import React from 'react'
import { connect } from 'react-redux'
import { submitNew } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
	const submit = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		const newDote = await anecdoteService.createNew(content)
		props.submitNew(newDote)
		props.showNotification(`${content} added`)
		const id = props.notification.id
		setTimeout(() => {
			props.hideNotification(id)
		}, 5000)
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

const mapStateToProps = (state) => {
	return {
		notification: state.notification
	}
}

const mapDispatchToProps = {
	submitNew, showNotification, hideNotification
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm