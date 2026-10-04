import { useState, useCallback } from 'react'

const useFormDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
    const [formError, setFormError] = useState('')

    const openDialog = useCallback(() => {
        setIsDialogOpen(true)
    }, [])

    const openEditDialog = useCallback((id: string, title: string) => {
        setIsDialogOpen(true)
        setNewTaskTitle(title)
        setEditingTaskId(id)
    }, [])

    const closeDialog = useCallback(() => {
        setIsDialogOpen(false)
        setNewTaskTitle('')
        setEditingTaskId(null)
        setFormError('')
    }, [])

    return {
        isDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        editingTaskId,
        formError,
        setFormError,
        openDialog,
        openEditDialog,
        closeDialog,
    }
}

export default useFormDialog
