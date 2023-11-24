import React from 'react'
import { INoticiasNormalizadas } from '../Noticias'
import Tarjeta from '../tarjeta/Tarjeta'

interface ListaProps {
    noticias : INoticiasNormalizadas [],
    setModal: (noticia: INoticiasNormalizadas | null) => void; 
}

const Lista = ({ noticias, setModal }: ListaProps) => {
  return (
    <ul>
    {noticias.map((noticia) => (
      <li key={noticia.id}>
        <Tarjeta noticia={noticia} setModal={setModal} />
      </li>
    ))}
  </ul>
  )
}

export default Lista
