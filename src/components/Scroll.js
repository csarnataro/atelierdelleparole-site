import React, { useEffect } from "react"
import smoothscroll from "smoothscroll-polyfill"

const handleKeyDown = props => event => {
  if (event.keyCode === 13) {
    return handleClick(props)
  }
}

const handleClick = props => event => {
  event.preventDefault()
  let elem = 0
  let scroll = true
  const { type, element, offset, timeout } = props
  if (type && element) {
    switch (type) {
      case "class":
        elem = document.getElementsByClassName(element)[0]
        scroll = elem ? true : false
        break
      case "id":
        elem = document.getElementById(element)
        scroll = elem ? true : false
        break
      default:
    }
  }
  scroll
    ? scrollTo(elem, offset, timeout)
    : console.log(`Element not found: ${element}`) // eslint-disable-line
}

const scrollTo = (element, offSet = 0, timeout = null) => {
  const elemPos = element
    ? element.getBoundingClientRect().top + window.pageYOffset
    : 0
  if (timeout) {
    setTimeout(() => {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" })
    }, timeout)
  } else {
    window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" })
  }
}

const Element = props => props.children

const Scroll = props => {
  useEffect(() => smoothscroll.polyfill())
  return (
    <Element>
      {typeof props.children === "object" ? (
        React.cloneElement(props.children, {
          onClick: handleClick(props),
          onKeyDown: handleKeyDown(props),
        })
      ) : (
        <span
          role='button'
          tabIndex={0}
          onClick={handleClick(props)}
          onKeyDown={handleKeyDown(props)}
        >
          {props.children}
        </span>
      )}
    </Element>
  )
}
export default Scroll
