import Field from './Field'
import {useContext} from 'react'
import type {SubmitEvent, ChangeEvent} from 'react'
import {TasksContext} from '../context/TasksContext'

export default () => {
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
        error,
        setError,
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
        setError(isOnlySpaces ? 'The task field cannot be empty.' : '')
    }

    return (
        <form
            className="overlay__new-task-form"
            onSubmit={onSubmit}
        >
            <Field
                id="new-task"
                label="Input your note..."
                value={newTaskTitle}
                error={error}
                onChange={onChange}
                ref={fieldInputRef}
            />
            <div className="overlay__actions">
                <button
                    className="overlay__cancel-button button button--transparent"
                    type="button"
                    onClick={closeDialog}
                >
                    Cancel
                </button>
                <button
                    className="overlay__apply-button button"
                    type="submit"
                >
                    Apply
                </button>
            </div>
        </form>
    )
}