import { create } from 'zustand'
import { persist } from 'zustand/middleware' // <--- 1. Importamos esto

// 2. Envolvemos todo nuestro create con "persist"
export const useStore = create(
  persist(
    (set) => ({
      tareas: [],

      agregarTarea: (texto) => set((state) => ({
        tareas: [...state.tareas, { id: Date.now(), texto: texto, completada: false }]
      })),

      eliminarTarea: (id) => set((state) => ({
        tareas: state.tareas.filter(tarea => tarea.id !== id)
      })),

      borrarTodo: () => set({ tareas: [] })
    }),
    {
      name: 'todo-storage', // <--- 3. Nombre único para guardar en el navegador
    }
  )
)