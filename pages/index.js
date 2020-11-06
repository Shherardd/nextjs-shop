import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'

const Home = () => {
    const [productList, setProductList] = useState([])

    useEffect( async () => {
        /*window.fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data, length}) => {
                setProductList(data)
            })*/
        const response = await fetch('/api/avo')
        const { data } = await response.json()
        setProductList(data)
    }, [])

    return (
        <div>
            <Navbar/>
            <h1>index</h1>
            <ul>
                { productList.map((product) => 
                    <li key={product.id}>{product.name}</li>
                ) }
            </ul>    
        </div>
    )
}

export default Home

