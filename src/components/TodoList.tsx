import TodoItem from './TodoItem'
import { memo } from 'react'
import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

export default memo(() => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('TasksContext must be used in TasksProvider')
    }

    const {
        tasks,
        filterTasksBySearch,
    } = context

    return (
        <ul className="todo__list">
            {(filterTasksBySearch ?? tasks).map((task) => (
                <TodoItem
                    task={task}
                    key={task.id}
                />
            ))}
        </ul>
    )
})