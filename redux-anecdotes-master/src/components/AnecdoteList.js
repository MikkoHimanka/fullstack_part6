import React from 'react'
import { voteFor  } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
	const anecdotes = props.store.getState().anecdotes
	
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

export default AnecdoteList