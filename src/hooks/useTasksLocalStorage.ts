import type { Task } from '../types'
import { useCallback } from 'react'

const useTasksLocalStorage = () => {
    const LOCAL_STORAGE_KEY = 'tasks'

    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)

    const saveTasks = useCallback((tasks: Task[]) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [])

    return {
        savedTasks: savedTasks ? JSON.parse(savedTasks) : null,
        saveTasks,
    }
}

export default useTasksLocalStorage