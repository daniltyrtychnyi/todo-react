import { useRef, useState, useCallback } from 'react'

const useTaskDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
    const [formError, setFormError] = useState('')

    const fieldInputRef = useRef<HTMLInputElement>(null)

    const closeDialog = useCallback(() => {
        setIsDialogOpen(false)
        setNewTaskTitle('')
        setEditingTaskId(null)
        setFormError('')
    }, [])

    return {
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
    }
}

export default useTaskDialog