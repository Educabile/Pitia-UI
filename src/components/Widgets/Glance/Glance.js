import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize'
import Icon from '@mdi/react'
import Resizable from 're-resizable'
import { withNamespaces } from 'react-i18next'
import { mdiEye } from '@mdi/js'
import { connect } from 'react-redux'
import { compose } from 'redux'

const Glance = ({ t, enableResize, networks: { networks } }) => (
  <Resizable
    defaultSize={{
      width: 240,
      height: 213.25,
    }}
    minWidth={240}
    maxWidth={515}
    minHeight={213.25}
    snap={{ x: [240, 377.5, 515] }}
    enable={enableResize}>
    <Collapsible>
      <CollapsibleItem
        className="white flow-text"
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
        }>
        <Row>
          <Col s={12}>{networks.length} Network</Col>
          <Col s={12}>20 Sensori</Col>
        </Row>
      </CollapsibleItem>
    </Collapsible>
  </Resizable>
)

Glance.propTypes = {
  t: PropTypes.func.isRequired,
  enableResize: PropTypes.object.isRequired,
  networks: PropTypes.shape({
    loading: PropTypes.bool,
    networks: PropTypes.array,
    error: PropTypes.string,
  }).isRequired,
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
