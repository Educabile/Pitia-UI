import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'components/Chart/Chart'
import Resizable from 're-resizable'
import Icon from '@mdi/react'
import { mdiNetworkOutline } from '@mdi/js'
import { Collapsible } from 'react-materialize'
import CollapsibleItem from 'components/CollapsibleItem'

const Network = ({
  options: { networkName, networkPosition, networkIP, networkDescription, wss },
  enableResize,
  disableHeader,
  hideHeader,
  disableContent,
  style,
}) => {
  let widget = (
    <Collapsible style={style}>
      <CollapsibleItem
        className="white grey-text text-darken-4 flow-text"
        style={{ paddingTop: 0, paddingBottom: 0 }}
        expanded
        header={
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiNetworkOutline} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }} className>
              {networkName}
            </span>
          </span>
        }
        disableHeader={disableHeader}
        disableContent={disableContent}
        hideHeader={hideHeader}
        to={{
          pathname: `/networks/${networkName.toLowerCase().replace(/\s/g, '-')}`,
          state: {
            networkName: networkName,
            networkPosition: networkPosition,
            networkIP: networkIP,
            networkDescription: networkDescription,
            wss: wss,
          },
        }}>
        <Chart wss={wss} />
      </CollapsibleItem>
    </Collapsible>
  )

  if (enableResize) {
    widget = (
      <Resizable
        defaultSize={{
          width: 513,
          height: 351.75,
        }}
        minWidth={240}
        maxWidth={780}
        minHeight={351.75}
        snap={{ x: [240, 377.5, 513, 600, 780] }}
        enable={enableResize}>
        {widget}
      </Resizable>
    )
  }
  return widget
}

Network.propTypes = {
  options: PropTypes.shape({
    networkName: PropTypes.string.isRequired,
    wss: PropTypes.string.isRequired,
  }),
  enableResize: PropTypes.shape({
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
  disableHeader: PropTypes.bool.isRequired,
  hideHeader: PropTypes.bool.isRequired,
  disableContent: PropTypes.bool.isRequired,
  style: PropTypes.object,
}

Network.defaultProps = {
  enableResize: {
    bottom: false,
    top: false,
    left: false,
    right: true,
  },
  disableHeader: false,
  hideHeader: false,
  disableContent: false,
}

export default Network
