import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiGoogleNearby, mdiCloseCircleOutline, mdiWidgets } from '@mdi/js'

const WidgetModal = () => (
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
          Aggiungi un widget
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
    <div />
  </Modal>
)

WidgetModal.propTypes = {}

export default WidgetModal
