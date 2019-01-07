import React from 'react'
import { toast } from 'react-toastify'
import store from 'store'
import * as notifications from 'assets/sounds/notifications'

export default ({
  content,
  action,
  autoClose = store.getState().notifications.successNotifications.duration * 1000,
}) => {
  toast.info(
    <>
      <div onClick={action}>{content}</div>
      <audio autoPlay>
        <source
          src={
            notifications[
              `notification${store.getState().notifications.successNotifications.sound}Opus`
            ]
          }
          type="audio/ogg; coded=opus"
        />
        <source
          src={
            notifications[
              `notification${store.getState().notifications.successNotifications.sound}Ogg`
            ]
          }
          type="audio/ogg; coded=vorbis"
        />
        <source
          src={
            notifications[
              `notification${store.getState().notifications.successNotifications.sound}Mp3`
            ]
          }
          type="audio/mpeg"
        />
        <source
          src={
            notifications[
              `notification${store.getState().notifications.successNotifications.sound}Wav`
            ]
          }
          type="audio/wav"
        />
      </audio>
    </>,
    {
      position: 'top-right',
      autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'greenGradient',
      bodyClassName: 'flow-text',
    }
  )

  return null
}
