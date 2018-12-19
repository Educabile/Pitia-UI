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

  render() {
    const { loggedIn, username, email } = this.state

    return (
      <Layout loggedIn={loggedIn} username={username} email={email}>
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={() => <Dashboard loggedIn={this.state.loggedIn} />}
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
