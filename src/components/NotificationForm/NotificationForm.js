import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiTimer, mdiMusicNote } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Style from './NotificationForm.module.css'

class NotificationForm extends Component {
  state = {
    timer: 4000,
    notificationSound: 'boh',
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  updateTimer = ({ target: { value: timer } }) => {
    this.setState({
      timer,
    })
  }

  updateNotificationSound = ({ target: { value: notificationSound } }) => {
    this.setState({
      notificationSound,
    })
  }

  render() {
    const { timer, notificationSound } = this.state
    const { t } = this.props

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
        className="white-text">
        <Row>
          <Input
            s={12}
            type="number"
            className={Style.Input}
            label={t('settings:durataNotifiche')}
            validate
            required
            value={timer}
            onChange={this.updateTimer}>
            <Icon path={mdiTimer} size={1.175} color="white" />
          </Input>
          <Input
            className={Style.Input}
            s={12}
            label={t('settings:suonoNotifiche')}
            validate
            value={notificationSound}
            onChange={this.updateNotificationSound}>
            <Icon path={mdiMusicNote} size={1.175} color="white" />
          </Input>
        </Row>
      </form>
    )
  }
}

export default withNamespaces('settings')(NotificationForm)
