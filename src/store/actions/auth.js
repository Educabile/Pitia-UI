import { fetchNetworks } from 'actions/networks'
import { fetchWidgets } from 'actions/widgets'
import { accountInit } from 'actions/account'
export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_USERNAME = 'CHANGE_USERNAME'

const authStart = () => ({
  type: AUTH_START,
})

const authSuccess = () => ({
  type: AUTH_SUCCESS,
})

const authFail = error => ({
  type: AUTH_FAIL,
  error,
})

export const auth = (email, password) => dispatch => {
  dispatch(authStart())

  setTimeout(() => {
    if (email === 'claudio.cortese@outlook.it') {
      if (password === '1234') {
        dispatch(authSuccess())
        dispatch(accountInit(email, 'Claudio Cortese', 'en'))
        dispatch(fetchNetworks())
        dispatch(fetchWidgets())
      } else {
        dispatch(authFail('Invalid Password'))
      }
    } else {
      dispatch(authFail('Invalid Credentials'))
    }
  }, 1000)
}
