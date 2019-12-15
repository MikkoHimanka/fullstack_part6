import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

if (props.notification.text !== ''){
	return (
    	<div style={style}>
      	{props.notification.text}
    	</div>
	  )
  } else {
	  return (
		<></>
	  )
  }
}

const mapStateToProps = (state) => {
	return {
		notification: state.notification
	}
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification