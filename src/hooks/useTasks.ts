import {useState, useCallback, useMemo, useEffect} from 'react'
import type {Task} from '../types'
import tasksAPI from '../api/tasksAPI'

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [errorRequest, setErrorRequest] = useState('')

    const addTask = useCallback((title: string) => {
        if (title.length === 0) {
            return false
        }

        const newTask = {
            title,
            isDone: false,
        }

        tasksAPI.add(newTask)
            .then((addedTask: Task) => {
                setTasks((prevTasks) => [...prevTasks, addedTask])
                setSearchQuery('')
            })
            .catch(() => {
                setErrorRequest('Не удалось добавить задачу!')
            })

        return true
    }, [])

    const toggleTask = useCallback((taskId: string, isDone: boolean) => {
        tasksAPI.toggle(taskId, isDone)
            .then(() => {
                setTasks((prevTasks) => (
                    prevTasks.map((prevTask) => {
                        if (prevTask.id === taskId) {
                            return {
                                ...prevTask,
                                isDone,
                            }
                        }

                        return prevTask
                    })
                ))
            })
            .catch(() => {
                setErrorRequest('Не удалось изменить состояние задачи!')
            })
    }, [])

    const editTask = useCallback((taskId: string, title: string) => {
        if (title.length === 0) {
            return false
        }

        tasksAPI.edit(taskId, title)
            .then(() => {
                setTasks((prevTasks) => (
                    prevTasks.map((prevTask) => {
                        if (prevTask.id === taskId) {
                            return {
                                ...prevTask,
                                title,
                            }
                        }

                        return prevTask
                    })
                ))
            })
            .catch(() => {
                setErrorRequest('Не удалось отредактировать задачу!')
            })

        return true
    }, [])

    const deleteTask = useCallback((taskId: string) => {
        tasksAPI.delete(taskId)
            .then(() => {
                setTasks((prevTasks) => (
                    prevTasks.filter((prevTask) => prevTask.id !== taskId)
                ))
            })
            .catch(() => {
                setErrorRequest('Не удалось удалить задачу!')
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
            .then(setTasks)
            .catch(() => {
                setErrorRequest('Не удалось загрузить задачи!')
            })
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
    }
}

export default useTasks