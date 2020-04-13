import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BusinessCardFront from "./images/BusinessCardFrontImage"
import BusinessCardBack from "./images/BusinessCardBackImage"
import AngleDownIcon from "./svg/AngleDownIcon"

const SectionContacts = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        contacts {
          title
          header
          subheader
          description
          email
        }
      }
    }
  `)

  const {
    title,
    header,
    subheader,
    description,
    email,
  } = data.dataJson.contacts

  return (
    <section className='py-20 bg-gray-100' id="contacts">
      <div className='container mx-auto text-center'>
        <h2 className='py-10 uppercase text-4xl'>{title}</h2>
        <AngleDownIcon className="bp-5" />

        <hr />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-12'>
          <BusinessCardBack className="hidden lg:block" />
          <BusinessCardFront className="hidden lg:block" />
          <div>
            <h4 className="uppercase mb-6">{header}</h4>
            <h5 className="uppercase text-sm mb-6">{subheader}</h5>
            <p className="mb-6 font-light">{description}</p>
            <div className="text-malachite font-bold" dangerouslySetInnerHTML={{__html: email}} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContacts
