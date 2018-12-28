import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'class-names'
import { Icon } from '@mdi/react'
import { mdiMenu } from '@mdi/js'
import { Breadcrumb } from 'react-materialize'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
  componentDidMount() {
    const { options } = this.props

    if (typeof M !== 'undefined') {
      this.instance = window.M.Sidenav.init(this._sidenav, options)
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy()
    }
  }

  render() {
    const {
      children,
      brand,
      className,
      extendWith,
      fixed,
      fixedSidenav,
      alignLinks,
      centerLogo,
      history: {
        location: { pathname },
      },
      history,
      loggedIn,
    } = this.props

    const brandClasses = cx({
      'brand-logo': true,
      center: centerLogo,
    })

    const breadcrumbs = pathname.split('/').slice(1)

    // breadcrumbs[0] = <Link to={`/${breadcrumbs[0].props.children}`}>{breadcrumbs[0]}</Link>

    const navCSS = cx({ 'nav-extended': extendWith }, className)

    const navMobileCSS = cx('hide-on-med-and-down', 'hide-on-med-and-up', [alignLinks])

    const links = (
      <>
        {brand ? (
          <li>
            {cloneElement(brand, {
              className: cx(brand.props.className, brandClasses),
              style: {
                pointerEvents: 'none',
              },
            })}
          </li>
        ) : null}
        {loggedIn && Children.map(children, (link, index) => <li key={index}>{link}</li>)}
      </>
    )
    let navbar = (
      <nav className={navCSS}>
        <div className="nav-wrapper">
          <a
            href="#!"
            data-target="mobile-nav"
            className="sidenav-trigger show-on-medium-and-down hide-on-med-and-up">
            <Icon
              path={mdiMenu}
              size="2.5rem"
              color="white"
              style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
            />
          </a>
          <Breadcrumb>
            {breadcrumbs.map((breadcrumb, index) => (
              <span
                key={index}
                style={{ textTransform: 'capitalize', cursor: 'pointer' }}
                onClick={() => {
                  if (index > 0) {
                    history.push(`/${breadcrumbs.join('/')}`)
                  } else {
                    history.push(`/${breadcrumbs[0]}`)
                  }
                }}>
                {breadcrumb.replace(/-/g, ' ')}
              </span>
            ))}
          </Breadcrumb>
          <ul className={navMobileCSS}>{links}</ul>
        </div>
        {extendWith && <div className="nav-content">{extendWith}</div>}
      </nav>
    )

    if (fixed) {
      navbar = <div className="navbar-fixed">{navbar}</div>
    }

    return (
      <>
        {navbar}

        <ul
          id="mobile-nav"
          className={cx('sidenav', [alignLinks], {
            'sidenav-fixed': fixedSidenav,
            'z-depth-3': fixedSidenav,
          })}
          ref={ul => {
            this._sidenav = ul
          }}>
          {links}
        </ul>
      </>
    )
  }
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool,
  brand: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  extendWith: PropTypes.node,
  history: PropTypes.object,
  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: PropTypes.oneOf(['left', 'right']),
  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: PropTypes.bool,
  /**
   * Makes the navbar fixed
   */
  fixed: PropTypes.bool,
  fixedSidenav: PropTypes.bool,
  /**
   * Options hash for the sidenav.
   * More info: https://materializecss.com/sidenav.html#options
   */
  options: PropTypes.shape({
    // Side of screen on which Sidenav appears.
    edge: PropTypes.oneOf(['left', 'right']),
    // Allow swipe gestures to open / close Sidenav.
    draggable: PropTypes.bool,
    // Length in ms of enter transition.
    inDuration: PropTypes.number,
    // Length in ms of exit transition.
    outDuration: PropTypes.number,
    // Function called when sidenav starts entering.
    onOpenStart: PropTypes.func,
    // Function called when sidenav finishes entering.
    onOpenEnd: PropTypes.func,
    // Function called when sidenav starts exiting.
    onCloseStart: PropTypes.func,
    // Function called when sidenav finishes exiting.
    onCloseEnd: PropTypes.func,
    // Prevent page from scrolling while sidenav is open.
    preventScrolling: PropTypes.bool,
  }),
}

Navbar.defaultProps = {
  options: {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
  },
}

export default withRouter(Navbar)
