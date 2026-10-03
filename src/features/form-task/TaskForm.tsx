import type { SubmitEvent, ChangeEvent } from 'react'
import { useTasksContext } from '@/entities/task/model/TasksContext'
import Field from '@/shared/ui/Field'
import Button from '@/shared/ui/Button'
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
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    isDisabled={clearTitle.length === 0}
                >
                    Apply
                </Button>
            </div>
        </form>
    )
}

export default TaskForm