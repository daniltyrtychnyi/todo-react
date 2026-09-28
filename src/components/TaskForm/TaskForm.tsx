import Field from '../Field/Field'
import Button from '../Button'
import {useContext} from 'react'
import type {SubmitEvent, ChangeEvent} from 'react'
import {TasksContext} from '../../context/TasksContext'
import styles from './TaskForm.module.scss'

const TaskForm = () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('TasksContext must be used with in TasksProvider')
    }

    const {
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        editTask,
        editingTaskId,
        closeDialog,
        fieldInputRef,
        formError,
        setFormError,
    } = context

    const onSubmit = (event: SubmitEvent) => {
        event.preventDefault()

        const clearTitle = newTaskTitle.trim()

        const success = editingTaskId
            ? editTask(editingTaskId, clearTitle)
            : addTask(clearTitle)

        if (!success) {
            fieldInputRef.current?.focus()

            return
        }

        closeDialog()
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        const clearValue = value.trim()
        const isOnlySpaces = clearValue.length === 0 && value.length > 0

        setNewTaskTitle(value)
        setFormError(isOnlySpaces ? 'The task field cannot be empty.' : '')
    }

    return (
        <form
            className={styles.taskForm}
            onSubmit={onSubmit}
        >
            <Field
                id="new-task"
                label="Input your note..."
                value={newTaskTitle}
                error={formError}
                onChange={onChange}
                ref={fieldInputRef}
            />
            <div className={styles.actions}>
                <Button
                    variant="transparent"
                    onClick={closeDialog}
                    title="Cancel"
                />
                <Button
                    type="submit"
                    title="Apply"
                />
            </div>
        </form>
    )
}

export default TaskForm