import { useState } from 'react'
import { useStore } from '../useStore'

export const InputTarea = () => {
  const [texto, setTexto] = useState('')
  const agregarTarea = useStore((state) => state.agregarTarea)

  const manejarEnvio = (e) => {
    e.preventDefault()
    if (!texto.trim()) return // Usamos .trim() para evitar espacios vacíos
    agregarTarea(texto) 
    setTexto('')
  }

  return (
    // Clases: flex (contenedor flex), mb-4 (margen inferior)
    <form onSubmit={manejarEnvio} className="flex mb-4">
      <input 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="¿Qué tienes que hacer?"
        // Clases: flex-grow (ocupa espacio restante), p-2 (padding), border (borde), rounded-l-lg (curva solo a la izquierda)
        className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        // Clases: p-3 (padding), bg-blue-500 (fondo azul), text-white (texto blanco), rounded-r-lg (curva solo a la derecha), hover:bg-blue-600
        className="p-3 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition duration-300"
      >
        Agregar
      </button>
    </form>
  )
}