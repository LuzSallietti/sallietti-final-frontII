import React from 'react'
import { TarjetaNoticia, ImagenTarjetaNoticia, TituloTarjetaNoticia, FechaTarjetaNoticia, DescripcionTarjetaNoticia, BotonLectura } from '../styled'
import { INoticiasNormalizadas } from '../Noticias'

interface TarjetaProps {
    noticia: INoticiasNormalizadas;
    setModal: (noticia: INoticiasNormalizadas | null) => void; 
  }

const Tarjeta = ({ noticia, setModal }: TarjetaProps) => {
  return (
    <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
          </TarjetaNoticia>
  )
}

export default Tarjeta
