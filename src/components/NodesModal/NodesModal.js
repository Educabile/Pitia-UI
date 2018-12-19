import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiGoogleNearby, mdiCloseCircleOutline } from '@mdi/js'
import NodesForm from 'components/NodeForm/NodeForm'
import { withNamespaces } from 'react-i18next'

const NodesModal = ({ t, addInfoEvent }) => (
  <Modal
    id="nodes-modal"
    actions={null}
    header={
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}>
        <Icon path={mdiGoogleNearby} size={1.5} color="#1565c0" />
        <span
          style={{
            marginLeft: '1em',
          }}>
          {t('aggiungiNodo')}
        </span>
        <span
          onClick={() => {
            window.$('#nodes-modal').modal('close')
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
    <NodesForm addInfoEvent={addInfoEvent} />
  </Modal>
)

NodesModal.propTypes = {
  t: PropTypes.func.isRequired,
  addInfoEvent: PropTypes.func.isRequired,
}

export default withNamespaces()(NodesModal)
