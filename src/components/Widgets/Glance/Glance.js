import React from 'react'
import PropTypes from 'prop-types'
import { Collapsible } from 'react-materialize'
import CollapsibleItem from 'components/CollapsibleItem'
import { mdiEye, mdiLan, mdiGoogleNearby, mdiDomain } from '@mdi/js'
import Icon from '@mdi/react'
import Resizable from 're-resizable'
import { withNamespaces } from 'react-i18next'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Button from 'components/Button'
import { Link } from 'react-router-dom'

const Glance = ({
  t,
  enableResize,
  networks: { networks },
  disableHeader,
  hideHeader,
  disableContent,
  style,
}) => (
  <Resizable
    defaultSize={{
      width: 513,
      height: 351.75,
    }}
    minWidth={240}
    maxWidth={513}
    minHeight={351.75}
    snap={{ x: [240, 377.5, 513] }}
    enable={enableResize}>
    <Collapsible style={style}>
      <CollapsibleItem
        className="white grey-text text-darken-4 flow-text"
        expanded
        header={
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiEye} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }}>{t('riassunto')}</span>
          </span>
        }
        disableHeader={disableHeader}
        disableContent={disableContent}
        hideHeader={hideHeader}>
        <Link to="/networks">
          <Button flat>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}>
              <Icon path={mdiLan} size={1.5} color="#1565c0" />
              <span style={{ marginLeft: '1em' }}>{networks.length} Network</span>
            </span>
          </Button>
        </Link>
        <hr />
        <Link to="/networks">
          <Button flat>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}>
              <Icon path={mdiGoogleNearby} size={1.5} color="#1565c0" />
              <span style={{ marginLeft: '1em' }}>20 Sensori</span>
            </span>
          </Button>
        </Link>
        <hr />
        <Link to="/assets">
          <Button
            flat
            onClick={() => {
              window.$('#networks-modal').modal('open')
            }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}>
              <Icon path={mdiDomain} size={1.5} color="#1565c0" />
              <span style={{ marginLeft: '1em' }}>10 Assets</span>
            </span>
          </Button>
        </Link>
      </CollapsibleItem>
    </Collapsible>
  </Resizable>
)

Glance.propTypes = {
  t: PropTypes.func.isRequired,
  enableResize: PropTypes.shape({
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
  networks: PropTypes.shape({
    loading: PropTypes.bool,
    networks: PropTypes.array,
    error: PropTypes.string,
  }).isRequired,
  disableHeader: PropTypes.bool.isRequired,
  hideHeader: PropTypes.bool.isRequired,
  disableContent: PropTypes.bool.isRequired,
  style: PropTypes.object,
}

Glance.defaultProps = {
  enableResize: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  disableHeader: false,
  hideHeader: false,
  disableContent: false,
}

const mapStateToProps = ({ networks }) => ({
  networks,
})

export default compose(
  withNamespaces(['widgets']),
  connect(
    mapStateToProps,
    null
  )
)(Glance)
