import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    /*const router = useRouter()
    -> router.query.productId */
    const {query,  query: { productId } } = useRouter()
    console.log(query);
    return (
        <div>
            Pagina del producto: { productId }
        </div>
    )
}

export default ProductItem
