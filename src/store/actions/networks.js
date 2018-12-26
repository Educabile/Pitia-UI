export const NETWORK_ADD = 'NETWORK_ADD'
export const NETWORK_INIT_START = 'NETWORK_INIT_START'
export const NETWORK_INIT_SUCCESS = 'NETWORK_INIT_SUCCESS'
export const NETWORK_INIT_FAIL = 'NETWORK_INIT_FAIL'

export const networkAdd = network => ({
  type: NETWORK_ADD,
  network,
})

export const networkInitStart = () => ({
  type: NETWORK_INIT_START,
})

export const networkInitSuccess = networks => ({
  type: NETWORK_INIT_SUCCESS,
  networks,
})

export const networkInitFail = error => ({
  type: NETWORK_INIT_FAIL,
  error,
})

export const fetchNetworks = () => dispatch => {
  dispatch(networkInitStart())

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      dispatch(
        networkInitSuccess([
          {
            networkName: 'First Network Placeholder',
            networkPosition: 'Naples, Italy',
            networkIP: '143.225.48.253',
            networkDescription: 'Lorem ipsum dolorem sit amet',
            wss: 'wss://ws-feed.gdax.com',
          },
        ])
      )
    } else {
      dispatch(networkInitFail('Errore nel fetching dei dati'))
    }
  }, 3000)
}
