import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiCloseCircleOutline, mdiWidgets } from '@mdi/js'
import { withNamespaces } from 'react-i18next'

const WidgetModal = ({ t }) => (
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
    <div />
  </Modal>
)

WidgetModal.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces()(WidgetModal)
