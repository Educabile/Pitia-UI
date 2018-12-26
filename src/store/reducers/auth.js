import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START, CHANGE_EMAIL, CHANGE_USERNAME } from '../actions/auth'

const initialState = {
  auth: false,
  nameSurname: '',
  email: '',
  error: '',
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      }

    case AUTH_SUCCESS:
      return {
        ...state,
        auth: true,
        loading: false,
        email: action.email,
        nameSurname: action.nameSurname,
      }

    case AUTH_FAIL:
      return {
        ...state,
        // FIXME: Return a real error from BE whenever we have it
        loading: false,
        error: action.error,
      }

    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      }

    case CHANGE_USERNAME:
      return {
        ...state,
        nameSurname: action.username,
      }

    default:
      return state
  }
}
