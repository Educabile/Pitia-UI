import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Col, Row } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiCloseCircleOutline, mdiWidgets } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Widget from 'components/Widgets'
import { SuccessToast } from 'components/Toast'

const WidgetModal = ({ t, addWidget }) => (
  <Modal
    id="widgets-modal"
    actions={null}
    header={
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}>
        <Icon path={mdiWidgets} size={1.5} color="#1565c0" />
        <span
          style={{
            marginLeft: '1em',
          }}>
          {t('aggiungiWidget')}
        </span>
        <span
          onClick={() => {
            window.$('#widgets-modal').modal('close')
          }}
          style={{
            position: 'absolute',
            right: 20,
            cursor: 'pointer',
          }}>
          <Icon path={mdiCloseCircleOutline} size={1.5} color="#5a5a5a" />
        </span>
      </div>
    }>
    <Row>
      <Col
        onClick={() => {
          addWidget({
            type: 'glance',
          })
          SuccessToast({
            content: "Widget `A colpo d'occhio` aggiunto",
          })
        }}>
        <Widget
          type="glance"
          enableResize={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        />
      </Col>
      <Col
        onClick={() => {
          addWidget({
            type: 'rapidCreation',
          })
          SuccessToast({
            content: 'Widget `Creazione Rapida` aggiunto',
          })
        }}>
        <Widget
          type="rapidCreation"
          enableResize={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        />
      </Col>
      <Col
        onClick={() => {
          addWidget({
            type: 'network',
            networkName: 'Network Placeholder',
          })
          SuccessToast({
            content: 'Widget `Network` aggiunto',
          })
        }}>
        <Widget
          type="network"
          enableResize={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          options={{
            networkName: 'Network Placeholder',
          }}
        />
      </Col>
    </Row>
    <div />
  </Modal>
)

WidgetModal.propTypes = {
  t: PropTypes.func.isRequired,
  addWidget: PropTypes.func.isRequired,
}

export default withNamespaces()(WidgetModal)
