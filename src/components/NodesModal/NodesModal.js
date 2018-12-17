import React from 'react'
import { Button, Modal, Input, Row } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiLabelOutline,
  mdiCrosshairsGps,
  mdiMemory,
  mdiNumeric,
  mdiPlus,
  mdiGoogleNearby,
} from '@mdi/js'

const NodesModal = () => (
  <Modal
    id="nodes-modal"
    header={
      <span
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
      </span>
    }>
    <form
      onSubmit={e => {
        e.preventDefault()
      }}>
      <Row>
        <Input s={12} label="Nome del sensore" validate required>
          <Icon path={mdiLabelOutline} size={1.175} color="#1565c0" />
        </Input>
        <Input s={12} label="Tipo del sensore" validate required>
          <Icon path={mdiMemory} size={1.175} color="#1565c0" />
        </Input>
        <Input s={12} label="Posizione del sensore" validate>
          <Icon path={mdiCrosshairsGps} size={1.175} color="#1565c0" />
        </Input>
        <Input s={12} label="Indirizzo IP del sensore" validate>
          <Icon path={mdiNumeric} size={1.175} color="#1565c0" />
        </Input>

        <div className="center">
          <Button
            onClick={() => {
              window.$('#nodes-modal').modal('close')
              window.M.toast({
                html: 'Nuovo nodo aggiunto con successo',
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
              Aggiungi nodo
            </span>
            <Icon path={mdiPlus} size={1} color="white" />
          </Button>
        </div>
      </Row>
    </form>
  </Modal>
)

export default NodesModal
