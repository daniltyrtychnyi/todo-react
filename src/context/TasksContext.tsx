import { createContext } from 'react'
import type { ReactNode, RefObject, Dispatch, SetStateAction } from 'react'
import type {Task} from '../types'
import useTasks from '../hooks/useTasks'

type TasksContextValue = {
    tasks: Task[],
    newTaskTitle: string,
    setNewTaskTitle: (title: string) => void,
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>,
    editingTaskId: string | null,
    setEditingTaskId: Dispatch<SetStateAction<string | null>>,
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>,
    fieldInputRef: RefObject<HTMLInputElement | null>,
    closeDialog: () => void,
    addTask: () => void,
    toggleTask: (taskId: string) => void,
    editTask: (taskId: string) => void,
    deleteTask: (taskId: string) => void,
    filterTasksBySearch: Task[] | null,
}

type TasksProviderProps = {
    children: ReactNode,
}

export const TasksContext = createContext<TasksContextValue | undefined>(undefined)

export const TasksProvider = (props: TasksProviderProps) => {
    const {children} = props

    const {
        tasks,
        newTaskTitle,
        setNewTaskTitle,
        isDialogOpen,
        setIsDialogOpen,
        editingTaskId,
        setEditingTaskId,
        searchQuery,
        setSearchQuery,
        fieldInputRef,
        closeDialog,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
        filterTasksBySearch,
    } = useTasks()

    return (
        <TasksContext.Provider
            value={{
                tasks,
                newTaskTitle,
                setNewTaskTitle,
                isDialogOpen,
                setIsDialogOpen,
                editingTaskId,
                setEditingTaskId,
                searchQuery,
                setSearchQuery,
                fieldInputRef,
                closeDialog,
                addTask,
                toggleTask,
                editTask,
                deleteTask,
                filterTasksBySearch,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}