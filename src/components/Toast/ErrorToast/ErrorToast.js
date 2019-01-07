import React from 'react'
import { toast } from 'react-toastify'
import store from 'store'
import * as notifications from 'assets/sounds/notifications'

const errorToast = ({
  content,
  action,
  autoClose = store.getState().notifications.errorNotifications.duration * 1000,
}) => {
  toast.error(
    <>
      <div onClick={action}>{content}</div>
      <audio autoPlay>
        <source
          src={
            notifications[
              `notification${store.getState().notifications.errorNotifications.sound}Opus`
            ]
          }
          type="audio/ogg; coded=opus"
        />
        <source
          src={
            notifications[
              `notification${store.getState().notifications.errorNotifications.sound}Ogg`
            ]
          }
          type="audio/ogg; coded=vorbis"
        />
        <source
          src={
            notifications[
              `notification${store.getState().notifications.errorNotifications.sound}Mp3`
            ]
          }
          type="audio/mpeg"
        />
        <source
          src={
            notifications[
              `notification${store.getState().notifications.errorNotifications.sound}Wav`
            ]
          }
          type="audio/wav"
        />
      </audio>
    </>,
    {
      position: 'top-right',
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'redGradient',
      bodyClassName: 'flow-text',
    }
  )

  return null
}

export default errorToast
