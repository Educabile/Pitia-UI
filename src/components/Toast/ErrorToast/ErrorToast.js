import React from 'react'
import { toast } from 'react-toastify'
import { notification18 } from 'assets/sounds/notifications'

export default ({ content, action, autoClose = 8000 }) =>
  toast.error(
    <>
      <div onClick={action}>{content}</div>
      <audio src={notification18} autoPlay />
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
