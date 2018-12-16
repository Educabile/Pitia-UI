import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Card, Button } from 'react-materialize'
import { Icon } from '@mdi/react'
import { mdiAccount, mdiLogin } from '@mdi/js'
import Style from './Login.module.css'

const Login = ({ loggedIn, logIn }) =>
  loggedIn ? (
    <Redirect to="/dashboard" />
  ) : (
    <Row className={Style.Login}>
      <Col>
        <Card className="rounded hoverable">
          <Icon path={mdiAccount} size={5} color="#1565c0" className="center-block" />
          <Row>
            <Input s={12} label="Username" />
            <Input type="password" label="Password" s={12} />
            <div className="center">
              <Button
                className="hoverable blue darken-3 white-text"
                waves
                onClick={logIn}
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <span style={{ marginRight: '1em' }}>Login</span>
                <Icon path={mdiLogin} size={1} color="white" />
              </Button>
            </div>
          </Row>
        </Card>
      </Col>
    </Row>
  )

Login.propTypes = {}

export default Login
