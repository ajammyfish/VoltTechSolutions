'use client'
import Link from "next/link"
import { FaBolt } from 'react-icons/fa'
import { useState, useEffect } from "react"
import { AiFillCaretDown } from 'react-icons/ai'

const Nav = () => {

  const [aboutdown, setAboutDown] = useState(false)
  const [nav, setNav] = useState(false)

  return (
    <nav>
      <div className="navcontainer">
        <div className="logo"><FaBolt className="navicon" />VTSolutions</div>
        <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="about-dropdown">
              <Link href="/about">About</Link>

              <ul className="about-menu">
                <li><Link href='/about/webdesign'>Web Design</Link></li>
                <li><Link href='/about/bespokesoftware'>Bespoke Software</Link></li>
                <li><Link href='/about/businessanalytics'>Business Analytics</Link></li>
              </ul>
            </li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div onClick={nav ? () => {
          setNav(false)
          setAboutDown(false)
          } : () => {
            setNav(true)
            setAboutDown(false)
            }} className={!nav ? 'burger burgeropen' : 'burger'}>
          <div className={!nav ? "line1" : 'line1 line1open'}></div>
          <div className={!nav ? "line2" : 'line2 line2open'}></div>
          <div className={!nav ? "line3" : 'line3 line3open'}></div>
        </div>
      </div>
      <ul  className={nav ? "nav-links-min dropdown" : 'nav-links-min'}>
        <li className="mnl" onClick={() => setNav(false)}><Link className="min-a" href="/">Home</Link></li>
        <li className=" mnl min-about">
          <Link onClick={() => setNav(false)} href="/about">About</Link>
          <div className="clickdown">
            <AiFillCaretDown className="down-icon" onClick={aboutdown ? () => setAboutDown(false) : () => setAboutDown(true)} />
            <ul className={aboutdown ? "mam-expand" : "min-about-menu"}>
              <li><Link onClick={() => {
                setNav(false)
                setAboutDown(false)
              }} href='/about/webdesign'>Web Design</Link></li>
              <li><Link onClick={() => {
                setNav(false)
                setAboutDown(false)
              }} href='/about/bespokesoftware'>Bespoke Software</Link></li>
              <li><Link onClick={() => {
                setNav(false)
                setAboutDown(false)
              }} href='/about/businessanalytics'>Business Analytics</Link></li>
            </ul>
          </div>

        </li>
        <li className="mnl" onClick={() => setNav(false)}><Link className="min-a" href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav