import { useMemo } from 'react'
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
        filteredTasks,
        errorRequest,
        clearError,
        isLoading,
        disappearingTaskId,
        selectedFilter,
        setSelectedFilter,
    } = useTasks()

    const value = useMemo(() => ({
        tasks,
        searchQuery,
        setSearchQuery,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
        filteredTasks,
        errorRequest,
        clearError,
        isLoading,
        disappearingTaskId,
        selectedFilter,
        setSelectedFilter
    }), [
        tasks,
        searchQuery,
        setSearchQuery,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
        filteredTasks,
        errorRequest,
        clearError,
        isLoading,
        disappearingTaskId,
        selectedFilter,
        setSelectedFilter
    ])

    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider