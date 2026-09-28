import Field from '../Field/Field'
import Button from '../Button'
import type {SubmitEvent, ChangeEvent} from 'react'
import {useTasksContext} from '../../context/TasksContext'
import styles from './TaskForm.module.scss'

const TaskForm = () => {

    const {
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        editTask,
        editingTaskId,
        closeDialog,
        formError,
        setFormError,
    } = useTasksContext()

    const clearTitle = newTaskTitle.trim()

    const onSubmit = (event: SubmitEvent) => {
        event.preventDefault()

        if (editingTaskId) {
            editTask(editingTaskId, clearTitle)
        } else {
            addTask(clearTitle)
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
                    isDisabled={clearTitle.length === 0}
                />
            </div>
        </form>
    )
}

export default TaskForm