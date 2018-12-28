import React, { Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Layout from 'hoc/Layout'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Spinner from 'components/Spinner'

const Dashboard = lazy(() => import('containers/Dashboard'))
const Networks = lazy(() => import('containers/Networks'))
const Network = lazy(() => import('containers/Network'))
const Login = lazy(() => import('containers/Login'))
const Settings = lazy(() => import('containers/Settings'))

const App = ({ auth: { auth } }) => (
  <Layout loggedIn={auth}>
    {auth ? (
      <Switch>
        <Route
          path="/dashboard"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          )}
        />
        <Route
          path="/networks/"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Networks />
            </Suspense>
          )}
        />
        <Route
          path="/networks/:networkId"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Network />
            </Suspense>
          )}
        />
        <Route
          path="/settings/:section?"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Settings />
            </Suspense>
          )}
        />
        <Redirect to="/dashboard" />
      </Switch>
    ) : (
      <Switch>
        <Route
          path="/login"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          )}
        />
        <Redirect to="/login" />
      </Switch>
    )}
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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(App)
