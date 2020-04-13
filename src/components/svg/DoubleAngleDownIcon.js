import React from "react"

const DoubleAngleDownIcon = ({ className, title = "" }) => (
  <svg
    style={{ display: "inline-block" }}
    className={`fill-current h-10 w-10 ${className}`}
    viewBox='0 0 1792 1792'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>{title}</title>

    <path d='M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z' />
  </svg>
)

export default DoubleAngleDownIcon
