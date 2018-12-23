import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import { mdiAccessPointNetwork, mdiKeyboardTab } from '@mdi/js'
import { TimelineEvent } from 'react-event-timeline'
import TimeAgo from 'react-timeago'
import Button from 'components/Button'
import italianStrings from 'react-timeago/lib/language-strings/it'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { withRouter } from 'react-router-dom'
const formatter = buildFormatter(italianStrings)

const NewNode = ({ event, history }) => (
  <TimelineEvent
    buttons={
      <Button
        className="white-text btn-small"
        flat
        waves
        onClick={() => history.push('/networks')}
        tooltip="Visualizza l'evento"
        tooltipOptions={{
          position: 'left',
          enterDelay: 250,
        }}>
        <Icon path={mdiKeyboardTab} size={1.2} color="#1565C0" />
      </Button>
    }
    collapsible
    className="flow-text"
    bubbleStyle={{
      borderColor: '#1565C0',
    }}
    contentStyle={{ backgroundColor: '#1565C0ed', color: 'white' }}
    title={event.content}
    createdAt={<TimeAgo date={event.date} formatter={formatter} />}
    icon={<Icon path={mdiAccessPointNetwork} size={1} color="#1565C0" />}>
    {event.details}
  </TimelineEvent>
)

NewNode.propTypes = {
  event: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(NewNode)
