import {render, screen, waitFor, fireEvent} from '../test-utils'
import Cita from '../features/quote/Cita'

describe('Renderizado de componente <Cita/>', () => {
    test('Se renderizan los elementos del componente', () => {
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
})

describe('Pruebas de búsqueda', () => {
    test('Renderiza una cita random si el input está vacío', async () => {
        render(<Cita/>)            

        const obtenerBoton = screen.getByRole('button', {name:/Obtener cita aleatoria/i})
        fireEvent.click(obtenerBoton)
        await waitFor(() => screen.findByText(/For once maybe someone will call me/i));
    })

})