import { combineReducers } from 'redux'

import account from './account'
import auth from './auth'
import networks from './networks'
import notifications from './notifications'
import widgets from './widgets'

export default combineReducers({
  account,
  auth,
  networks,
  notifications,
  widgets,
})
