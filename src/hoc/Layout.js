import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Button from 'components/Button/Button'
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
import { ToastContainer, toast } from 'react-toastify'
import { Offline, Online } from 'react-detect-offline'
import { ErrorToast, SuccessToast } from 'components/Toast'
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    t: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    addInfoEvent: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }

  state = {
    errorToast: null,
  }

  render() {
    const { errorToast } = this.state
    const { children, t, history, username, email, addInfoEvent, loggedIn } = this.props
    return (
      <>
        <header>
          <Navbar className="z-depth-3 center" fixed fixedSidenav={loggedIn}>
            <div
              onClick={() => history.push('settings/account')}
              className="user-view"
              style={{
                backgroundColor: 'rgba(0,0,0, .5)',
                cursor: 'pointer',
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
              tooltip={t('common:visualizzaDashboard')}
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiViewDashboard} size={1.5} color="#1565C0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {t('common:dashboard')}
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
              tooltip={t('common:gestisciNetworks')}
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiLan} size={1.5} color="#1565C0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {t('common:network')}
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
              tooltip={t('common:gestisciAssets')}
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiDomain} size={1.5} color="#1565C0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {t('assets')}
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
              tooltip={t('common:consultaManuale')}
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiBookOpen} size={1.5} color="#1565C0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {t('common:manuale')}
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
              tooltip={t('common:modificaImpostazioni')}
              tooltipOptions={{
                position: 'right',
                enterDelay: 1000,
              }}>
              <Icon path={mdiTune} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {t('common:impostazioni')}
              </span>
            </Button>
          </Navbar>
        </header>
        <main>{children}</main>
        <NetworkModal addInfoEvent={addInfoEvent} />
        <NodesModal addInfoEvent={addInfoEvent} />
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
        <Online
          onChange={online => {
            if (online) {
              SuccessToast({
                content: t('notifications:connessioneRistabilita'),
              })

              toast.dismiss(errorToast)
            }
          }}
        />
        <Offline
          onChange={online => {
            !online &&
              this.setState({
                errorToast: ErrorToast({
                  content: t('notifications:connessioneInterrotta'),
                  autoClose: false,
                }),
              })
          }}
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

export default withRouter(withNamespaces(['notifications'])(Layout))
