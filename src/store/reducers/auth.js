import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from '../actions/auth'

const initialState = {
  auth: false,
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
      }

    case AUTH_FAIL:
      return {
        ...state,
        // FIXME: Return a real error from BE whenever we have it
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
