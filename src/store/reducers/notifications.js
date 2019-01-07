import {
  INFO_NOTIFICATION,
  INFO_NOTIFICATION_REVERSE,
  INFO_NOTIFICATION_SOUND_CHANGE,
  INFO_NOTIFICATION_DURATION_CHANGE,
  SUCCESS_NOTIFICATION,
  SUCCESS_NOTIFICATION_SOUND_CHANGE,
  SUCCESS_NOTIFICATION_DURATION_CHANGE,
  WARNING_NOTIFICATION,
  WARNING_NOTIFICATION_REVERSE,
  WARNING_NOTIFICATION_SOUND_CHANGE,
  WARNING_NOTIFICATION_DURATION_CHANGE,
  ERROR_NOTIFICATION,
  ERROR_NOTIFICATION_REVERSE,
  ERROR_NOTIFICATION_SOUND_CHANGE,
  ERROR_NOTIFICATION_DURATION_CHANGE,
} from '../actions/notifications'

const initialState = {
  infoNotifications: {
    sound: 1,
    duration: 4,
    notifications: [],
    desc: true,
  },
  successNotifications: {
    sound: 1,
    duration: 4,
    notifications: [],
    desc: true,
  },
  warningNotifications: {
    sound: 15,
    duration: 6,
    desc: true,
    notifications: [
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
  },
  errorNotifications: {
    sound: 18,
    duration: 8,
    desc: true,
    notifications: [
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
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INFO_NOTIFICATION:
    case SUCCESS_NOTIFICATION:
      return {
        ...state,
        infoNotifications: {
          ...state.infoNotifications,
          notifications: state.infoNotifications.desc
            ? [action.notification, ...state.infoNotifications.notifications]
            : [...state.infoNotifications.notifications, action.notification],
        },
      }

    case INFO_NOTIFICATION_REVERSE:
      return {
        ...state,
        infoNotifications: {
          ...state.infoNotifications,
          notifications: [...state.infoNotifications.notifications].reverse(),
          desc: !state.infoNotifications.desc,
        },
      }

    case INFO_NOTIFICATION_SOUND_CHANGE:
      return {
        ...state,
        infoNotifications: {
          ...state.infoNotifications,
          sound: action.sound,
        },
      }

    case INFO_NOTIFICATION_DURATION_CHANGE:
      return {
        ...state,
        infoNotifications: {
          ...state.infoNotifications,
          duration: action.duration,
        },
      }

    case SUCCESS_NOTIFICATION_SOUND_CHANGE:
      return {
        ...state,
        successNotifications: {
          ...state.infoNotifications,
          sound: action.sound,
        },
      }

    case SUCCESS_NOTIFICATION_DURATION_CHANGE:
      return {
        ...state,
        successNotifications: {
          ...state.infoNotifications,
          duration: action.duration,
        },
      }

    case WARNING_NOTIFICATION:
      return {
        ...state,
        warningNotifications: {
          ...state.infoNotifications,
          notifications: state.warningNotifications.desc
            ? [action.notification, ...state.warningNotifications.notifications]
            : [...state.warningNotifications.notifications, action.notification],
        },
      }

    case WARNING_NOTIFICATION_REVERSE:
      return {
        ...state,
        warningNotifications: {
          ...state.warningNotifications,
          desc: !state.warningNotifications.desc,
          notifications: [...state.warningNotifications.notifications].reverse(),
        },
      }

    case WARNING_NOTIFICATION_SOUND_CHANGE:
      return {
        ...state,
        warningNotifications: {
          ...state.infoNotifications,
          sound: action.sound,
        },
      }

    case WARNING_NOTIFICATION_DURATION_CHANGE:
      return {
        ...state,
        warningNotifications: {
          ...state.infoNotifications,
          duration: action.duration,
        },
      }

    case ERROR_NOTIFICATION:
      return {
        ...state,
        errorNotifications: {
          ...state.infoNotifications,
          notifications: state.errorNotifications.desc
            ? [action.notification, ...state.errorNotifications.notifications]
            : [...state.errorNotifications.notifications, action.notification],
        },
      }

    case ERROR_NOTIFICATION_REVERSE:
      return {
        ...state,
        errorNotifications: {
          ...state.infoNotifications,
          desc: !state.errorNotifications.desc,
          notifications: [...state.errorNotifications.notifications].reverse(),
        },
      }

    case ERROR_NOTIFICATION_SOUND_CHANGE:
      return {
        ...state,
        errorNotifications: {
          ...state.infoNotifications,
          sound: action.sound,
        },
      }

    case ERROR_NOTIFICATION_DURATION_CHANGE:
      return {
        ...state,
        successNotifications: {
          ...state.infoNotifications,
          duration: action.duration,
        },
      }

    default:
      return state
  }
}
