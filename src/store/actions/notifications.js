export const INFO_NOTIFICATION = 'INFO_NOTIFICATION'
export const INFO_NOTIFICATION_REVERSE = 'INFO_NOTIFICATION_REVERSE'
export const INFO_NOTIFICATION_SOUND_CHANGE = 'INFO_NOTIFICATION_SOUND_CHANGE'
export const INFO_NOTIFICATION_DURATION_CHANGE = 'INFO_NOTIFICATION_DURATION_CHANGE'
export const SUCCESS_NOTIFICATION = 'SUCCESS_NOTIFICATION'
export const SUCCESS_NOTIFICATION_SOUND_CHANGE = 'SUCCESS_NOTIFICATION_SOUND_CHANGE'
export const SUCCESS_NOTIFICATION_DURATION_CHANGE = 'SUCCESS_NOTIFICATION_DURATION_CHANGE'
export const WARNING_NOTIFICATION = 'WARNING_NOTIFICATION'
export const WARNING_NOTIFICATION_REVERSE = 'WARNING_NOTIFICATION_REVERSE'
export const WARNING_NOTIFICATION_SOUND_CHANGE = 'WARNING_NOTIFICATION_SOUND_CHANGE'
export const WARNING_NOTIFICATION_DURATION_CHANGE = 'WARNING_NOTIFICATION_DURATION_CHANGE'
export const ERROR_NOTIFICATION = 'ERROR_NOTIFICATION'
export const ERROR_NOTIFICATION_REVERSE = 'ERROR_NOTIFICATION_REVERSE'
export const ERROR_NOTIFICATION_SOUND_CHANGE = 'ERROR_NOTIFICATION_SOUND_CHANGE'
export const ERROR_NOTIFICATION_DURATION_CHANGE = 'ERROR_NOTIFICATION_DURATION_CHANGE'

const newInfoNotification = notification => ({ type: INFO_NOTIFICATION, notification })

const newSuccessNotification = notification => ({
  type: SUCCESS_NOTIFICATION,
  notification,
})

const newWarningNotification = notification => ({
  type: WARNING_NOTIFICATION,
  notification,
})

const newErrorNotification = notification => ({
  type: ERROR_NOTIFICATION,
  notification,
})

export const infoNotificationsReverse = () => ({
  type: INFO_NOTIFICATION_REVERSE,
})

export const warningNotificationsReverse = () => ({
  type: WARNING_NOTIFICATION_REVERSE,
})

export const errorNotificationsReverse = () => ({
  type: ERROR_NOTIFICATION_REVERSE,
})

export const infoNotificationSoundChange = sound => ({
  type: INFO_NOTIFICATION_SOUND_CHANGE,
  sound,
})

export const infoNotificationDurationChange = duration => ({
  type: INFO_NOTIFICATION_DURATION_CHANGE,
  duration,
})

export const successNotificationSoundChange = sound => ({
  type: SUCCESS_NOTIFICATION_SOUND_CHANGE,
  sound,
})

export const successNotificationDurationChange = duration => ({
  type: SUCCESS_NOTIFICATION_DURATION_CHANGE,
  duration,
})

export const warningNotificationSoundChange = sound => ({
  type: WARNING_NOTIFICATION_SOUND_CHANGE,
  sound,
})

export const warningNotificationDurationChange = duration => ({
  type: WARNING_NOTIFICATION_DURATION_CHANGE,
  duration,
})

export const errorNotificationSoundChange = sound => ({
  type: ERROR_NOTIFICATION_SOUND_CHANGE,
  sound,
})

export const errorNotificationDurationChange = duration => ({
  type: ERROR_NOTIFICATION_DURATION_CHANGE,
  duration,
})

export const notification = notification => dispatch => {
  switch (notification.type) {
    case 'info':
      dispatch(newInfoNotification(notification))
      break

    case 'success':
      dispatch(newSuccessNotification(notification))
      break

    case 'warning':
      dispatch(newWarningNotification(notification))
      break

    case 'error':
      dispatch(newErrorNotification(notification))
      break

    default:
      break
  }
}
