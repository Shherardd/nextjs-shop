import { IncomingMessage, ServerResponse } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'

const ProductId = async (req = NextApiRequest, res = NextApiResponse) => {
    const ProductId = req.query.ProductId
    const db = new DB()
    const avo = await db.getById(ProductId)
    /*

    res.statusCode = 200
    res.setHeader('Content-type','Application/json')
    res.end(JSON.stringify({ product }))
    
    */
    // helper de next ->
    res.status(200).json({avo})

}

export default ProductId