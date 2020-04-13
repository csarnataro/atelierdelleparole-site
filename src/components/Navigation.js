import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"
import HamburgerMenuIcon from './svg/HamburgerMenuIcon'

const Navigation = ({ shrinked }) => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        nav {
          headline
          menuItems {
            label
            link
          }
        }
      }
    }
  `)

  const { headline, menuItems } = data.dataJson.nav

  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <ResponsiveMenu
      shrinked={shrinked}
      toggle={toggle}
      open={open}
      headline={headline}
      menuItems={menuItems}
    />
  )
}

/* 
  const className = shrinked
    ? `${baseClassName} bg-malachite py-0`
    : `${baseClassName} bg-transparent py-6`

    */
const ResponsiveMenu = ({ toggle, open, headline, menuItems, shrinked }) => (
  <nav
    className={`
      ${
        shrinked
          ? "border-b border-white-30 bg-malachite py-2 lg:py-0"
          : "border-b lg:border-none bg-transparent py-2 lg:py-6"
      }
      mt-0 fixed w-full z-10 top-0
      transition-all duration-500 ease-in-out 
      flex items-center justify-between flex-wrap`}
  >
    <div className='container mx-auto flex items-center justify-between flex-wrap'>
      <div className='flex justify-center lg:justify-start text-white font-extrabold'>
        <a
          className='no-underline hover:text-white hover:no-underline'
          href='/'
        >
          <h1 className='text-lg sm:text-xl lg:text-2xl pl-2 uppercase text-shadow'>
            {headline}
          </h1>
        </a>
      </div>
      {/* <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight'>{headline}</span>
    </div> */}
      <div className='block lg:hidden mr-2'>
        <button
          onClick={toggle}
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-white hover:text-white hover:border-white'
        >
          <span className='text-white'>
            <HamburgerMenuIcon />
          </span>
        </button>
      </div>
      <div
        id='_foo'
        className={` ${
          open ? "block" : "hidden"
        } lg:block flex content-center lg:justify-end w-full lg:w-auto`}
      >
        {/* <ul className='lg:w-auto w-full list-reset lg:flex lg:flex-1 items-center bg-white-80'> */}
        <Scrollspy
          className={`${
            shrinked ? "bg-transparent" : "bt-white-80"
          } lg:w-auto w-full list-reset lg:flex lg:flex-1 items-center bg-white-80`}
          items={["intro", "about", "services", "who", "contacts"]}
          currentClassName='bg-white text-gray-600'
          offset={-300}
        >
          {menuItems.map(menuItem => (
            <li
              className={`${
                shrinked ? "text-white" : "text-gray-600"
              } hover:bg-white hover:text-gray-600`}
              key={menuItem.link}
            >
              <Scroll type='id' element={menuItem.link.substring(1)}>
                <a
                  className='font-bold text-xs inline-block p-4 uppercase no-underline tracking-wider'
                  href={menuItem.link}
                >
                  {menuItem.label}
                </a>
              </Scroll>
            </li>
          ))}
        </Scrollspy>
        {/* </ul> */}
      </div>
    </div>
  </nav>
)

export default Navigation
