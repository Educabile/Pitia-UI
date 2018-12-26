import {
  INFO_NOTIFICATION,
  SUCCESS_NOTIFICATION,
  WARNING_NOTIFICATION,
  ERROR_NOTIFICATION,
} from '../actions/notifications'

const initialState = {
  infoNotifications: [],
  warningNotifications: [],
  errorNotifications: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INFO_NOTIFICATION:
    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        infoNotifications: [action.notification, ...state.infoNotifications],
      }

    case WARNING_NOTIFICATION:
      return {
        ...state,
        warningNotifications: [action.notification, ...state.warningNotifications],
      }

    case ERROR_NOTIFICATION:
      return {
        ...state,
        errorNotifications: [action.notification, ...state.errorNotifications],
      }

    default:
      return state
  }
}
