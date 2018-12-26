import React from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Layout from 'hoc/Layout'
import Dashboard from 'containers/Dashboard'
import Networks from 'containers/Networks'
import Network from 'containers/Network'
import Login from 'containers/Login'
import Settings from 'containers/Settings'
import { connect } from 'react-redux'

const App = ({ auth: { auth, nameSurname, email } }) => (
  <Layout loggedIn={auth} username={nameSurname} email={email}>
    <Switch>
      <Route
        path="/dashboard"
        exact
        render={() => (auth ? <Dashboard /> : <Redirect to="/login" />)}
      />
      <Route
        path="/networks/"
        exact
        render={() => (auth ? <Networks /> : <Redirect to="/login" />)}
      />
      <Route
        path="/networks/:networkId"
        exact
        render={() => (auth ? <Network /> : <Redirect to="/login" />)}
      />
      <Route
        path="/settings/:section?"
        exact
        render={() => (auth ? <Settings /> : <Redirect to="/login" />)}
      />
      <Route path="/login" exact component={Login} />
      <Redirect to="/login" />
    </Switch>
  </Layout>
)

App.propTypes = {
  auth: PropTypes.shape({
    auth: PropTypes.bool,
    nameSurname: PropTypes.string,
    email: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
}

const mapStateToProps = ({ auth }) => ({
  auth,
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
)
