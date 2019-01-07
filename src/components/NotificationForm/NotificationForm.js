import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiTimer, mdiMusicNote } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import Select from 'components/Select/Select'
import Style from './NotificationForm.module.css'
class NotificationForm extends Component {
  state = {
    notificationDuration: this.props.currentNotificationDuration,
    notificationSound: this.props.currentNotificationSound,
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    updateNotificationSound: PropTypes.func.isRequired,
    updateNotificationDuration: PropTypes.func.isRequired,
    currentNotificationSound: PropTypes.number.isRequired,
    currentNotificationDuration: PropTypes.number.isRequired,
  }

  updateNotificationSound = notificationSound => {
    this.setState(
      {
        notificationSound,
      },
      () => {
        const { updateNotificationSound } = this.props
        const { notificationSound } = this.state

        updateNotificationSound(notificationSound)
      }
    )
  }

  updateNotificationDuration = ({ target: { value: notificationDuration } }) => {
    this.setState(
      {
        notificationDuration,
      },
      () => {
        const { updateNotificationDuration } = this.props
        const { notificationDuration } = this.state

        updateNotificationDuration(notificationDuration)
      }
    )
  }

  render() {
    const { notificationDuration, notificationSound } = this.state
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
            min={4}
            className={Style.Input}
            label={t('settings:durataNotifiche')}
            validate
            required
            value={notificationDuration}
            onChange={this.updateNotificationDuration}>
            <Icon path={mdiTimer} size={1.175} color="white" />
          </Input>
          <Select
            s={12}
            selectClassName={Style.Select}
            label={t('settings:suonoNotifiche')}
            value={notificationSound}
            icon={<Icon path={mdiMusicNote} size={1.175} color="white" />}
            onChange={({ currentTarget: { value: notificationSound } }) => {
              this.updateNotificationSound(notificationSound)
            }}>
            <option value="1">Suono 1</option>
            <option value="2">Suono 2</option>
            <option value="3">Suono 3</option>
            <option value="4">Suono 4</option>
            <option value="5">Suono 5</option>
            <option value="6">Suono 6</option>
            <option value="7">Suono 7</option>
            <option value="8">Suono 8</option>
            <option value="9">Suono 9</option>
            <option value="10">Suono 10</option>
            <option value="11">Suono 11</option>
            <option value="12">Suono 12</option>
            <option value="13">Suono 13</option>
            <option value="14">Suono 14</option>
            <option value="15">Suono 15</option>
            <option value="16">Suono 16</option>
            <option value="17">Suono 17</option>
            <option value="18">Suono 18</option>
          </Select>
        </Row>
      </form>
    )
  }
}

export default withNamespaces('settings')(NotificationForm)
