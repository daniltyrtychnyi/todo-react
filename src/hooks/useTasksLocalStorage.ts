import type { Task } from '../types'

const useTasksLocalStorage = () => {
    const LOCAL_STORAGE_KEY = 'tasks'

    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)

    const saveTasks = (tasks: Task[]) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }

    return {
        savedTasks: savedTasks ? JSON.parse(savedTasks) : null,
        saveTasks,
    }
}

export default useTasksLocalStorage