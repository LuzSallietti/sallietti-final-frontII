import { ContenedorModal } from '../styled';
import Contenido from './Contenido';
import { INoticiasNormalizadas } from '../Noticias';

interface ModalProps {
  noticia: INoticiasNormalizadas;
  setModal: (noticia: INoticiasNormalizadas | null) => void;
}
/*Refactorización sigue el Principio de Responsabilidad única
dividiendo la lógica de presentación del modal en un componente separado
(ModalContent) y el componente principal (Modal) que maneja el estado y la lógica de suscripción.
Separa las responsabilidades en dos componentes.*/

const Modal = ({ noticia, setModal }: ModalProps) => {
  const handleClick = () => {
    setTimeout(() => {
      alert('¡Suscripto!');
      setModal(null);
    }, 1000);
  };
 

  return (
    <ContenedorModal>
      <Contenido noticia={noticia} onSubscribe={handleClick} />
    </ContenedorModal>
  );
};

export default Modal;