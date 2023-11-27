import React from 'react';
import { SuscribeImage, CloseButton as Close } from '../../../assets';
import { INoticiasNormalizadas } from '../Noticias';
import {
  CloseButton,
  TarjetaModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  BotonSuscribir,
  CotenedorTexto,
} from '../styled';

interface ModalContentProps {
  noticia: INoticiasNormalizadas;
  onSubscribe: () => void;
}

const Contenido = ({ noticia, onSubscribe }: ModalContentProps) => {
  return (
    <TarjetaModal>
      <CloseButton onClick={onSubscribe}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      {noticia.esPremium ? (
        <>
          <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
          <CotenedorTexto>
            <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
            <DescripcionModal>
              Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
            </DescripcionModal>
            <BotonSuscribir onClick={onSubscribe}>Suscríbete</BotonSuscribir>
          </CotenedorTexto>
        </>
      ) : (
        <>
          <ImagenModal src={noticia.imagen} alt="news-image" />
          <CotenedorTexto>
            <TituloModal>{noticia.titulo}</TituloModal>
            <DescripcionModal>{noticia.descripcion}</DescripcionModal>
          </CotenedorTexto>
        </>
      )}
    </TarjetaModal>
  );
};

export default Contenido;