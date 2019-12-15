const notificationReducer = (state = { text: '', id: 0 }, action) => {
	switch (action.type) {
		case ('SHOW_NOTIFICATION'):
			return { text: action.notification, id: action.id }
		case ('HIDE_NOTIFICATION'):
			if ( action.id === state.id -1 ) {
				return { text: '', id: state.id }
			} else return state
		default: return state
	}	
}

let nextNotificationId = 1
export const showNotification = (notification) => {
	const id = nextNotificationId++
	return { type: 'SHOW_NOTIFICATION', id, notification }
}

export const hideNotification = (id) => {
	return { 
		type: 'HIDE_NOTIFICATION', id
	}
}

export default notificationReducer