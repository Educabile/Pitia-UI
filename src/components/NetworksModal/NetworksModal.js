import React from 'react'
import { Modal } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiPlusNetwork, mdiCloseCircleOutline } from '@mdi/js'
import NetworkForm from 'components/NetworkForm/NetworkForm'

const NetworksModal = () => (
  <Modal
    id="networks-modal"
    actions={null}
    header={
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}>
        <Icon path={mdiPlusNetwork} size={1.5} color="#1565c0" />
        <span
          style={{
            marginLeft: '1em',
          }}>
          Crea un nuovo network
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
    <NetworkForm />
  </Modal>
)

export default NetworksModal
