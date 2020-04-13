import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AngleDownIcon from "./svg/AngleDownIcon"

const SectionAbout = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        about {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.dataJson.about

  return (
    <section className='py-20' id="about">
      <div className='container mx-auto text-center'>
        <h2 className="py-10 uppercase text-4xl">{title}</h2>
        <AngleDownIcon className="bp-5" />
        <hr />
        <p className="pt-10 font-light px-6 lg:px-2" dangerouslySetInnerHTML={{__html: description}} />
      </div>
    </section>
  )
}

export default SectionAbout
