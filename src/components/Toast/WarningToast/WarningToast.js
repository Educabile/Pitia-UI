import React from 'react'
import { toast } from 'react-toastify'
import {
  notification15Opus,
  notification15Ogg,
  notification15Mp3,
  notification15Wav,
} from 'assets/sounds/notifications'

export default ({ content, action, autoClose = 6000 }) => {
  toast.warning(
    <>
      <div onClick={action}>{content}</div>
      <audio autoPlay>
        <source src={notification15Opus} type="audio/ogg; coded=opus" />
        <source src={notification15Ogg} type="audio/ogg; coded=vorbis" />
        <source src={notification15Mp3} type="audio/mpeg" />
        <source src={notification15Wav} type="audio/wav" />
      </audio>
    </>,
    {
      position: 'top-right',
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'orangeGradient',
      bodyClassName: 'flow-text',
    }
  )

  return null
}
