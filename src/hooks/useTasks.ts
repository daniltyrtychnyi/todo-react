import { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import type { Task } from '../types'
import useTasksLocalStorage from './useTasksLocalStorage'

const useTasks = () => {
    const {
        savedTasks,
        saveTasks,
    } = useTasksLocalStorage()

    const [tasks, setTasks] = useState<Task[]>(savedTasks ?? [])

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')

    const fieldInputRef = useRef<HTMLInputElement>(null)

    const closeDialog = useCallback(() => {
        setIsDialogOpen(false)
        setNewTaskTitle('')
        setEditingTaskId(null)
    }, [])

    const addTask = useCallback(() => {
        const clearNewTaskTitle = newTaskTitle.trim()

        if (clearNewTaskTitle.length === 0) {
            fieldInputRef.current?.focus()

            return
        }

        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(),
            title: clearNewTaskTitle,
            isDone: false,
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
        setSearchQuery('')
        closeDialog()
    }, [newTaskTitle, closeDialog])

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

    const editTask = useCallback((taskId: string) => {
        const clearNewTaskTitle = newTaskTitle.trim()

        if (clearNewTaskTitle.length === 0) {
            fieldInputRef.current?.focus()

            return
        }

        setTasks((prevTasks) => (
            prevTasks.map((prevTask) => {
                if (prevTask.id === taskId) {
                    return {
                        ...prevTask,
                        title: clearNewTaskTitle,
                    }
                }

                return prevTask
            })
        ))

        closeDialog()
    }, [newTaskTitle, closeDialog])

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
    }
}

export default useTasks