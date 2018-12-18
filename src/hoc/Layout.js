import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiViewDashboard, mdiLan, mdiTune, mdiBookOpen, mdiDomain } from '@mdi/js'
import { withRouter, Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Picture from '@cloudpower97/react-progressive-picture'
import NetworkModal from 'components/NetworksModal/NetworksModal'
import NodesModal from 'components/NodesModal/NodesModal'
import WidgetsModal from 'components/WidgetsModal/WidgetsModal'
import { profileBackground, profileBackgroundSqip, logoEducabileIoTPng } from 'assets/img'
import Avatar from 'react-avatar'
import { ToastContainer } from 'react-toastify'
class Layout extends Component {
  render() {
    const { history, username, email } = this.props
    return (
      <>
        <header>
          <Navbar className="z-depth-3 center" fixed fixedSidenav={this.props.loggedIn}>
            <div
              onClick={() => history.push('/user')}
              className="user-view"
              style={{
                backgroundColor: 'rgba(0,0,0, .5)',
              }}>
              <div className="background">
                <Picture src={profileBackground} placeholder={profileBackgroundSqip} />
              </div>
              <Avatar className="blueGradient" name={username} email={email} round size={70} />
              <span className="white-text name">{username}</span>
              <span className="white-text email">{email}</span>
            </div>
            <Button
              onClick={() => {
                history.push('/dashboard')
              }}
              flat
              large
              waves
              className="sidenav-close"
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
                borderRadius: 0,
              }}
              tooltip="Accedi alla tua dashboard"
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiViewDashboard} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('dashboard')}
              </span>
            </Button>
            <Button
              onClick={() => {
                history.push('/networks')
              }}
              flat
              large
              waves
              className="sidenav-close"
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
                borderRadius: 0,
              }}
              tooltip="Gestisci i tuoi networks"
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiLan} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('network')}
              </span>
            </Button>
            <Button
              onClick={() => {
                history.push('/assets')
              }}
              flat
              large
              waves
              className="sidenav-close"
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
                borderRadius: 0,
              }}
              tooltip="Gestisci i tuoi assets"
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiDomain} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('assets')}
              </span>
            </Button>
            <Button
              onClick={() => {
                history.push('/documentation')
              }}
              flat
              large
              waves
              className="sidenav-close"
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
                borderRadius: 0,
              }}
              tooltip="Consulta il manuale"
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiBookOpen} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('manuale')}
              </span>
            </Button>
            <Button
              className="sidenav-close waves-effect"
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
                borderRadius: 0,
              }}
              onClick={() => {
                history.push('/settings')
              }}
              flat
              large
              waves
              tooltip="Modifica le impostazioni"
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiTune} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('impostazioni')}
              </span>
            </Button>
          </Navbar>
        </header>
        <main>{this.props.children}</main>
        <NetworkModal />
        <NodesModal />
        <WidgetsModal />
        <ToastContainer
          style={{ top: 70 }}
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Link to="/dashboard">
          <Picture
            sources={[
              {
                srcSet: logoEducabileIoTPng,
                type: 'image/webp',
              },
              {
                srcSet: logoEducabileIoTPng,
                type: 'image/png',
              },
            ]}
            id="footer-logo"
            className="hide-on-med-and-down"
            alt="Logo Educabile Srl"
            blur={0}
            width={225}
            height={141}
          />
        </Link>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
}

export default withRouter(withNamespaces('footer')(Layout))
