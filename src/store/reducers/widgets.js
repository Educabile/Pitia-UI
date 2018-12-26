import {
  WIDGET_ADD,
  WIDGET_REMOVE,
  WIDGET_INIT_START,
  WIDGET_INIT_SUCCESS,
  WIDGET_INIT_FAIL,
} from '../actions/widgets'

const initialState = {
  loading: true,
  widgets: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WIDGET_INIT_START:
      return state

    case WIDGET_INIT_SUCCESS:
      return {
        ...state,
        loading: false,
        widgets: state.widgets.concat(action.widgets),
      }

    case WIDGET_INIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    case WIDGET_ADD:
      return {
        ...state,
        widgets: state.widgets.concat(action.widget),
      }

    case WIDGET_REMOVE:
      return state.concat(action.widget)

    default:
      return state
  }
}
