import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
      <>
        <nav>
          <a>
          Logo
          </a>
          <menu>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </menu>
        </nav>
      <style jsx>{`
        nav {
          display:flex;
          justify-content: space-between;
          align-items: center;
          height: 5rem;
          padding: 10px 20px;
          color: white;
          margin: 0 auto;
          background-color:black;
          max-width: 120rem;
        }
        menu a {
          margin: 0 10px;
          text-decoration: none;
          color: white;
          font-size: 1.8rem;
          font-weight: 400;
          line-height: 2rem;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
      </>
    )
}

export { Navbar }
