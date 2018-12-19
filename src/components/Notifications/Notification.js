import React from 'react'
import PropTypes from 'prop-types'
import NewNetwork from './NewNetwork/NewNetwork'
import NewNode from './NewNode/NewNode'

const Notification = ({ event }) => {
  switch (event.type) {
    case 'newNetwork':
      return <NewNetwork event={event} />

    case 'newNode':
      return <NewNode event={event} />

    default:
      break
  }
}

Notification.propTypes = {
  event: PropTypes.object.isRequired,
}

export default Notification
