import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    /*const router = useRouter()
    -> router.query.productId */
    const {query,  query: { productId } } = useRouter()
    //console.log(query);

    const [Avo, setAvo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    
    useEffect( async () => {
        if(productId) {
            try {
                const response = await fetch(`/api/avo/${productId}`)
                const { avo, avo: { attributes: {shape} } } = await response.json() 
                if(avo != null){
                    setAvo(avo)
                    setIsLoading(false)
                    /* Destructuring excercice of shape from response.*/
                    console.log(shape)
                    return
                }
                setIsLoading(false)
                setNotFound(true)                            
                
            } catch (error) {
                console.log(error)                
            }
        }

    }, [productId])

    if(isLoading) {return <p>Loading ... </p> }
    if(notFound & !isLoading) {return <> 
                    <p>No encontrado</p>
                </>}
    if(!isLoading && !notFound) {return <>   
                    <h1>{Avo?.name}</h1>
                    <p>{Avo?.attributes?.description}</p>
                </>
                    }

         
    /*
    return(
         
         <>
             {Avo.length == 0 && <p>No encontrado</p>}
             <h1>{Avo?.name}</h1>
             <p>{Avo?.attributes?.description}</p>
         </>
     )      
    */
        
    
}

export default ProductItem
