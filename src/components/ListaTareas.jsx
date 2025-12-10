import { useStore } from '../useStore'

export const ListaTareas = () => {
  const { tareas, eliminarTarea } = useStore()

  if (tareas.length === 0) return <p className="text-gray-500 italic text-center">¡Todo limpio! No hay tareas.</p>

  return (
    // Clases: list-none (quitar viñetas), p-0 (quitar padding)
    <ul className="list-none p-0">
      {tareas.map((tarea) => (
        <li 
          key={tarea.id} 
          // Clases: bg-gray-50 (fondo gris muy claro), mb-2 (margen inferior), p-3 (padding), flex (contenedor flex), justify-between (espacio entre elementos), items-center (alinear verticalmente), rounded-lg (curvas)
          className="bg-gray-50 mb-2 p-3 flex justify-between items-center rounded-lg border border-gray-200"
        >
          <span className="text-gray-900">{tarea.texto}</span>
          <button 
            onClick={() => eliminarTarea(tarea.id)}
            // Clases: bg-red-400 (fondo rojo claro), text-white (texto blanco), p-1 (padding pequeño), rounded-full (botón redondo), text-xs (texto pequeño), hover:bg-red-500
            className="bg-red-400 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs hover:bg-red-500 transition duration-150"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )
}