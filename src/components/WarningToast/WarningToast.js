import React from 'react'
import { toast } from 'react-toastify'

export default ({ content, action }) =>
  toast.warning(<div onClick={action}>{content}</div>, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'orangeGradient',
    bodyClassName: 'flow-text',
  })
