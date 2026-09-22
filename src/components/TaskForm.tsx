import Field from './Field'
import type { SubmitEvent, RefObject } from 'react'

type TaskFormProps = {
    addTask: () => void,
    newTaskTitle: string,
    setNewTaskTitle: (newTaskTitle: string) => void,
    ref: RefObject<HTMLInputElement | null>,
    editTask: (id: string) => void,
    editingTaskId: string | null,
    closeDialog: () => void,
}

export default (props: TaskFormProps) => {
    const {
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        ref,
        editTask,
        editingTaskId,
        closeDialog,
    } = props

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
                ref={ref}
            />
            <div className="overlay__actions">
                <button
                    className="overlay__cancel-button button button--transparent"
                    type="button"
                    onClick={() => closeDialog()}
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