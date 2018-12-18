import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiViewDashboard, mdiAccessPointNetwork, mdiTune } from '@mdi/js'
import { withRouter, Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Picture from '@cloudpower97/react-progressive-picture'
import { scrollTo } from 'libs/utils'
import NetworkModal from 'components/NetworksModal/NetworksModal'
import NodesModal from 'components/NodesModal/NodesModal'
import { profileBackground, profileBackgroundSqip, logoEducabileIoTPng } from 'assets/img'
import Avatar from 'react-avatar'

const offset = 56

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
              <Avatar color="#1565C0" name={username} email={email} round size={70} />
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
              to="/dashboard"
              scroll={el => scrollTo(el, offset)}
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
              to="/networks"
              scroll={el => scrollTo(el, offset)}
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
              <Icon path={mdiAccessPointNetwork} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('network')}
              </span>
            </Button>
            <Button
              className="sidenav-close waves-effect"
              to="/settings"
              scroll={el => scrollTo(el, offset)}
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
