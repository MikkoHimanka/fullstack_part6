import anecdoteService from '../services/anecdotes'

export const submitNew = content => {
	return async dispatch => {
		const anecdote = await anecdoteService.createNew(content)
		dispatch({
			type: 'SUBMIT',
			data: anecdote
		})
	}
}

export const voteFor = (id) => {
	return async dispatch => {
		await anecdoteService.vote(id)
		dispatch({
			type: 'VOTE',
			data: { id }
		})
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT_DOTES',
			data: anecdotes
		})
	}
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
	  case 'VOTE':
		  const id = action.data.id
		  const objectToChange = state.find(x => x.id === id)
		  const changedObject = {
			  ...objectToChange,
			  votes: objectToChange.votes + 1
		  }
		  return state.map(object => object.id !== id ? object : changedObject)
	  case 'SUBMIT':
		  return [...state, action.data]
	  case 'INIT_DOTES':
		  return action.data

	  default: return state
  }
}

export default anecdoteReducer