import React from 'react'
import { Button, Modal, Input, Row } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiPlusNetwork,
  mdiHelpNetwork,
  mdiCrosshairsGps,
  mdiDomain,
  mdiNumeric,
  mdiPlus,
} from '@mdi/js'

const NetworksModal = () => (
  <Modal
    id="networks-modal"
    header={
      <span
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
      </span>
    }>
    <form
      onSubmit={e => {
        e.preventDefault()
      }}>
      <Row>
        <Input s={12} label="Nome della rete" validate required>
          <Icon path={mdiHelpNetwork} size={1.175} color="#1565c0" />
        </Input>
        <Input s={12} label="Posizione della rete" validate>
          <Icon path={mdiCrosshairsGps} size={1.175} color="#1565c0" />
        </Input>
        <Input s={12} label="Struttura di riferimento" validate>
          <Icon path={mdiDomain} size={1.175} color="#1565c0" />
        </Input>
        <Input s={12} label="Indirizzo IP della rete" validate>
          <Icon path={mdiNumeric} size={1.175} color="#1565c0" />
        </Input>

        <div className="center">
          <Button
            onClick={() => {
              window.$('#networks-modal').modal('close')
              window.M.toast({
                html: 'Nuova rete creata con successo',
                classes: 'rounded',
              })
            }}
            className="blueGradient hoverable white-text"
            waves
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <span
              style={{
                marginRight: '1em',
              }}>
              Crea rete
            </span>
            <Icon path={mdiPlus} size={1} color="white" />
          </Button>
        </div>
      </Row>
    </form>
  </Modal>
)

export default NetworksModal
