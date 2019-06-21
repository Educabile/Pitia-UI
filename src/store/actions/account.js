import client from 'src/feathers'
export const ACCOUNT_INIT = 'ACCOUNT_INIT'
export const ACCOUNT_CHANGE_LANGUAGE = 'ACCOUNT_CHANGE_LANGUAGE'
export const ACCOUNT_CHANGE_EMAIL_START = 'ACCOUNT_CHANGE_EMAIL_START'
export const ACCOUNT_CHANGE_EMAIL_SUCCESS = 'ACCOUNT_CHANGE_EMAIL_SUCCESS'
export const ACCOUNT_CHANGE_EMAIL_FAIL = 'ACCOUNT_CHANGE_EMAIL_FAIL'
export const ACCOUNT_CHANGE_USERNAME = 'ACCOUNT_CHANGE_USERNAME'

export const accountInit = (email, nameSurname, language, x) => ({
  type: ACCOUNT_INIT,
  email,
  nameSurname,
  language,
  x,
})

export const changeEmailStart = () => ({
  type: ACCOUNT_CHANGE_EMAIL_START,
})

export const changeEmailError = error => ({
  type: ACCOUNT_CHANGE_EMAIL_FAIL,
  error,
})

export const changeEmailSuccess = email => ({
  type: ACCOUNT_CHANGE_EMAIL_SUCCESS,
  email,
})

export const changeEmail = (currentEmail, newEmail) => dispatch => {
  dispatch(changeEmailStart())

  client
    .service('users')
    .patch('5d0b548c892d6f31a60560cf', { email: newEmail })
    .then(d => {
      console.log(d)
      dispatch(changeEmailSuccess('ok'))
    })
    .catch(error => {
      console.log(error)
      dispatch(changeEmailError(error))
    })
}

export const changeUsername = nameSurname => ({
  type: ACCOUNT_CHANGE_USERNAME,
  nameSurname,
})

export const changeLanguage = language => ({
  type: ACCOUNT_CHANGE_LANGUAGE,
  language,
})
