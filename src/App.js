import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Layout from 'hoc/Layout.js'
import Dashboard from 'containers/Dashboard/Dashboard'
import Network from 'containers/Network/Network'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/network/:networkId" component={Network} />
          <Redirect to="/dashboard" />
        </Switch>
      </Layout>
    )
  }
}

export default withRouter(App)
