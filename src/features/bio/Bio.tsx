import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { ContenedorBio, ContenedorBotones, BotonBio, Imagen, Titulo, Descripcion } from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre) => (
      <BotonBio
        key={nombre}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <ContenedorBio>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>      
          <Imagen src={bioActiva.image} alt={bioActiva.nombre}/>        
      <Titulo>{bioActiva.nombre}</Titulo>
      <Descripcion>{bioActiva.descripcion}</Descripcion>           
    </ContenedorBio>      
  );
};

export default Bio;
