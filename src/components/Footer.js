import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Scroll from "./Scroll"
import DoubleAngleUpIcon from "./svg/DoubleAngleUpIcon"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        contacts {
          email
          website
        }
      }
    }
  `)
  const { email, website } = data.dataJson.contacts

  return (
    <footer className='bg-malachite text-center'>
      <Scroll type='id' element='intro'>
        <a
          href='#intro'
          className='inline-block rounded-full w-16 h-16 mt-10 border-2 w-10 h-10 border-white border-solid'
        >
          <DoubleAngleUpIcon 
            title="Ritorna all'inizio della pagina"
            className='text-white text-4xl pt-2 mt-1' /> 
        </a>
      </Scroll>

      <div className='text-white font-light mt-10 pb-20'>
        <span>
          {new Date().getFullYear()} © {website} -{" "}
        </span>
        <span dangerouslySetInnerHTML={{ __html: email }} />
      </div>
    </footer>
  )
}

export default Footer
