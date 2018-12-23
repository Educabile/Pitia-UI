import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Collapsible, CollapsibleItem } from 'react-materialize'
import Picture from '@cloudpower97/react-progressive-picture'
import { withNamespaces } from 'react-i18next'
import { logoEducabileIoTPng } from 'assets/img'

const Informations = ({ t }) => (
  <div
    className="grey lighten-4"
    style={{
      minHeight: 'calc(100vh - 56px - 48px)',
      margin: '0 -0.75rem',
    }}>
    <Row
      style={{
        paddingTop: '15vh',
        marginBottom: 0,
      }}>
      <Col s={12} m={6} className="push-m3">
        <Card className="rounded hoverable flow-text">
          <Row>
            <Col s={12} className="center">
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
                className="hide-on-med-and-down"
                alt="Logo Educabile Srl"
                blur={0}
                width={225}
                height={141}
              />
              <h2>Pitia v0.1.0</h2>
            </Col>

            <Col s={12}>
              <Collapsible accordion>
                <CollapsibleItem header="EULA">Lorem ipsum dolor sit amet.</CollapsibleItem>
                <CollapsibleItem header="Second" icon="place">
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header="Third" icon="whatshot">
                  Lorem ipsum dolor sit amet.
                </CollapsibleItem>
              </Collapsible>
              <p className="center">{t('common:copyright')}</p>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
)

Informations.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces(['settings'])(Informations)
