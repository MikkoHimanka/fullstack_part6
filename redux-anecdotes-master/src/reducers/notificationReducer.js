const notificationReducer = (state = { text: '' }, action) => {
	switch (action.type) {
		case ('SHOW_NOTIFICATION'):
			return { text: action.notification }
		case ('HIDE_NOTIFICATION'):
			return { text: '' }
		default: return state
	}	
}

export const setNotification = (content, time) => {
	return async dispatch => {
		dispatch({
			type: 'SHOW_NOTIFICATION', notification: content
		})
		setTimeout(() => {
			dispatch({
				type: 'HIDE_NOTIFICATION'
			})
		}, 1000*time);
	}
}

export default notificationReducer