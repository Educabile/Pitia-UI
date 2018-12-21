import React from 'react'
import { toast } from 'react-toastify'
import {
  notificationOgg,
  notificationOpus,
  notificationMp3,
  notificationWav,
} from 'assets/sounds/notifications'

export default ({ content, action }) => {
  toast.info(
    <>
      <div onClick={action}>{content}</div>
      <audio autoPlay>
        <source src={notificationOpus} type="audio/ogg; coded=opus" />
        <source src={notificationOgg} type="audio/ogg; coded=vorbis" />
        <source src={notificationMp3} type="audio/mpeg" />
        <source src={notificationWav} type="audio/wav" />
      </audio>
    </>,
    {
      position: 'top-right',
      autoClose: 4000,
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
