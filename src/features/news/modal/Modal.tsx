import React from 'react';
import { SuscribeImage, CloseButton as Close } from '../../../assets';
import { INoticiasNormalizadas } from '../Noticias';
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  BotonSuscribir,
  CotenedorTexto,
} from '../styled';

interface ModalProps {
  noticia: INoticiasNormalizadas;
  setModal: (noticia: INoticiasNormalizadas | null) => void;
}

const Modal = ({ noticia, setModal }: ModalProps) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        {noticia.esPremium && (
          <>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert('¡Suscripto!');
                    setModal(null);
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </>
        )}
        {!noticia.esPremium && (
            <>
            <ImagenModal src={noticia.imagen} alt="news-image" />
            <CotenedorTexto>
              <TituloModal>{noticia.titulo}</TituloModal>
              <DescripcionModal>{noticia.descripcion}</DescripcionModal>
            </CotenedorTexto>
            </>
        )}
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default Modal;