import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AngleDownIcon from "./svg/AngleDownIcon"

const SectionServices = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        services {
          title
          languages
          services {
            videogames {
              title
              icon
              description
            }
            audio {
              title
              icon
              description
            }
            books {
              title
              icon
              description
            }
          }
        }
      }
    }
  `)

  const { title, services, languages } = data.dataJson.services

  const { videogames, audio, books } = services

  return (
    <section className='py-20 bg-gray-100' id="services">
      <div className='container mx-auto text-center'>
        <h2 className="py-10 uppercase text-4xl">{title}</h2>
        <AngleDownIcon className="bp-5" />
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12">
          <ServiceBox service={videogames} />
          <ServiceBox service={audio} />
          <ServiceBox service={books} />
        </div>
        <hr />
        <div className="py-12 font-light">{languages}</div>
      </div>
    </section>
  )
}

const ServiceBox = ({service}) => (
  <div>
  <img className="mx-auto" src={service.icon} alt={`Icon for ${service.title}`} />
  <h4 className="pt-10 uppercase text-sm">{service.title}</h4>
  <div className="px-6 ld:px-2 font-light mt-10" dangerouslySetInnerHTML={{__html: service.description}}></div>
</div>

)

export default SectionServices
