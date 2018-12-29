import React from 'react'
import PropTypes from 'prop-types'
import { Collapsible } from 'react-materialize'
import CollapsibleItem from 'components/CollapsibleItem'
import Icon from '@mdi/react'
import { mdiPlus, mdiPlusNetwork, mdiGoogleNearby, mdiCodeTagsCheck } from '@mdi/js'
import Resizable from 're-resizable'
import Button from 'components/Button'
import { withNamespaces } from 'react-i18next'

const RapidCreation = ({ t, enableResize, disableHeader, hideHeader, disableContent }) => (
  <Resizable
    defaultSize={{
      width: 515,
      height: 300,
    }}
    minWidth={515}
    maxWidth={615}
    minHeight={213.25}
    snap={{ x: [515, 615] }}
    enable={enableResize}>
    <Collapsible>
      <CollapsibleItem
        className="white grey-text text-darken-4 flow-text"
        expanded
        header={
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiPlus} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }}>{t('creazioneRapida')}</span>
          </span>
        }
        disableHeader={disableHeader}
        disableContent={disableContent}
        hideHeader={hideHeader}>
        <Button
          flat
          onClick={() => {
            window.$('#networks-modal').modal('open')
          }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiPlusNetwork} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }}>{t('common:creaNetwork')}</span>
          </span>
        </Button>
        <hr />
        <Button
          flat
          onClick={() => {
            window.$('#nodes-modal').modal('open')
          }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiGoogleNearby} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }}>{t('common:aggiungiNodo')}</span>
          </span>
        </Button>
        <hr />
        <Button
          flat
          onClick={() => {
            window.$('#networks-modal').modal('open')
          }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}>
            <Icon path={mdiCodeTagsCheck} size={1.5} color="#1565c0" />
            <span style={{ marginLeft: '1em' }}>{t('common:aggiungiRegole')}</span>
          </span>
        </Button>
      </CollapsibleItem>
    </Collapsible>
  </Resizable>
)

RapidCreation.propTypes = {
  t: PropTypes.func.isRequired,
  enableResize: PropTypes.shape({
    bottom: PropTypes.bool,
    top: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }).isRequired,
  disableHeader: PropTypes.bool.isRequired,
  hideHeader: PropTypes.bool.isRequired,
  disableContent: PropTypes.bool.isRequired,
}

RapidCreation.defaultProps = {
  enableResize: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  disableHeader: false,
  hideHeader: false,
  disableContent: false,
}

export default withNamespaces(['widgets'])(RapidCreation)
