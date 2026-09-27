import { useRef, useState, useCallback } from 'react'

const useTaskDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
    const [error, setError] = useState('')

    const fieldInputRef = useRef<HTMLInputElement>(null)

    const closeDialog = useCallback(() => {
        setIsDialogOpen(false)
        setNewTaskTitle('')
        setEditingTaskId(null)
        setError('')
    }, [])

    return {
        isDialogOpen,
        setIsDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        editingTaskId,
        setEditingTaskId,
        error,
        setError,
        fieldInputRef,
        closeDialog,
    }
}

export default useTaskDialog