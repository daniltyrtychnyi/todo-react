import '../styles/components/overlay.css'
import {useRef, useEffect, memo} from 'react'
import TaskForm from './TaskForm'
import type { MouseEvent, RefObject } from 'react'

type OverlayProps = {
    isDialogOpen: boolean,
    newTaskTitle: string,
    setNewTaskTitle: (newTaskTitle: string) => void,
    addTask: () => void,
    fieldInputRef: RefObject<HTMLInputElement | null>
    editTask: (id: string) => void,
    editingTaskId: string | null,
    closeDialog: () => void,
}

export default memo((props: OverlayProps) => {
    const {
        isDialogOpen,
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        fieldInputRef,
        editTask,
        editingTaskId,
        closeDialog,
    } = props

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
            <TaskForm
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                addTask={addTask}
                ref={fieldInputRef}
                editTask={editTask}
                editingTaskId={editingTaskId}
                closeDialog={closeDialog}
            />
        </dialog>
    )
})