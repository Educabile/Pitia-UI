import React from 'react'
import { toast } from 'react-toastify'

export default ({ content, action, autoClose = 6000 }) =>
  toast.warning(<div onClick={action}>{content}</div>, {
    position: 'top-right',
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'orangeGradient',
    bodyClassName: 'flow-text',
  })
