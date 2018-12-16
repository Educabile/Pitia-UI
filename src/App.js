import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Layout from 'hoc/Layout.js'
import Dashboard from 'containers/Dashboard/Dashboard'
import Networks from 'containers/Networks/Networks'
import Network from 'containers/Network/Network'
import Login from 'containers/Login/Login'

class App extends Component {
  state = {
    loggedIn: false,
  }

  logIn = () => {
    this.setState({
      loggedIn: true,
    })
  }

  render() {
    return (
      <Layout loggedIn={this.state.loggedIn}>
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={() => <Dashboard loggedIn={this.state.loggedIn} />}
          />
          <Route path="/networks/" exact component={Networks} />
          <Route path="/networks/:networkId" exact component={Network} />
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
