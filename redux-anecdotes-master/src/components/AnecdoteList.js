import React from 'react'
import { connect } from 'react-redux'
import { voteFor  } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
	const vote = (anecdote) => {
		props.voteFor(anecdote.id)
		props.showNotification(`You voted ${anecdote.content}`)
		const id = props.notification.id
		setTimeout(() => {
			props.hideNotification(id)
		}, 5000)
	}

	return (
		<div>
			{props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = ({anecdotes, filter}) => {
	return (
		anecdotes.filter(object => object.content.toLowerCase().includes(filter.toLowerCase()))
		.sort((a, b) => b.votes - a.votes)
	)
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter,
		notification: state.notification,
		visibleAnecdotes: anecdotesToShow(state)
	}
}

const mapDispatchToProps = {
	voteFor, showNotification, hideNotification
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes