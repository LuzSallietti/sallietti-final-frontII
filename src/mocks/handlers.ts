import {rest} from 'msw'
import { API_URL } from '../app/constants'
import { citaPersonaje, citaRandom } from './dataMock'

export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
       const data = req.url.searchParams.get('character') ? citaPersonaje : citaRandom
       console.log('Ejecutando desde msw', data)       
       
        return res(
            ctx.status(200),
            ctx.json(data)
        )
    })
]