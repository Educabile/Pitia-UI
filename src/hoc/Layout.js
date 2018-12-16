import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Button } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowUp, mdiViewDashboard, mdiAccessPointNetwork } from '@mdi/js'
import ScrollToTop from 'react-scroll-up'
import { NavHashLink as Link } from 'react-router-hash-link'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { logoEducabileIoTPng } from 'assets/img'
import Picture from '@cloudpower97/react-progressive-picture'
import { scrollTo } from 'libs/utils'

const offset = 56

const Layout = ({ children, t }) => (
  <>
    <header>
      <Navbar className="z-depth-3 center" fixed alignLinks="right">
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
          <Icon path={mdiViewDashboard} size={1.5} />
          {t('dashboard')}
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
          <Icon path={mdiAccessPointNetwork} size={1.5} />
          {t('network')}
        </Link>
      </Navbar>
    </header>
    <main>{children}</main>
    <Link to="/#root">
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
    <ScrollToTop showUnder={800} style={{ zIndex: '2' }}>
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
        <p className="center">{t('footer:copyright')}</p>
      </div>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
}

export default withNamespaces(['navbar', 'footer'])(Layout)
