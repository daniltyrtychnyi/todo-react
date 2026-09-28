import clsx from 'clsx'
import TodoItem from '../TodoItem/TodoItem'
import {memo} from 'react'
import {useTasksContext} from '../../context/TasksContext'
import styles from './TodoList.module.scss'
import Loader from '../Loader'

const TodoList = () => {
    const {
        tasks,
        filterTasksBySearch,
        isLoading,
    } = useTasksContext()

    const isEmpty = filterTasksBySearch?.length === 0 || tasks.length === 0

    if (isLoading) {
        return <Loader/>
    }

    if (isEmpty && !isLoading) {
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