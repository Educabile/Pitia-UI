import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'

class Chart extends Component {
  static propTypes = {
    wss: PropTypes.string.isRequired,
  }

  static defaultProps = {
    wss: '',
  }

  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: 'line',
          label: 'BTC-USD',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#1565c0',
          pointBackgroundColor: '#9c27b0',
          pointBorderColor: '#9c27b0',
          borderWidth: '2',
          lineTension: 0.45,
          data: [],
        },
      ],
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        enabled: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
        ],
      },
    },
  }

  componentDidMount() {
    const subscribe = {
      type: 'subscribe',
      channels: [
        {
          name: 'ticker',
          product_ids: ['BTC-USD'],
        },
      ],
    }

    this.ws = new WebSocket(this.props.wss)

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe))
    }

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data)
      if (value.type !== 'ticker') {
        return
      }

      const oldBtcDataSet = this.state.lineChartData.datasets[0]
      const newBtcDataSet = { ...oldBtcDataSet }
      newBtcDataSet.data.push(value.price)

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newBtcDataSet],
        labels: this.state.lineChartData.labels.concat(new Date().toLocaleTimeString()),
      }
      this.setState({ lineChartData: newChartData })
    }
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return <Line width={452} height={226} data={this.state.lineChartData} />
  }
}
export default Chart
