export const INFO_NOTIFICATION = 'INFO_NOTIFICATION'
export const INFO_NOTIFICATION_REVERSE = 'INFO_NOTIFICATION_REVERSE'
export const SUCCESS_NOTIFICATION = 'SUCCESS_NOTIFICATION'
export const WARNING_NOTIFICATION = 'WARNING_NOTIFICATION'
export const WARNING_NOTIFICATION_REVERSE = 'WARNING_NOTIFICATION_REVERSE'
export const ERROR_NOTIFICATION = 'ERROR_NOTIFICATION'
export const ERROR_NOTIFICATION_REVERSE = 'ERROR_NOTIFICATION_REVERSE'

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
