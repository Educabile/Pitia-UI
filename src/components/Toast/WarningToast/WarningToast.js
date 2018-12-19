import React from 'react'
import { toast } from 'react-toastify'
import { notification15 } from 'assets/sounds/notifications'

export default ({ content, action, autoClose = 6000 }) =>
  toast.warning(
    <>
      <div onClick={action}>{content}</div>
      <audio src={notification15} autoPlay />
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
