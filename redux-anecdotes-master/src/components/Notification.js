import React from 'react'
import { notificationChange } from '../reducers/notificationReducer'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  let timeout

  const notification = props.store.getState().notification

  if (notification !== ''){
	  clearTimeout(timeout)
	  timeout = setTimeout(() => {
		props.store.dispatch(notificationChange(''))
	  }, 5000)
	  return (
    	<div style={style}>
      	{notification}
    	</div>
	  )
  } else {
	  return (
		<></>
	  )
  }
}

export default Notification