import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowUp, mdiViewDashboard, mdiAccessPointNetwork, mdiTune } from '@mdi/js'
import ScrollToTop from 'react-scroll-up'
import { NavHashLink as Link } from 'react-router-hash-link'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { logoEducabileIoTPng } from 'assets/img'
import Picture from '@cloudpower97/react-progressive-picture'
import { scrollTo } from 'libs/utils'

const offset = 56

class Layout extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar
            className="z-depth-3 center"
            fixed
            fixedSidenav={this.props.loggedIn}
            lignLinks="right">
            <li>
              <div
                className="user-view"
                style={{
                  backgroundColor: 'rgba(0,0,0, .5)',
                }}>
                <div className="background">
                  <img src="https://images.idgesg.net/images/article/2017/10/wireless_network_internet_of_things_iot_thinkstock_853701554_3x2-100740688-large.jpg" />
                </div>
                <a href="#user">
                  <img
                    className="circle"
                    src="http://heartlandpreciousmetals.com/wp-content/uploads/2014/06/person-placeholder.jpg"
                  />
                </a>
                <a href="#name">
                  <span className="white-text name">John Doe</span>
                </a>
                <a href="#email">
                  <span className="white-text email">jdandturk@gmail.com</span>
                </a>
              </div>
            </li>
            <Link
              className="sidenav-close"
              to="/dashboard"
              scroll={el => scrollTo(el, offset)}
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
              }}>
              <Icon path={mdiViewDashboard} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('dashboard')}
              </span>
            </Link>
            <Link
              className="sidenav-close"
              to="/network"
              scroll={el => scrollTo(el, offset)}
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
              }}>
              <Icon path={mdiAccessPointNetwork} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('network')}
              </span>
            </Link>
            <Link
              className="sidenav-close"
              to="/settings"
              scroll={el => scrollTo(el, offset)}
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                alignItems: 'center',
                width: '100%',
              }}>
              <Icon path={mdiTune} size={1.5} color="#1565c0" />
              <span
                style={{
                  marginLeft: '1em',
                }}>
                {this.props.t('impostazioni')}
              </span>
            </Link>
          </Navbar>
        </header>
        <main>{this.props.children}</main>
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
        <ScrollToTop
          showUnder={800}
          style={{
            zIndex: '2',
          }}>
          <Button
            floating
            large
            className="blueGradient hoverable"
            waves="light"
            style={{
              bottom: 64,
              right: 20,
              position: 'fixed',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon path={mdiArrowUp} size={1.125} color="white" />
          </Button>
        </ScrollToTop>
        <footer className="blue darken-3">
          <div className="row">
            <p className="center">{this.props.t('footer:copyright')}</p>
          </div>
        </footer>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
}

export default withNamespaces('footer')(Layout)
