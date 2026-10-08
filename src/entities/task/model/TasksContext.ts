import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { Task } from './types'

type TasksContextValue = {
    tasks: Task[],
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>,
    addTask: (title: string) => void,
    toggleTask: (taskId: string, isDone: boolean) => void,
    editTask: (taskId: string, title: string) => void,
    deleteTask: (taskId: string) => void,
    filterTasksBySearch: Task[] | null,
    errorRequest: string,
    clearError: () => void,
    isLoading: boolean,
}

const TasksContext = createContext<TasksContextValue | undefined>(undefined)

export default TasksContext
