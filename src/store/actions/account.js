export const ACCOUNT_INIT = 'ACCOUNT_INIT'
export const ACCOUNT_CHANGE_LANGUAGE = 'ACCOUNT_CHANGE_LANGUAGE'
export const ACCOUNT_CHANGE_EMAIL = 'ACCOUNT_CHANGE_EMAIL'
export const ACCOUNT_CHANGE_USERNAME = 'ACCOUNT_CHANGE_USERNAME'

export const accountInit = (email, nameSurname, language) => ({
  type: ACCOUNT_INIT,
  email,
  nameSurname,
  language,
})

export const changeEmail = email => ({
  type: ACCOUNT_CHANGE_EMAIL,
  email,
})

export const changeUsername = nameSurname => ({
  type: ACCOUNT_CHANGE_USERNAME,
  nameSurname,
})

export const changeLanguage = language => ({
  type: ACCOUNT_CHANGE_LANGUAGE,
  language,
})
