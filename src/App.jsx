import { InputTarea } from './components/InputTarea'
import { ListaTareas } from './components/ListaTareas'
import { useStore } from './useStore'

function App() {
  const borrarTodo = useStore((state) => state.borrarTodo)

  return (
    // Reemplazo: max-w-lg (ancho), mx-auto (centrar), mt-10 (margen superior), p-6 (padding), bg-white (fondo blanco), shadow-2xl (sombra grande), rounded-xl (bordes curvos)
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-2xl rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">To-Do List Profesional</h1>
      <InputTarea />
      <hr className="my-4 border-gray-200" /> {/* my-4 (margen vertical) */}
      <ListaTareas />

      <button
        onClick={borrarTodo}
        // Clases: mt-5 (margen superior), w-full (ancho completo), py-2 (padding vertical), bg-red-500 (fondo rojo), text-white (texto blanco), rounded-lg (bordes curvos), hover:bg-red-600 (efecto hover)
        className="mt-5 w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
      >
        Borrar Todas las Tareas
      </button>

    </div>
  )
}

export default App