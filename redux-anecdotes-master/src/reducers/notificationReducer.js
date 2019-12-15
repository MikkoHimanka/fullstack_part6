const notificationReducer = (state = { text: '', id: null }, action) => {
	switch (action.type) {
		case ('SHOW_NOTIFICATION'):
			return { text: action.notification, id: action.id }
		case ('HIDE_NOTIFICATION'):
			if (action.id === state.id) {
				console.log('cleared')
				return { text: '', id: null }
			} else return state
		default: return state
	}	
}

const showNotification = (id, notification) => {
	return { type: 'SHOW_NOTIFICATION', id, notification }
}

const hideNotification = (id) =>{
	return { type: 'HIDE_NOTIFICATION', id }
}
  
let nextNotificationId = 0
export function showNotificationWithTimeout(dispatch, notification) {

	const id = nextNotificationId++
	dispatch(showNotification(id, notification))

	setTimeout(() => {
		dispatch(hideNotification(id))
	}, 5000)
}

export default notificationReducer