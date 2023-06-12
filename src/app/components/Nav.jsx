'use client'
import Link from "next/link"
import { FaBolt } from 'react-icons/fa'
import { useState, useEffect } from "react"

const Nav = () => {

  const [nav, setNav] = useState(false)
  useEffect(() => {
    console.log(nav)
  }, [nav])

  return (
    <nav>
      <div className="navcontainer">
        <div className="logo">VTSolutions <FaBolt style={{color: 'greenyellow'}} /></div>
        <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
        <div onClick={nav ? () => setNav(false) : () => setNav(true)} className={!nav ? 'burger burgeropen' : 'burger'}>
          <div className={!nav ? "line1" : 'line1 line1open'}></div>
          <div className={!nav ? "line2" : 'line2 line2open'}></div>
          <div className={!nav ? "line3" : 'line3 line3open'}></div>
        </div>
      </div>
      <ul  className={nav ? "nav-links-min dropdown" : 'nav-links-min'}>
        <li onClick={() => setNav(false)}><Link href="/">Home</Link></li>
        <li  onClick={() => setNav(false)}><Link href="/about">About</Link></li>
        <li  onClick={() => setNav(false)}><Link href="/">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav