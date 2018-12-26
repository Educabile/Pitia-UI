import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Row } from 'react-materialize'
import Button from 'components/Button'
import Icon from '@mdi/react'
import { mdiCrosshairsGps, mdiPlus, mdiLabelOutline, mdiMemory, mdiIpNetwork } from '@mdi/js'
import { SuccessToast } from 'components/Toast'
import { withNamespaces } from 'react-i18next'
import { notification } from 'actions/notifications'
import { connect } from 'react-redux'
class NodeForm extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    sensorName: PropTypes.string,
    sensorType: PropTypes.string,
    sensorPosition: PropTypes.string,
    sensorIP: PropTypes.string,
    addNotification: PropTypes.func.isRequired,
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
    const { t, addNotification } = this.props

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.setState({
            name: '',
            type: '',
            position: '',
            ip: '',
          })
          window.$('#nodes-modal').modal('close')
          SuccessToast({
            content: `Nuovo nodo \`${name}\` aggiunto con successo`,
            action: addNotification({
              type: 'success',
              action: 'newNode',
              content: `Nuovo nodo \`${name}\` aggiunto con successo`,
              details: `E' stata aggiunto un nuovo nodo: \`${name}\``,
              date: +new Date(),
            }),
          })
        }}>
        <Row>
          <Input
            s={12}
            label={t('nomeSensore')}
            validate
            required
            value={name}
            onChange={this.updateName}>
            <Icon path={mdiLabelOutline} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label={t('tipoSensore')}
            validate
            required
            value={type}
            onChange={this.updateType}>
            <Icon path={mdiMemory} size={1.175} color="#1565c0" />
          </Input>
          <Input
            s={12}
            label={t('posizioneSensore')}
            validate
            value={position}
            onChange={this.updatePosition}>
            <Icon path={mdiCrosshairsGps} size={1.175} color="#1565c0" />
          </Input>
          <Input s={12} label={t('ipSensore')} validate value={ip} onChange={this.updateIP}>
            <Icon path={mdiIpNetwork} size={1.175} color="#1565c0" />
          </Input>

          <div className="center">
            <Button
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
                {t('aggiungiNodo')}
              </span>
              <Icon path={mdiPlus} size={1} color="white" />
            </Button>
          </div>
        </Row>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNotification: event => {
    dispatch(notification(event))
  },
})

export default withNamespaces()(
  connect(
    null,
    mapDispatchToProps
  )(NodeForm)
)
