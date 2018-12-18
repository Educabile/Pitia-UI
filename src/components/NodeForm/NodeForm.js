import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Row } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiCrosshairsGps, mdiPlus, mdiLabelOutline, mdiMemory, mdiIpNetwork } from '@mdi/js'

class NodeForm extends Component {
  static propTypes = {
    sensorName: PropTypes.string,
    sensorType: PropTypes.string,
    sensorPosition: PropTypes.string,
    sensorIP: PropTypes.string,
  }

  static defaultProps = {
    sensorName: '',
    sensorType: '',
    sensorPosition: '',
    sensorIP: '',
  }

  state = {
    name: this.props.sensorName,
    type: this.props.sensorType,
    position: this.props.sensorPosition,
    ip: this.props.sensorIP,
  }

  updateName = ({ target: { value: name } }) => {
    this.setState({
      name,
    })
  }

  updateType = ({ target: { value: type } }) => {
    this.setState({
      type,
    })
  }

  updatePosition = ({ target: { value: position } }) => {
    this.setState({
      position,
    })
  }

  updateIP = ({ target: { value: ip } }) => {
    this.setState({
      ip,
    })
  }

  render() {
    const { name, type, position, ip } = this.state

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        <Row>
          <Input
            s={12}
            label="Nome del sensore"
            validate
            required
            value={name}
            onChange={this.updateName}>
            <Icon path={mdiLabelOutline} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label="Tipo del sensore"
            validate
            required
            value={type}
            onChange={this.updateType}>
            <Icon path={mdiMemory} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label="Posizione del sensore"
            validate
            value={position}
            onChange={this.updatePosition}>
            <Icon path={mdiCrosshairsGps} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label="Indirizzo IP del sensore"
            validate
            value={ip}
            onChange={this.updateIP}>
            <Icon path={mdiIpNetwork} size={1.175} color="#1565c0" />
          </Input>

          <div className="center">
            <Button
              onClick={() => {
                this.setState({
                  name: '',
                  type: '',
                  position: '',
                  ip: '',
                })
                window.$('#nodes-modal').modal('close')
                window.M.toast({
                  html: `Nuovo nodo \`${name}\` aggiunto con successo`,
                  classes: 'rounded',
                })
              }}
              large
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
    )
  }
}

export default NodeForm
