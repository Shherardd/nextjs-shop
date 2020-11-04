import { IncomingMessage, ServerResponse } from 'http'

const Avo = async (req = IncomingMessage, res = ServerResponse) => {
        
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ hola: 'mundo' }))
}

export default Avo