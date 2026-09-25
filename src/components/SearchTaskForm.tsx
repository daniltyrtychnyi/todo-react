import Field from './Field'
import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

export default () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('Tasks')
    }

    const {
        searchQuery,
        setSearchQuery,
    } = context

    return (
        <form className="todo__search-task-form">
            <Field
                id="search-task"
                type="search"
                label="Search note..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}