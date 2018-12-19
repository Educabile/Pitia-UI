import React from 'react'
import { toast } from 'react-toastify'

export default ({ content, action, autoClose = 4000 }) =>
  toast.info(<div onClick={action}>{content}</div>, {
    position: 'top-right',
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'blueGradient',
    bodyClassName: 'flow-text',
  })
