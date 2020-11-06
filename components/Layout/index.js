import React from 'react'
/* Path aliases */
import { Header } from '@components/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
                {children}
            <footer>Footer right there</footer>
        </>
    )
}

export default Layout
