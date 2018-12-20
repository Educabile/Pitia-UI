import React from 'react'
import PropTypes from 'prop-types'
import RapidCreation from './RapidCreation'
import Glance from './Glance'
import { ErrorToast } from 'components/Toast'

const Widget = ({ type, enableResize }) => {
  switch (type) {
    case 'glance':
      return <Glance enableResize={enableResize} />

    case 'rapidCreation':
      return <RapidCreation enableResize={enableResize} />

    default:
      return <ErrorToast content={`Impossibile aggiungere il widget \`${type}\``} />
  }
}

Widget.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Widget
