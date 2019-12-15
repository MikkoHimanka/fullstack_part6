import React from 'react'
import { connect } from 'react-redux'
import { voteFor  } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
	const filter = props.filter
	const anecdotes = props.anecdotes
		.filter(object => object.content.toLowerCase().includes(filter.toLowerCase()))
	
	const vote = (anecdote) => {
		showNotificationWithTimeout(props.store.dispatch, `you voted ${anecdote.content}`)
		props.store.dispatch(voteFor(anecdote.id))
	}

	return (
		<div>
			{anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
				<div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => vote(anecdote)}>vote</button>
				</div>
				</div>
			)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter,
		notification: state.notification
	}
}

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdotes