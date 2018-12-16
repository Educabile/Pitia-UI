import React from 'react'
import Chart from 'components/Chart/Chart'
import { Row, Col, Card } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiDelete, mdiPencil } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import { Redirect, Link } from 'react-router-dom'
import Resizable from 're-resizable'
import Button from 'components/Button/Button'

const Dashboard = ({ t, loggedIn }) =>
  !loggedIn ? (
    <Redirect to="/login" />
  ) : (
    <Row>
      <h1>Il mio network</h1>
      <Col>
        <Card>
          <p>Numero di network</p>
        </Card>
      </Col>
    </Row>
  )

export default withNamespaces()(Dashboard)
