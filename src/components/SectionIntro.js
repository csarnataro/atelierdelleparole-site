import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Scroll from "./Scroll"
import DoubleAngleDownIcon from "./svg/DoubleAngleDownIcon"

const SectionIntro = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        intro {
          title
          quote
          author
        }
      }
      heroImage: file(relativePath: { eq: "birds.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { title, quote, author } = data.dataJson.intro
  const imageData = data.heroImage.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag='section'
      id='intro'
      className='bg-fixed h-screen pt-24 lg:pt-56'
      fluid={imageData}
      backgroundColor={`#b4dcdb`}
    >
      <div className='container mx-auto text-center'>
        <h1 className='pt-12 lg:pt-0 text-4xl lg:text-6xl text-white uppercase font-bold text-shadow-md'>
          {title}
        </h1>
        <p
          className='mx-auto pt-4 px-6 lg:px-2 lg:w-1/2 text-white text-shadow lg:text-xl text-l uppercase'
          dangerouslySetInnerHTML={{ __html: quote }}
        ></p>
        <p
          className='mt-5 text-white text-shadow text-l lg:text-xl uppercase'
          dangerouslySetInnerHTML={{ __html: author }}
        ></p>
        <Scroll type='id' element='services'>
          <a
            href='#services'
            className='inline-block rounded-full w-16 h-16 mt-10 border-2 w-10 h-10 border-white border-solid'
          >
            <DoubleAngleDownIcon
              title="Vai alla sezione 'Servizi'"
              className='text-white text-4xl pt-3 mt-1'
            />
          </a>
        </Scroll>
      </div>
    </BackgroundImage>
  )
}

export default SectionIntro
