
import Cita from './Cita'
import {screen, waitFor, fireEvent} from '@testing-library/react' 
import { render } from '../../test-utils'



describe('Componente Cita', ()=> {
  test('Se renderizan en UI los elementos del componente', ()=>{
   render(<Cita/>)
   const mensaje = screen.getByText(/No se encontro ninguna cita/i)
   const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
   const obtenerBoton = screen.getByRole('button', {name:/Obtener cita aleatoria/i})
   const borrarBoton = screen.getByRole('button', {name:/Borrar/i})

   
   expect(mensaje).toBeInTheDocument()
   expect(input).toBeInTheDocument()
   expect(obtenerBoton).toBeInTheDocument()
   expect(borrarBoton).toBeInTheDocument()
})

test('Renderiza el mensaje CARGANDO...', async () => {
  render(<Cita />);
  const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
  fireEvent.change(input, { target: { value: /lisa/i } })
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i)
  fireEvent.click(obtenerBoton)

  const cargando = await screen.findByText(/CARGANDO.../i)
  expect(cargando).toBeInTheDocument()
});


test('Buscar cita Personaje', async() => {
  render(<Cita />)
  const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
  fireEvent.change(input, { target: { value: 'Lisa' } });
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i)
  fireEvent.click(obtenerBoton)
  //const cargando = await screen.findByText(/CARGANDO.../i)  
  //expect(cargando).toBeInTheDocument()
  //const cita = await screen.findByText(/Lisa/i)
  //expect(cita).toBeInTheDocument()
  await waitFor(() => screen.findByText(/Lisa/i))  
});

test('Obtener cita aleatoria', async() => {
    render(<Cita />)
    
    const obtenerBoton = screen.getByLabelText(/Obtener cita/i)
    fireEvent.click(obtenerBoton)
    const cargando = await screen.findByText(/CARGANDO.../i)
    
    expect(cargando).toBeInTheDocument()
    const cita = await screen.findByText(/Homer/i)
    expect(cita).toBeInTheDocument()  
  }); 
  
test('Limpiar input con el botón Borrar', () => {
  render(<Cita />);
  const input= screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
  const borrarBoton = screen.getByLabelText(/Borrar/i);
  fireEvent.change(input, { target: { value: 'Homer' } });
  fireEvent.click(borrarBoton);
  expect(input).toHaveValue('');
});

test('Borrar contenido del input y de la cita con el botón Borrar', () => {
  render(<Cita />);
  const input= screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
  const mensaje = screen.getByText(/No se encontro ninguna cita/i);
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i)
  const borrarBoton = screen.getByLabelText(/Borrar/i);
  fireEvent.change(input, { target: { value: 'Lisa' } })
  fireEvent.click(obtenerBoton)
  fireEvent.click(borrarBoton);
  expect(mensaje).toBeInTheDocument()
  
});

test('Mensaje de error al ingresar personaje invalido', async () => {
  render(<Cita />);
  const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
  const obtenerBoton = screen.getByLabelText(/Obtener cita/i);

  fireEvent.change(input, { target: { value: 'Lola' } });
  fireEvent.click(obtenerBoton);
  const mensaje = await  screen.findByText('Por favor ingrese un nombre válido')

  expect(mensaje).toBeInTheDocument()
});

})