import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    /*const router = useRouter()
    -> router.query.productId */
    const {query,  query: { productId } } = useRouter()
    //console.log(query);

    const [Avo, setAvo] = useState([])
    
    useEffect( async () => {
        if(productId) {
            try {
                const response = await fetch(`/api/avo/${productId}`)
                const { avo } = await response.json()
                setAvo(avo)
                
            } catch (error) {
                console.log(error)
            }
        }

    }, [productId])


    return (
        <div>
            <h1>{Avo.name}</h1>
            <p>{Avo.attributes?.description}</p>
        </div>
    )
}

export default ProductItem
