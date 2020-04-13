/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import Footer from "./Footer"
import Navigation from "./Navigation"


const Layout = ({ children }) => {
  const [shrinkedNav, setShrinkedNav] = useState(false)

  const handleWaypointEnter = () => {
    setShrinkedNav(false)
  }

  const handleWaypointLeave = () => {
    setShrinkedNav(true)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation shrinked={shrinkedNav} siteTitle={data.site.siteMetadata.title} />
      <Waypoint
        topOffset="-20%"
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      ></Waypoint>

      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
