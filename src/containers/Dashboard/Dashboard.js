import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiPencil, mdiPlus, mdiCursorMove } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Spinner from 'components/Spinner'
import Logger from 'components/Logger'
import Button from 'components/Button'
import Widget from 'components/Widgets'
import Style from './Dashboard.module.css'

const Dashboard = ({ t, widgets: { widgets, loading, error } }) => (
  <Row style={{ marginBottom: 0 }}>
    <Col s={12} xl={8}>
      <Row
        className="grey lighten-5"
        style={{
          minHeight: 'calc(100vh - 56px)',
          maxHeight: 'calc(100vh - 56px)',
          marginBottom: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}>
        {loading && <Spinner />}
        {error && <h1>{error}</h1>}
        {widgets.map((widget, index) => (
          <Col key={`${widget}-${index}`}>
            <Widget type={widget} />
          </Col>
        ))}
        <Button
          floating
          fab="vertical"
          waves="light"
          icon={
            <Icon
              path={mdiPencil}
              size={1.25}
              color="white"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
          className={cx('scale-transition scale-out blueGradient hoverable', {
            'scale-in': !loading && !error,
          })}
          large
          style={{
            bottom: 20,
            right: 560,
          }}>
          <Button
            floating
            icon={
              <Icon
                path={mdiCursorMove}
                size={1.25}
                color="white"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }
            className="orangeGradient"
            tooltip={t('common:riorganizzaWidget')}
            tooltipOptions={{
              position: 'left',
            }}
          />
          <Button
            onClick={() => {
              window.$('#widgets-modal').modal('open')
            }}
            floating
            icon={
              <Icon
                path={mdiPlus}
                size={1.25}
                color="white"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }
            className="greenGradient"
            tooltip={t('common:aggiungiWidget')}
            tooltipOptions={{
              position: 'left',
            }}
          />
        </Button>
      </Row>
    </Col>
    <Col s={12} xl={4} className={cx('z-depth-3', Style.Col)}>
      <Logger />
    </Col>
  </Row>
)

Dashboard.propTypes = {
  t: PropTypes.func.isRequired,
  widgets: PropTypes.shape({
    widgets: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
  }),
}

const mapStateToProps = ({ widgets }) => ({
  widgets,
})

export default compose(
  withNamespaces(['widget']),
  connect(
    mapStateToProps,
    null
  )
)(Dashboard)
