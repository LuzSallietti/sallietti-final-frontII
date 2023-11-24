import { useEffect, useState } from "react";
import Tarjeta from "./tarjeta/Tarjeta";
import Modal from "./modal/Modal";
import { obtenerInformacion } from "./helpers/helpers";
import {   
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias
} from "./styled";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {    
    obtenerInformacion()
    .then(response => setNoticias(response))
    .catch(error => console.error(error))    
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => {
          return (
          <Tarjeta key={noticia.id} noticia={noticia} setModal={setModal}/>          
        )})}        
      </ListaNoticias>
      {modal && <Modal noticia={modal} setModal={setModal}/>}
    </ContenedorNoticias>
  );
};

export default Noticias;