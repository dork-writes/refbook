import React from 'react'

const ErrorMessage = ({errorMsg = ''}) => {
  return (
    <p className={`text-xs text-red-700`}>{errorMsg?.length ? errorMsg : <span>&nbsp;</span>}</p>
  )
}

export default ErrorMessage