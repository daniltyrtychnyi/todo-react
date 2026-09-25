import Field from './Field'
import {type SubmitEvent, useContext} from 'react'
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
    } = context

    const onSubmit = (event: SubmitEvent) => {
        event.preventDefault()

        if (!editingTaskId) {
            addTask()

            return
        }

        editTask(editingTaskId)
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
                onChange={(event) => setNewTaskTitle(event.target.value)}
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