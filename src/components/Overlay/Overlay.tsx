import {useRef, useEffect, memo, useContext} from 'react'
import TaskForm from '../TaskForm/TaskForm'
import type { MouseEvent } from 'react'
import {TasksContext} from '../../context/TasksContext'
import styles from './Overlay.module.scss'

const Overlay = () => {
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
            className={styles.overlay}
            aria-labelledby="new-task-title"
            onClose={closeDialog}
            onClick={outsideClick}
            ref={dialogRef}
        >
            <div className={styles.wrapper}>
                <h2 className={styles.title} id="new-task-title">
                    {editingTaskId ? 'Edit note' : 'New Note'}
                </h2>
                <TaskForm />
            </div>
        </dialog>
    )
}

export default memo(Overlay)
