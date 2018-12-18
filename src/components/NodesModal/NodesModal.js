import React from 'react'
import { Modal } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiGoogleNearby, mdiCloseCircleOutline } from '@mdi/js'
import NodesForm from 'components/NodeForm/NodeForm'

const NodesModal = () => (
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
          Aggiungi un nodo alla rete
        </span>
        <span
          onClick={() => {
            window.$('#networks-modal').modal('close')
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
    <NodesForm />
  </Modal>
)

export default NodesModal
