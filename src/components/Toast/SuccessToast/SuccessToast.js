import React from 'react'
import { toast } from 'react-toastify'
import { notification } from 'assets/sounds/notifications'

export default ({ content, action }) =>
  toast.info(
    <>
      <div onClick={action}>{content}</div>
      <audio src={notification} autoPlay />
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
