import {rest } from 'msw'
import { API_URL } from '../app/constants';
import { citaRandom, citaPersonaje } from './dataMock';

export const handlers = [
  
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", async (req, res, ctx) => {
    console.log("Ejecutando desde MSW");
    console.log(req.url.searchParams.get('character'))
           

    return res(      
      ctx.status(200),
      ctx.json([citaRandom])
    )
  })
  
]