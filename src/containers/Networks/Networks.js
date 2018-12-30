import React from 'react'
import PropTypes from 'prop-types'
import cx from 'class-names'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Button from 'components/Button'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Spinner from 'components/Spinner'
import Widget from 'components/Widgets'
import Style from './Networks.module.css'

const Networks = ({ t, networks: { networks, loading, error } }) => (
  <Row className={cx('grey lighten-5', Style.Row)}>
    {loading && <Spinner />}
    {error && <h1>{error}</h1>}
    {networks.map((network, index) => (
      <Col key={`${network.networkName}-${index}`}>
        <Widget type="network" options={network} />
      </Col>
    ))}
    <Button
      onClick={() => {
        window.$('#networks-modal').modal('open')
      }}
      floating
      fab
      waves="light"
      icon={<Icon path={mdiPlus} size={1.25} color="white" className={Style.Icon} />}
      className={cx('scale-transition scale-out blueGradient hoverable', {
        'scale-in': !loading && !error,
      })}
      large
      style={{
        bottom: 20,
      }}
      tooltip={t('creaNetwork')}
      tooltipOptions={{
        position: 'left',
      }}
    />
  </Row>
)

Networks.propTypes = {
  t: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  networks: PropTypes.object.isRequired,
}

const mapStateToProps = ({ networks }) => ({
  networks,
})

export default compose(
  withNamespaces(),
  connect(
    mapStateToProps,
    null
  )
)(Networks)
