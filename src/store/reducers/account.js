import {
  ACCOUNT_INIT,
  ACCOUNT_CHANGE_EMAIL,
  ACCOUNT_CHANGE_USERNAME,
  ACCOUNT_CHANGE_LANGUAGE,
} from 'actions/account'
import i18n from 'src/i18n'

const initialState = {
  email: '',
  nameSurname: '',
  language: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INIT:
      i18n.changeLanguage(action.language)
      return {
        ...state,
        email: action.email,
        nameSurname: action.nameSurname,
        language: action.language,
      }

    case ACCOUNT_CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      }

    case ACCOUNT_CHANGE_USERNAME:
      return {
        ...state,
        nameSurname: action.nameSurname,
      }

    case ACCOUNT_CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      }

    default:
      return state
  }
}
