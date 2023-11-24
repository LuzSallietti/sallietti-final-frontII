import { INoticias } from "../fakeRest";
import { INoticiasNormalizadas } from "../Noticias";
import { obtenerNoticias } from "../fakeRest";


export const normalizarNoticias = (data: INoticias[]) => {
    return data.map((noticia) => {
        const titulo = noticia.titulo
          .split(" ")
          .map((string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
          })
          .join(" ");
    
        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - noticia.fecha.getTime()) / 60000
        );
    
        return {
          id: noticia.id,
          titulo,
          descripcion: noticia.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: noticia.esPremium,
          imagen: noticia.imagen,
          descripcionCorta: noticia.descripcion.substring(0, 100),
        };
      });
    
}

export const obtenerInformacion = async (): Promise<INoticiasNormalizadas[]> => {
    try {
      const respuesta = await obtenerNoticias();
      return normalizarNoticias(respuesta);
    } catch (error) {     
      console.error('Error al obtener la información:', error);
      return [];
    }
  };