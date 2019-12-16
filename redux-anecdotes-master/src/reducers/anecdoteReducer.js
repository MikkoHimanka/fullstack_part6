export const submitNew = (anecdote) => {
	return {
		type: 'SUBMIT',
		data: anecdote
	}
}

export const voteFor = (id) => {
	return {
		type: 'VOTE',
		data: { id }
	}
}

export const initializeAnecdotes = (anecdotes) => {
	return {
		type: 'INIT_DOTES',
		data: anecdotes
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