import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AngleDownIcon from "./svg/AngleDownIcon"

const SectionWho = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        who {
          title
          subtitle
          description
        }
      }
    }
  `)

  const { title, description, subtitle } = data.dataJson.who

  return (
    <section className='py-20' id='who'>
      <div className='container mx-auto text-center'>
        <h2 className='py-10 uppercase text-4xl'>{title}</h2>
        <AngleDownIcon className="bp-5" />

        <hr />
        <h5 className='pt-10 pb-3 uppercase'>{subtitle}</h5>
        <p
          className='font-light px-6 lg:px-2'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  )
}

export default SectionWho
