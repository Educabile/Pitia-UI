import React from 'react'
import Chart from 'components/Chart/Chart'
import { Row, Col, Card, Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiDelete, mdiPencil } from '@mdi/js'

class App extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: 'line',
          label: 'BTC-USD',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'green',
          pointBackgroundColor: 'yellow',
          pointBorderColor: 'orange',
          borderWidth: '2',
          lineTension: 0.45,
          data: [],
        },
      ],
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
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

    this.ws = new WebSocket('wss://ws-feed.gdax.com')

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
    return (
      <Row>
        <Col s={12} m={6} xl={4}>
          <Link
            to={{
              pathname: 'network/placeholder-network-name',
              search: '?utm=your+face',
              state: { wss: 'wss://ws-feed.gdax.com' },
            }}>
            <Card
              textClassName="white-text"
              title="Placeholder network name"
              actions={[
                <Button key="mod" floating flat tooltip="Modifica">
                  <Icon path={mdiPencil} size={1.25} />
                </Button>,
                <Button key="del" floating flat tooltip="Elimina">
                  <Icon path={mdiDelete} size={1.25} />
                </Button>,
              ]}>
              <Chart data={this.state.lineChartData} options={this.state.lineChartOptions} />
            </Card>
          </Link>
        </Col>
      </Row>
    )
  }
}

export default App
