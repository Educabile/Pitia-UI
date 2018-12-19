import React from 'react'
import PropTypes from 'prop-types'
import NewNetwork from './NewNetwork/NewNetwork'
import NewNode from './NewNode/NewNode'

const Notification = ({ key, event }) => {
  switch (event.type) {
    case 'newNetwork':
      return <NewNetwork key={key} event={event} />

    case 'newNode':
      return <NewNode key={key} event={event} />

    default:
      break
  }
}

Notification.propTypes = {
  key: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
}

export default Notification
