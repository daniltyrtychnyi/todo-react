import TodoItem from '../TodoItem/TodoItem'
import { memo } from 'react'
import {useTasksContext} from '../../context/TasksContext'
import styles from './TodoList.module.scss'

const TodoList = () => {
    const {
        tasks,
        filterTasksBySearch,
    } = useTasksContext()

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