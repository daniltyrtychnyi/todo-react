import { useState, useCallback, useMemo, useEffect } from 'react'
import type { Task } from '../types'
import useTasksLocalStorage from './useTasksLocalStorage'

const useTasks = () => {
    const {
        savedTasks,
        saveTasks,
    } = useTasksLocalStorage()

    const [tasks, setTasks] = useState<Task[]>(savedTasks ?? [])
    const [searchQuery, setSearchQuery] = useState('')

    const addTask = useCallback((title: string) => {
        if (title.length === 0) {
            return false
        }

        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(),
            title,
            isDone: false,
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
        setSearchQuery('')

        return true
    }, [])

    const toggleTask = useCallback((taskId: string) => {
        setTasks((prevTasks) => (
            prevTasks.map((prevTask) => {
                if (prevTask.id === taskId) {
                    return {
                        ...prevTask,
                        isDone: !prevTask.isDone,
                    }
                }

                return prevTask
            })
        ))
    }, [])

    const editTask = useCallback((taskId: string, title: string) => {
        if (title.length === 0) {
            return false
        }

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

        return true
    }, [])

    const deleteTask = useCallback((taskId: string) => {
        setTasks((prevTasks) => (
            prevTasks.filter((prevTask) => prevTask.id !== taskId)
        ))
    }, [])

    const filterTasksBySearch = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()

        return clearSearchQuery.length > 0
            ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks])

    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    return {
        tasks,
        searchQuery,
        setSearchQuery,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
        filterTasksBySearch,
    }
}

export default useTasks