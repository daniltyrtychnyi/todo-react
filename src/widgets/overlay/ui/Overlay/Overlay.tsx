import { useRef, useEffect, memo } from 'react'
import type { MouseEvent } from 'react'
import {TaskForm, useFormTaskContext} from '@/features/form-task'
import styles from './Overlay.module.scss'

const Overlay = () => {
    const {
        isDialogOpen,
        closeDialog,
        editingTaskId,
    } = useFormTaskContext()

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
