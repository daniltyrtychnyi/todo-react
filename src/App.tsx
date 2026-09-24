import './styles/components/todo.css'
import Todo from './components/Todo'
import Overlay from './components/Overlay'
import {useState, useRef, useEffect, useCallback, useMemo} from 'react'
import type {Task} from './types'

function App() {
    const LOCAL_STORAGE_KEY = 'tasks'

    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)

        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return []
    })

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
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    return (
        <>
            <Todo
                setIsDialogOpen={setIsDialogOpen}
                tasks={tasks}
                onChange={toggleTask}
                deleteTask={deleteTask}
                setNewTaskTitle={setNewTaskTitle}
                setEditingTaskId={setEditingTaskId}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterTasksBySearch={filterTasksBySearch}
            />
            <Overlay
                isDialogOpen={isDialogOpen}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                addTask={addTask}
                fieldInputRef={fieldInputRef}
                editTask={editTask}
                editingTaskId={editingTaskId}
                closeDialog={closeDialog}
            />
        </>
    )
}

export default App
