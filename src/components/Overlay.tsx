import '../styles/components/overlay.css'
import {useRef, useEffect, memo, useContext} from 'react'
import TaskForm from './TaskForm'
import type { MouseEvent } from 'react'
import {TasksContext} from '../context/TasksContext'

export default memo(() => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('TasksContext must be used with in TasksProvider')
    }

    const {
        isDialogOpen,
        closeDialog,
        editingTaskId,
    } = context

    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (isDialogOpen) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [isDialogOpen])

    const outsideClick = (event: MouseEvent) => {
        const isDialog = event.target === event.currentTarget

        if (isDialog) {
            closeDialog()
        }
    }

    return (
        <dialog
            className="overlay"
            aria-labelledby="new-task-title"
            onClose={closeDialog}
            onClick={outsideClick}
            ref={dialogRef}
        >
            <h2 className="overlay__title" id="new-task-title">
                {editingTaskId ? 'Edit note' : 'New Note'}
            </h2>
            <TaskForm />
        </dialog>
    )
})