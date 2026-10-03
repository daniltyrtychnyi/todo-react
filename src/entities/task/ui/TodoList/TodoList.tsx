import clsx from 'clsx'
import { memo } from 'react'
import TodoItem from '../TodoItem'
import { useTasksContext } from '../../model/TasksContext'
import styles from './TodoList.module.scss'

const TodoList = () => {
    const {
        tasks,
        filterTasksBySearch,
    } = useTasksContext()

    const isEmpty = filterTasksBySearch?.length === 0 || tasks.length === 0

    if (isEmpty) {
        return (
            <div className={clsx(styles.emptyWrapper, {
                [styles.isVisible]: isEmpty,
            })}
            >
                Empty...
            </div>
        )
    }

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