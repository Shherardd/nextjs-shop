import React from 'react'
/* Path aliases */
import { Navbar } from '@components/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
                {children}
            <footer>Footer right there</footer>
        </>
    )
}

export default Layout
