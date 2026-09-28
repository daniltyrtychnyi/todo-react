import {createContext, useContext} from 'react'
import type {ReactNode, RefObject, Dispatch, SetStateAction} from 'react'
import type {Task} from '../types'
import useTasks from '../hooks/useTasks'
import useTaskDialog from '../hooks/useTaskDialog'

type TasksContextValue = {
    tasks: Task[],
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>,
    addTask: (title: string) => boolean,
    toggleTask: (taskId: string, isDone: boolean) => void,
    editTask: (taskId: string, title: string) => boolean,
    deleteTask: (taskId: string) => void,
    filterTasksBySearch: Task[] | null,
    errorRequest: string,
    clearError: () => void,
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>,
    newTaskTitle: string,
    setNewTaskTitle: Dispatch<SetStateAction<string>>,
    editingTaskId: string | null,
    setEditingTaskId: Dispatch<SetStateAction<string | null>>,
    formError: string,
    setFormError: Dispatch<SetStateAction<string>>,
    fieldInputRef: RefObject<HTMLInputElement | null>,
    closeDialog: () => void,
}

type TasksProviderProps = {
    children: ReactNode,
}

export const TasksContext = createContext<TasksContextValue | undefined>(undefined)

export const TasksProvider = (props: TasksProviderProps) => {
    const {children} = props

    const {
        tasks,
        searchQuery,
        setSearchQuery,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
        filterTasksBySearch,
        errorRequest,
        clearError,
    } = useTasks()

    const {
        isDialogOpen,
        setIsDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        editingTaskId,
        setEditingTaskId,
        formError,
        setFormError,
        fieldInputRef,
        closeDialog,
    } = useTaskDialog()


    return (
        <TasksContext.Provider
            value={{
                tasks,
                searchQuery,
                setSearchQuery,
                addTask,
                toggleTask,
                editTask,
                deleteTask,
                filterTasksBySearch,
                errorRequest,
                clearError,
                isDialogOpen,
                setIsDialogOpen,
                newTaskTitle,
                setNewTaskTitle,
                editingTaskId,
                setEditingTaskId,
                formError,
                setFormError,
                fieldInputRef,
                closeDialog,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksContext = () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('useTasksContext must be used within TasksProvider')
    }

    return context
}