import React from 'react'
import { toast } from 'react-toastify'
import {
  notification18Ogg,
  notification18Opus,
  notification18Mp3,
  notification18Wav,
} from 'assets/sounds/notifications'

const errorToast = ({ content, action, autoClose = 8000 }) => {
  toast.error(
    <>
      <div onClick={action}>{content}</div>
      <audio autoPlay>
        <source src={notification18Opus} type="audio/ogg; coded=opus" />
        <source src={notification18Ogg} type="audio/ogg; coded=vorbis" />
        <source src={notification18Mp3} type="audio/mpeg" />
        <source src={notification18Wav} type="audio/wav" />
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
