import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row } from 'react-materialize'
import Button from 'components/Button'
import Icon from '@mdi/react'
import { mdiHelpNetwork, mdiCrosshairsGps, mdiDomain, mdiIpNetwork, mdiPlus } from '@mdi/js'
import { SuccessToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
class NetworkForm extends Component {
  static propTypes = {
    networkName: PropTypes.string,
    networkPosition: PropTypes.string,
    networkStructure: PropTypes.string,
    networkIP: PropTypes.string,
    addInfoEvent: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  }

  static defaultProps = {
    networkName: '',
    networkPosition: '',
    networkStructure: '',
    networkIP: '',
  }

  state = {
    name: this.props.networkName,
    position: this.props.networkPosition,
    structure: this.props.networkStructure,
    ip: this.props.networkIP,
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

  updateStructure = ({ target: { value: structure } }) => {
    this.setState({
      structure,
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
    const { name, position, structure, ip } = this.state
    const { t, addInfoEvent } = this.props

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        <Row>
          <Input
            s={12}
            label={t('nomeRete')}
            validate
            required
            value={name}
            onChange={this.updateName}>
            <Icon path={mdiHelpNetwork} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label={t('posizioneRete')}
            validate
            value={position}
            onChange={this.updatePosition}>
            <Icon path={mdiCrosshairsGps} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label={t('assetRiferimento')}
            validate
            value={structure}
            onChange={this.updateStructure}>
            <Icon path={mdiDomain} size={1.175} color="#1565c0" />
          </Input>
          <Input s={12} label={t('ipRete')} validate value={ip} onChange={this.updateIP}>
            <Icon path={mdiIpNetwork} size={1.175} color="#1565c0" />
          </Input>

          <div className="center">
            <Button
              onClick={() => {
                window.$('#networks-modal').modal('close')
                SuccessToast({
                  content: `Nuova rete \`${name}\` creata`,
                  action: addInfoEvent({
                    type: 'newNetwork',
                    content: `Nuova rete \`${name}\` creata`,
                    details: `E' stata creata una nuova rete: \`${name}\``,
                    date: +new Date(),
                  }),
                })
              }}
              className="blueGradient hoverable white-text"
              waves
              large
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <span
                style={{
                  marginRight: '1em',
                }}>
                {t('creaNetwork')}
              </span>
              <Icon path={mdiPlus} size={1} color="white" />
            </Button>
          </div>
        </Row>
      </form>
    )
  }
}

export default withNamespaces()(NetworkForm)
