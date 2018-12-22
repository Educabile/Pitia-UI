import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'components/Chart/Chart'
import Resizable from 're-resizable'
import { Card } from 'react-materialize'
import { Link } from 'react-router-dom'

const Network = ({
  options: { networkName, networkPosition, networkIP, networkDescription, wss, to },
  enableResize,
}) => {
  let widget = (
    <Resizable
      defaultSize={{
        height: 527,
      }}
      minWidth={515}
      maxWidth={780}
      snap={{ x: [515, 600, 780] }}
      enable={enableResize}>
      <Card className="hoverable" title={networkName}>
        <Chart wss={wss} />
      </Card>
    </Resizable>
  )

  if (to) {
    widget = (
      <Link
        to={{
          pathname: `/networks/${networkName.toLowerCase().replace(/\s/g, '-')}`,
          state: {
            networkName,
            networkPosition,
            networkIP,
            networkDescription,
            wss,
          },
        }}>
        {widget}
      </Link>
    )
  }

  return widget
}

Network.propTypes = {
  options: PropTypes.shape({
    networkName: PropTypes.string.isRequired,
    wss: PropTypes.string.isRequired,
    to: PropTypes.object,
  }),
  enableResize: PropTypes.shape({
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
}

Network.defaultProps = {
  enableResize: {
    bottom: false,
    top: false,
    left: false,
    right: true,
  },
}

export default Network
