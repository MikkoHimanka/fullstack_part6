import React from 'react'
import { connect } from 'react-redux'
import { submitNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const submit = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.submitNew(content)
		props.setNotification(`${content} added`, 5, props.notification.id)
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
	submitNew, setNotification
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm