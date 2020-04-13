import React from "react"
import Layout from "../components/Layout"
import SectionAbout from "../components/SectionAbout"
import SectionContacts from "../components/SectionContacts"
import SectionIntro from "../components/SectionIntro"
import SectionServices from "../components/SectionServices"
import SectionWho from "../components/SectionWho"
import SEO from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <SectionIntro />
      <SectionAbout />
      <SectionServices />
      <SectionWho />
      <SectionContacts />
    </Layout>
  )
}

export default IndexPage
