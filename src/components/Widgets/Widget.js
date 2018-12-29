import React from 'react'
import PropTypes from 'prop-types'
import RapidCreation from './RapidCreation'
import Network from './Network'
import Glance from './Glance'
import { ErrorToast } from 'components/Toast'

const Widget = ({ type, enableResize, disableHeader, hideHeader, disableContent, options }) => {
  switch (type) {
    case 'glance':
      return (
        <Glance
          enableResize={enableResize}
          disableHeader={disableHeader}
          disableContent={disableContent}
          hideHeader={hideHeader}
        />
      )

    case 'rapidCreation':
      return (
        <RapidCreation
          enableResize={enableResize}
          disableHeader={disableHeader}
          disableContent={disableContent}
          hideHeader={hideHeader}
        />
      )

    case 'network':
      return (
        <Network
          enableResize={enableResize}
          disableHeader={disableHeader}
          disableContent={disableContent}
          hideHeader={hideHeader}
          options={options}
        />
      )

    default:
      return <ErrorToast content={`Impossibile aggiungere il widget \`${type}\``} />
  }
}

Widget.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.object,
}

Widget.defaultProps = {
  hideHeader: false,
}

export default Widget
