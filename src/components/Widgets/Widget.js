import React from 'react'
import PropTypes from 'prop-types'
import RapidCreation from './RapidCreation'
import Network from './Network'
import Glance from './Glance'
import { ErrorToast } from 'components/Toast'

const Widget = ({ type, enableResize, options }) => {
  switch (type) {
    case 'glance':
      return <Glance enableResize={enableResize} />

    case 'rapidCreation':
      return <RapidCreation enableResize={enableResize} />

    case 'network':
      return <Network enableResize={enableResize} options={options} />

    default:
      return <ErrorToast content={`Impossibile aggiungere il widget \`${type}\``} />
  }
}

Widget.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.object,
}

export default Widget
