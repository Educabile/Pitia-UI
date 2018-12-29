import React from 'react'
import PropTypes from 'prop-types'
import NewNetwork from './NewNetwork'
import NewNode from './NewNode'
import NewWidget from './NewWidget'

const Notification = ({ event }) => {
  switch (event.action) {
    case 'newNetwork':
      return <NewNetwork event={event} />

    case 'newNode':
      return <NewNode event={event} />

    case 'newWidget':
      return <NewWidget event={event} />

    default:
      return null
  }
}

Notification.propTypes = {
  event: PropTypes.object.isRequired,
}

export default Notification
