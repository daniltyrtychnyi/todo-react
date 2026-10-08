import type {ReactNode} from 'react'
import TasksContext from './TasksContext'
import useTasks from './useTasks'

type TasksProviderProps = {
    children: ReactNode,
}

const TasksProvider = (props: TasksProviderProps) => {
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
        isLoading,
    } = useTasks()

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
                isLoading,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider