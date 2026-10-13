import {useState, useCallback, useMemo, useEffect, useReducer} from 'react'
import type {Task} from './types'
import tasksAPI from '../api/tasks'

type AddAction = {
    type: 'ADD',
    task: Task,
}

type ToggleAction = {
    type: 'TOGGLE',
    id: string,
    isDone: boolean,
}

type EditAction = {
    type: 'EDIT',
    id: string,
    title: string,
}

type deleteAction = {
    type: 'DELETE',
    id: string,
}

type GetAllAction = {
    type: 'GET_ALL',
    tasks: Task[],
}

type TasksAction = AddAction | ToggleAction | EditAction | deleteAction | GetAllAction

const tasksReducer = (state: Task[], action: TasksAction) => {
    switch (action.type) {
        case 'ADD': {
            return [...state, action.task]
        }
        case 'TOGGLE': {
            const {id, isDone} = action

            return state.map((task) =>
                task.id === id ? {...task, isDone} : task
            )
        }
        case 'EDIT': {
            const { id, title } = action

            return state.map((task) =>
                task.id === id ? { ...task, title } : task
            )
        }
        case 'DELETE': {
            return state.filter((task) => task.id !== action.id)
        }
        case 'GET_ALL': {
            return Array.isArray(action.tasks) ? action.tasks : state
        }
        default: {
            return state
        }
    }
}

const useTasks = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, [])
    const [searchQuery, setSearchQuery] = useState('')
    const [errorRequest, setErrorRequest] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [disappearingTaskId, setDisappearingTaskId] = useState<string | null>(null)

    const addTask = useCallback((title: string) => {
        if (title.length === 0) {
            return
        }

        const newTask = {
            title,
            isDone: false,
        }

        tasksAPI.add(newTask)
            .then((addedTask: Task) => {
                dispatch({type: 'ADD', task: addedTask})
                setSearchQuery('')
            })
            .catch(() => {
                setErrorRequest('Failed to add the task!')
            })
    }, [])

    const toggleTask = useCallback((taskId: string, isDone: boolean) => {
        tasksAPI.toggle(taskId, isDone)
            .then(() => {
                dispatch({type: 'TOGGLE', id: taskId, isDone})
            })
            .catch(() => {
                setErrorRequest('It was not possible to change the task status!')
            })
    }, [])

    const editTask = useCallback((taskId: string, title: string) => {
        tasksAPI.edit(taskId, title)
            .then(() => {
                dispatch({ type: 'EDIT', id: taskId, title })
            })
            .catch(() => {
                setErrorRequest('Failed to edit the task!')
            })
    }, [])

    const delayDeleteTask = 400

    const deleteTask = useCallback((taskId: string) => {
        tasksAPI.delete(taskId)
            .then(() => {
                setDisappearingTaskId(taskId)
                setTimeout(() => {
                    dispatch({ type: 'DELETE', id: taskId })
                    setDisappearingTaskId(null)
                }, delayDeleteTask)
            })
            .catch(() => {
                setErrorRequest('Failed to delete the task!')
            })
    }, [])

    const filterTasksBySearch = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()

        return clearSearchQuery.length > 0
            ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks])

    useEffect(() => {
        tasksAPI.getAll()
            .then((tasks: Task[]) => dispatch({ type: 'GET_ALL', tasks }))
            .catch(() => {
                setErrorRequest('Failed to load the tasks!')
            })
            .finally(() => setIsLoading(false))
    }, [])

    const clearError = useCallback(() => {
        setErrorRequest('')
    }, [])

    return {
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
        disappearingTaskId,
    }
}

export default useTasks
