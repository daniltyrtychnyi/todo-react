import TodoItem from '../TodoItem/TodoItem'
import { memo } from 'react'
import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import styles from './TodoList.module.scss'

const TodoList = () => {
    const context = useContext(TasksContext)

    if (!context) {
        throw new Error('TasksContext must be used in TasksProvider')
    }

    const {
        tasks,
        filterTasksBySearch,
    } = context

    return (
        <ul className={styles.list}>
            {(filterTasksBySearch ?? tasks).map((task) => (
                <TodoItem
                    {...task}
                    key={task.id}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList)