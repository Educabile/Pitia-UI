export const WIDGET_ADD = 'WIDGET_ADD'
export const WIDGET_REMOVE = 'WIDGET_REMOVE'
export const WIDGET_INIT_START = 'WIDGET_INIT_START'
export const WIDGET_INIT_SUCCESS = 'WIDGET_INIT_SUCCESS'
export const WIDGET_INIT_FAIL = 'WIDGET_INIT_FAIL'

export const widgetAdd = widget => ({
  type: WIDGET_ADD,
  widget,
})

export const widgetRemove = widget => ({
  type: WIDGET_REMOVE,
  widget,
})

export const widgetInitStart = () => ({
  type: WIDGET_INIT_START,
})

export const widgetInitSuccess = widgets => ({
  type: WIDGET_INIT_SUCCESS,
  widgets,
})

export const widgetInitFail = error => ({
  type: WIDGET_INIT_FAIL,
  error,
})

export const fetchWidgets = () => dispatch => {
  dispatch(widgetInitStart())

  setTimeout(() => {
    // if (Math.random() >= 0.5) {
    dispatch(
      widgetInitSuccess([
        {
          type: 'glance',
        },
      ])
    )

    // } else {
    //   dispatch(widgetInitFail('Errore nel fetching dei dati'))
    // }
  }, 3000)
}
