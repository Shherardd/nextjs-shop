import React from 'react'
import { Navbar } from '@components/Navbar'

const Header = () => {
    return (<>
            <header>
                <Navbar/>
            </header>

            <style jsx>{`
                header {
                    background-color: black;
                }
            `}</style>
        </>
    )}
export { Header }