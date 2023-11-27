import React from 'react'
import { INoticiasNormalizadas } from '../Noticias'
import { ListaNoticias } from '../styled';


interface ListaProps {
    noticias : INoticiasNormalizadas []
    render: (noticia: INoticiasNormalizadas ) => React.ReactNode;     
}

const Lista = ({ noticias, render }: ListaProps) => {

  return (    
    <ListaNoticias>        
        {noticias.map((noticia) => {
         return render(noticia)
        })}
    </ListaNoticias>    
  )
}

export default Lista
