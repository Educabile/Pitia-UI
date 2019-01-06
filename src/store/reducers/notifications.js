import {
  INFO_NOTIFICATION,
  INFO_NOTIFICATION_REVERSE,
  SUCCESS_NOTIFICATION,
  WARNING_NOTIFICATION,
  WARNING_NOTIFICATION_REVERSE,
  ERROR_NOTIFICATION,
  ERROR_NOTIFICATION_REVERSE,
} from '../actions/notifications'

const initialState = {
  infoNotifications: [],
  warningNotifications: [
    {
      type: 'success',
      action: 'newWidget',
      content: 'Widget `Network` aggiunto',
      details: '..',
      date: 1546191900808,
    },
    {
      type: 'success',
      action: 'newWidget',
      content: 'Widget `Creazione Rapida` aggiunto',
      details: '..',
      date: 1546191900278,
    },
    {
      type: 'success',
      action: 'newWidget',
      content: "Widget `A colpo d'occhio` aggiunto",
      details: '..',
      date: 1546191899863,
    },
  ],
  errorNotifications: [
    {
      type: 'success',
      action: 'newWidget',
      content: 'Widget `Network` aggiunto',
      details: '..',
      date: 1546191900808,
    },
    {
      type: 'success',
      action: 'newWidget',
      content: 'Widget `Creazione Rapida` aggiunto',
      details: '..',
      date: 1546191900278,
    },
    {
      type: 'success',
      action: 'newWidget',
      content: "Widget `A colpo d'occhio` aggiunto",
      details: '..',
      date: 1546191899863,
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INFO_NOTIFICATION:
    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        infoNotifications: [action.notification, ...state.infoNotifications],
      }

    case INFO_NOTIFICATION_REVERSE:
      return {
        ...state,
        infoNotifications: [...state.infoNotifications].reverse(),
      }

    case WARNING_NOTIFICATION:
      return {
        ...state,
        warningNotifications: [action.notification, ...state.warningNotifications],
      }

    case WARNING_NOTIFICATION_REVERSE:
      return {
        ...state,
        warningNotifications: [...state.warningNotifications].reverse(),
      }

    case ERROR_NOTIFICATION:
      return {
        ...state,
        errorNotifications: [action.notification, ...state.errorNotifications],
      }

    case ERROR_NOTIFICATION_REVERSE:
      return {
        ...state,
        errorNotifications: [...state.errorNotifications].reverse(),
      }

    default:
      return state
  }
}
