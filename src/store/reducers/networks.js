import {
  NETWORK_INIT_START,
  NETWORK_INIT_SUCCESS,
  NETWORK_INIT_FAIL,
  NETWORK_ADD,
} from '../actions/networks'

const initialState = {
  loading: true,
  networks: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NETWORK_INIT_START:
      return state

    case NETWORK_INIT_SUCCESS:
      return {
        ...state,
        loading: false,
        networks: state.networks.concat(action.networks),
      }

    case NETWORK_INIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    case NETWORK_ADD:
      return {
        ...state,
        networks: state.networks.concat(action.network),
      }
    default:
      return state
  }
}
