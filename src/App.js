import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Layout from 'hoc/Layout.js'
import Dashboard from 'containers/Dashboard/Dashboard'
import Networks from 'containers/Networks/Networks'
import Network from 'containers/Network/Network'
import Login from 'containers/Login/Login'
import Settings from 'containers/Settings/Settings'

class App extends Component {
  state = {
    loggedIn: true,
    username: 'Mario Rossi',
    email: 'mario.rossi@email.it',
    infoEventMock: [
      {
        type: 'newNetwork',
        content: "E' stata creata una nuova rete: `Network Placeholder`",
        date: '2018-09-12 10:06 PM',
      },
      {
        type: 'newNode',
        content: "E' stato creato un nuovo nodo: `Node Placeholder`",
        date: '2018-19-12 10:06 AM',
      },
    ],
  }

  logIn = () => {
    this.setState({
      loggedIn: true,
    })
  }

  updateUsername = username => {
    this.setState({
      username,
    })
  }

  updateEmail = email => {
    this.setState({
      email,
    })
  }

  addInfoEvent = event => {
    this.setState(({ infoEventMock }) => {
      infoEventMock.unshift(event)

      return {
        infoEventMock,
      }
    })
  }

  render() {
    const { loggedIn, username, email } = this.state

    return (
      <Layout
        loggedIn={loggedIn}
        username={username}
        email={email}
        addInfoEvent={this.addInfoEvent}>
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={() => (
              <Dashboard loggedIn={this.state.loggedIn} infoEventMock={this.state.infoEventMock} />
            )}
          />
          <Route path="/networks/" exact component={Networks} />
          <Route path="/networks/:networkId" exact component={Network} />
          <Route
            path="/settings"
            exact
            render={() => (
              <Settings
                username={username}
                email={email}
                updateEmail={this.updateEmail}
                updateUsername={this.updateUsername}
              />
            )}
          />
          <Route
            path="/login"
            exact
            render={() => <Login loggedIn={this.state.loggedIn} logIn={this.logIn} />}
          />
          <Redirect to="/dashboard" />
        </Switch>
      </Layout>
    )
  }
}

export default withRouter(App)
